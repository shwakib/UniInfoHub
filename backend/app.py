from flask import Flask, jsonify
from flask_cors import CORS
from scrapers.important_dates import scrape_important_dates
from scrapers.daily_news import scrape_dailynews

app = Flask(__name__)
CORS(app)

@app.route('/api/important-dates', methods=['GET'])
def get_important_dates():
    data = scrape_important_dates()
    return jsonify(data)

@app.route('/api/daily-news', methods=['GET'])  # New route for DailyNews
def get_daily_news():
    data = scrape_dailynews()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
