import requests
from bs4 import BeautifulSoup

def scrape_dailynews():
    url = 'https://www.uwindsor.ca/dailynews/'
    response = requests.get(url)
    
    if response.status_code != 200:
        return {"error": "Failed to fetch data"}, 500

    soup = BeautifulSoup(response.text, 'html.parser')
    articles = soup.find_all('article', class_='node-article')

    data = []

    for article in articles:
        title_element = article.find('h2')
        title = title_element.text.strip() if title_element else 'N/A'

        link_element = title_element.find('a') if title_element else None
        link = f"https://www.uwindsor.ca{link_element['href']}" if link_element else 'N/A'

        date_element = article.find('div', class_='article-date-created')
        date = date_element.text.strip() if date_element else 'N/A'

        # Extract the image URL
        image_element = article.find('img', class_='feature-image')
        image_url = f"https:{image_element['src']}" if image_element else 'N/A'

        data.append({
            "title": title,
            "link": link,
            "date": date,
            "image": image_url
        })

    return data
