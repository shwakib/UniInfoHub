from flask import Flask, jsonify, request
from flask_cors import CORS
from scrapers.important_dates import scrape_important_dates
from scrapers.daily_news import scrape_dailynews
from scrapers.upass_deadlines import scrape_upass_deadlines
from checkout import checkout_bp  # Import the checkout Blueprint

app = Flask(__name__)
CORS(app)

# Register the checkout Blueprint
app.register_blueprint(checkout_bp)

# Route for important dates
@app.route('/api/important-dates', methods=['GET'])
def get_important_dates():
    data = scrape_important_dates()
    return jsonify(data)

# Route for daily news
@app.route('/api/daily-news', methods=['GET'])
def get_daily_news():
    data = scrape_dailynews()
    return jsonify(data)

@app.route('/api/upass-deadlines', methods=['GET'])
def get_upass_deadlines():
    data = scrape_upass_deadlines()
    # if not data: 
    #     return jsonify({"error": "Failed to fetch U-Pass deadlines"}), 500
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
    