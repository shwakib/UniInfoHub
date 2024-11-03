from flask import Flask, jsonify
from flask_cors import CORS
from scrapers.important_dates import scrape_important_dates

app = Flask(__name__)
CORS(app)

@app.route('/api/important-dates', methods=['GET'])
def get_important_dates():
    data = scrape_important_dates()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
