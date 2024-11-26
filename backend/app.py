from flask import Flask, jsonify
from flask_cors import CORS
from scrapers.important_dates import scrape_important_dates
from scrapers.daily_news import scrape_dailynews
from scrapers.upass_deadlines import scrape_upass_deadlines  # Assuming the scraper is in scrapers/upass_deadlines.py

app = Flask(__name__)
CORS(app)

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
    