import requests
from bs4 import BeautifulSoup

def scrape_important_dates():
    url = 'https://www.uwindsor.ca/registrar/events-listing'
    response = requests.get(url)
    if response.status_code != 200:
        return {"error": "Failed to fetch data"}, 500

    soup = BeautifulSoup(response.text, 'html.parser')
    event_rows = soup.select('table.views-table tbody tr')
    events = []

    for row in event_rows:
        date = row.select_one('.views-field-field-event-date').text.strip() if row.select_one('.views-field-field-event-date') else 'N/A'
        title_element = row.select_one('.views-field-title a')
        title = title_element.text.strip() if title_element else 'N/A'
        link = f"https://www.uwindsor.ca{title_element['href']}" if title_element else 'N/A'
        events.append({"date": date, "title": title, "link": link})

    return events
