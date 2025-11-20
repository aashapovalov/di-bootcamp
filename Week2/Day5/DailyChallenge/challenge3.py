from string import ascii_uppercase
from random import randint
class Airline:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.planes = []

class Airplane:
    def __init__(self, id, current_location, company):
        self.id = id
        self.current_location = current_location
        self.company = company
        self.next_flights = []

    def location_on_date(self, date):
        location = []
        for flight in self.next_flights:
            if flight.date == date:
                location.append({"origin": flight.origin, "destination": flight.destination})
        return location

    def available_on_date(self, date, location):
        availability = 0
        for element in self.next_flights:
            if element.destination == location and element.date == date:
                availability += 1
        for element in self.next_flights:
            if element.origin == location and element.date == date:
                return False
        return True


class Flight:
    def __init__(self, date, destination, origin, plane, id):
        self.date = date
        self.destination = destination
        self.origin = origin
        self.plane = plane
        self.id = id

    def take_off(self):
        self.plane.current_location = "In air"

    def land(self):
        self.plane.current_location = self.destination
        self.plane.next_flights.remove(self)

class Airport:
    def __init__(self, city):
        self.city = city
        self.planes = []
        self.scheduled_departures = []
        self.scheduled_arrivals = []

    def schedule_flight(self, destination, datetime):
        for plane in self.planes:
            if plane.available_on_date(datetime, self):
                flight_id = str([ascii_uppercase[randint(0, len(ascii_uppercase) - 1)] for _ in range(6)])
                plane.next_flights.append(Flight(datetime, destination, self, plane, flight_id))

    def info(self, start_date, end_date):
        flights = []
        for plane in self.planes:
            for flight in plane.next_flights:
                if start_date <= flight.date <= end_date:
                    flights.append(flight)
        return flights

