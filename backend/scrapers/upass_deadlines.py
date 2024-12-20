# import requests
# from bs4 import BeautifulSoup

# def scrape_upass_deadlines():
#     url = 'https://uwindsorgss.ca/programs/upass/deadlines-periods-costs/'
#     response = requests.get(url)
    
#     if response.status_code != 200:
#         return {"error": "Failed to fetch data"}, 500

#     soup = BeautifulSoup(response.text, 'html.parser')
#     sections = soup.find_all('div', class_='znColumnElement-innerContent')
#     deadlines = []

#     for section in sections:
#         # Extract heading (e.g., Fall, Winter, Summer Semester)
#         heading = section.find('h3', class_='tbk__title')
#         if heading:
#             semester = heading.get_text(strip=True)

#             # Extract list items containing deadlines, periods, and costs
#             items = section.find_all('li')
#             details = {}
#             for item in items:
#                 strong_text = item.find('strong')
#                 if strong_text:
#                     key = strong_text.get_text(strip=True).rstrip(':')
#                     value = item.get_text(strip=True).replace(f"{key}:", "").strip()
                    
#                     # Clean up Unicode characters like en-dash
#                     value = value.replace("\u2013", "–")  # Replace en-dash
#                     details[key] = value
            
#             if details:
#                 deadlines.append({semester: details})
    
#     return deadlines

# # Example Usage
# if __name__ == "__main__":
#     data = scrape_upass_deadlines()
#     for item in data:
#         print(item)

import requests
from bs4 import BeautifulSoup

def scrape_upass_deadlines():
    url = 'https://uwindsorgss.ca/programs/upass/deadlines-periods-costs/'
    response = requests.get(url)
    
    if response.status_code != 200:
        print("Failed to fetch the webpage. Status code:", response.status_code)
        return None

    soup = BeautifulSoup(response.text, 'html.parser')

    # Locate all sections with the class "tbk__text"
    semester_sections = soup.find_all('div', class_='tbk__text')
    deadlines = {}

    for section in semester_sections:
        # The section title (Fall, Winter, Summer) is in the previous sibling's heading
        heading = section.find_previous('h3', class_='tbk__title')
        if heading:
            semester = heading.get_text(strip=True)

            # Extract list items within the section
            items = section.find_all('li')
            details = {}
            for item in items:
                strong_tag = item.find('strong')
                if strong_tag:
                    key = strong_tag.get_text(strip=True).rstrip(':')
                    value = item.get_text(strip=True).replace(f"{key}:", "").strip()
                    details[key] = value
            
            deadlines[semester] = details

    return deadlines

# Example usage
if __name__ == "__main__":
    data = scrape_upass_deadlines()
    if data:
        for semester, details in data.items():
            print(f"{semester}:")
            for key, value in details.items():
                print(f"  {key}: {value}")
            print()
