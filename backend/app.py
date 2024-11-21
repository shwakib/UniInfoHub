# from flask import Flask, jsonify
# from flask_cors import CORS
# from scrapers.important_dates import scrape_important_dates
# from scrapers.daily_news import scrape_dailynews

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/important-dates', methods=['GET'])
# def get_important_dates():
#     data = scrape_important_dates()
#     return jsonify(data)

# @app.route('/api/daily-news', methods=['GET'])  # New route for DailyNews
# def get_daily_news():
#     data = scrape_dailynews()
#     return jsonify(data)

# if __name__ == '__main__':
#     app.run(debug=True)


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

# Route for U-Pass deadlines, periods, and costs
@app.route('/api/upass-deadlines', methods=['GET'])
def get_upass_deadlines():
    data = scrape_upass_deadlines()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
