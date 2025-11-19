from pyowm import OWM
from datetime import time, datetime
owm = OWM("49b1dba632252c6b09edbe25bc3cfadb")
mgr = owm.weather_manager()


weather_at_place = mgr.weather_at_place('London,GB').weather
sunrise_datetime = datetime.fromisoformat(str(weather_at_place.sunrise_time(timeformat='date')))
sunset_datetime = datetime.fromisoformat(str(weather_at_place.sunset_time(timeformat='date')))
sunset_time = sunset_datetime.strftime('%H:%M')
sunrise_time = sunrise_datetime.strftime('%H:%M')
temp = weather_at_place.temperature('celsius')['temp']
wind_speed = weather_at_place.wind()['speed']
print(f"The wind in Paris is {wind_speed}m/s")
print(f"The temperature in Paris is {temp} degrees Celsius")
print(f"Sunrise time in Paris is {sunrise_time}")
print(f"Sunset time in Paris is {sunset_time}")

def weather_at_id():
    user_city = input("Please enter your city: ")
    reg = owm.city_id_registry()
    list_of_cities = reg.ids_for(user_city, matching="exact")
    city_id = list(list_of_cities[0])[0]
    city_name = list(list_of_cities[0])[1]
    weather_at_id = mgr.weather_at_id(city_id).weather
    sunrise_datetime = datetime.fromisoformat(str(weather_at_id.sunrise_time(timeformat='date')))
    sunset_datetime = datetime.fromisoformat(str(weather_at_id.sunset_time(timeformat='date')))
    sunset_time = sunset_datetime.strftime('%H:%M')
    sunrise_time = sunrise_datetime.strftime('%H:%M')
    temp = weather_at_id.temperature('celsius')['temp']
    wind_speed = weather_at_id.wind()['speed']
    print(f"The wind in {city_name} is {wind_speed}m/s")
    print(f"The temperature in {city_name} is {temp} degrees Celsius")
    print(f"Sunrise time in {city_name} is {sunrise_time}")
    print(f"Sunset time in {city_name} is {sunset_time}")

def forecast_at_id():
    user_city = input("Please enter your city: ")
    reg = owm.city_id_registry()
    list_of_cities = reg.ids_for(user_city, matching="exact")
    city_id = list(list_of_cities[0])[0]
    city_name = list(list_of_cities[0])[1]
    forecast_at_id = mgr.forecast_at_id(city_id, '3h').forecast
    for weather in forecast_at_id:
        print(f"Weather forecast for {city_name} is")
        print(weather.reference_time('iso'), weather.temperature('celsius')['temp'])

def pollution_at_id():
    user_city = input("Please enter your city: ")
    reg = owm.city_id_registry()
    list_of_cities = reg.ids_for(user_city, matching="exact")
    city_lat = list(list_of_cities[0])[4]
    city_long = list(list_of_cities[0])[5]
    city_name = list(list_of_cities[0])[1]
    print(f"The city in {city_name} has coordinates {city_lat}, {city_long}")
    mgr = owm.airpollution_manager()
    pollution_at_coord = mgr.air_quality_at_coords(city_lat, city_long)
    print(f"The air pollution with CO in {city_name} is {pollution_at_coord.air_quality_data['co']}")