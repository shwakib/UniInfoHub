from flask import Flask, jsonify, request
from flask_cors import CORS
from scrapers.important_dates import scrape_important_dates
from scrapers.daily_news import scrape_dailynews
from scrapers.upass_deadlines import scrape_upass_deadlines
from checkout import checkout_bp  # Import the checkout Blueprint
from database import init_db
from database.models import db, Department, Doctor,BookedSchedule
from sqlalchemy import text

app = Flask(__name__)
CORS(app)

# Initialize the database
init_db(app)

# Register the checkout Blueprint
app.register_blueprint(checkout_bp)

# Existing routes
@app.route('/api/important-dates', methods=['GET'])
def get_important_dates():
    data = scrape_important_dates()
    return jsonify(data)

@app.route('/api/daily-news', methods=['GET'])
def get_daily_news():
    data = scrape_dailynews()
    return jsonify(data)

@app.route('/api/upass-deadlines', methods=['GET'])
def get_upass_deadlines():
    data = scrape_upass_deadlines()
    return jsonify(data)

# New routes for the appointment system
@app.route('/api/departments', methods=['GET'])
def get_departments():
    departments = Department.query.all()
    return jsonify([{'id': d.id, 'name': d.name} for d in departments])

@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    # Retrieve the department_id from query parameters
    department_id = request.args.get('department_id')

    if department_id:
        # Filter doctors by department_id
        doctors = Doctor.query.filter_by(department_id=department_id).all()
    else:
        # Return all doctors if no department_id is provided
        doctors = Doctor.query.all()

    return jsonify([
        {
            'id': d.id,
            'name': d.name,
            'department': d.department.name if d.department else None
        }
        for d in doctors
    ])


@app.route('/api/doctors', methods=['POST'])
def add_doctor():
    data = request.json
    new_doctor = Doctor(name=data['name'], department_id=data.get('department_id'))
    db.session.add(new_doctor)
    db.session.commit()
    return jsonify({'message': 'Doctor added successfully!'}), 201

@app.route('/api/departments', methods=['POST'])
def add_department():
    data = request.json
    new_department = Department(name=data['name'])
    db.session.add(new_department)
    db.session.commit()
    return jsonify({'message': 'Department added successfully!'}), 201

@app.route('/api/booked-schedules', methods=['GET'])
def get_booked_schedules():
    schedules = BookedSchedule.query.all()
    return jsonify([
        {
            'id': s.id,
            'email': s.email,
            'date': s.date.strftime('%Y-%m-%d'),
            'timeslot': s.timeslot,
            'problem': s.problem,
            'doctor_name': s.doctor.name,
            'department_name': s.department.name
        }
        for s in schedules
    ])

# Add a new booked schedule
@app.route('/api/booked-schedules', methods=['POST'])
def add_booked_schedule():
    data = request.json

    # Validation can be added here to ensure required fields are provided
    new_schedule = BookedSchedule(
        email=data['email'],
        date=data['date'],
        timeslot=data['timeslot'],
        problem=data['problem'],
        doctor_id=data['doctor_id'],
        department_id=data['department_id']
    )
    db.session.add(new_schedule)
    db.session.commit()
    return jsonify({'message': 'Schedule booked successfully!'}), 201

@app.route('/api/test-db', methods=['GET'])
def test_db():
    try:
        db.session.execute(text('SELECT 1'))
        return "Database connection successful!", 200
    except Exception as e:
        return f"Database connection failed: {e}", 500

if __name__ == '__main__':
    app.run(debug=True)
