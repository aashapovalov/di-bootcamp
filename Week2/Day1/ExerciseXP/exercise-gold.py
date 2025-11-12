from math import pi
from random import randint

# Exercise 1 : Geometry

class Circle:
    def __init__(self, radius = 1.0):
        self.radius = radius

    def area(self):
        return pi * self.radius * self.radius

    def perimeter(self):
        return 2 * pi * self.radius

    def define_self(self):
        print("A circle is the set of all points in a plane that are at a fixed distance (called the radius) from a fixed point (called the center).")

#Exercise 2 : Custom List Class
class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reverse(self):
        return reversed(self.letters)

    def sort(self):
        return sorted(self.letters)

    def gen_list(self):
        return [randint(1, 100) for _ in range(len(self.letters))]

#Exercise 3 : Restaurant Menu Manager

