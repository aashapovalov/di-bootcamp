import requests
import json

url = "https://api.giphy.com/v1/gifs/search"
parameters = {"api_key": "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", "q": "hilarious", "rating": "g", "limit": "10"}

response = requests.get(url, params=parameters)
data = response.json()
for item in data["data"]:
    if int(item["images"]["original"]["height"]) > 100:
        print(item["images"]["original"]["height"])


