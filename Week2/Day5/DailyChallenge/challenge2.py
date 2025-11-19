import requests
import time

def get_loading_time(url):
    time1 = time.time()
    requests.get(url)
    time2 = time.time()
    print(f"Loading time: {round(time2 - time1, 2)}s")

get_loading_time("https://google.com")
get_loading_time("https://adobe.com")