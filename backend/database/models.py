from database import db
from datetime import date, time

class Department(db.Model):
    __tablename__ = 'department'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False, unique=True)

class Doctor(db.Model):
    __tablename__ = 'doctor'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('department.id'), nullable=True)
    department = db.relationship('Department', backref='doctors')

class BookedSchedule(db.Model):
    __tablename__ = 'booked_schedules'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(100), nullable=False)  # Email of the user booking the appointment
    date = db.Column(db.Date, nullable=False)  # Date of the appointment
    timeslot = db.Column(db.String(50), nullable=False)  # Timeslot for the appointment
    problem = db.Column(db.String(255), nullable=False)  # Problem description
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'), nullable=False)  # Linked doctor
    department_id = db.Column(db.Integer, db.ForeignKey('department.id'), nullable=False)  # Linked department

    # Relationships
    doctor = db.relationship('Doctor', backref='booked_schedules')
    department = db.relationship('Department', backref='booked_schedules')