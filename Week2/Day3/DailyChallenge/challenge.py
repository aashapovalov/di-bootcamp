#Decorator
from math import pi
from turtle import Turtle

def check_input(fn):
    def wrapper(self, *args, **kwargs):
        args1 = {}
        is_radius = False
        is_diameter = False
        for key, value in kwargs.items():
            if key == 'diameter':
                if not isinstance(value, (float, int)):
                    raise Exception('Diameter must be a number')
                is_diameter = True
                args1['radius'] = float(value/2)
            elif key == 'radius':
                if not isinstance(value, (float, int)):
                    raise Exception('Radius must be a number')
                is_radius = True
                args1['radius'] = float(value)
        if is_radius and is_diameter:
            raise Exception("There shouldn't be both radius and diameter")
        elif not is_radius and not is_diameter:
            raise Exception("There should be radius or diameter")
        if args1['radius'] <= 0:
            raise Exception('Radius must be positive number')
        result = fn(self, *args, radius = args1["radius"])
        return result
    return wrapper


class Circle():
    @check_input
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return pi*self.radius**2

    def __str__(self):
        return f"I'm a Circle with radius {self.radius}"

    def __add__(self, other):
        return Circle(radius = self.radius + other.radius)

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

def test_circle_creation_radius():
    c = Circle(radius=5)
    print("Radius init:", c.radius)  # expected: 5.0


def test_circle_creation_diameter():
    c = Circle(diameter=10)
    print("Diameter init (via decorator):", c.radius)  # expected: 5.0


def test_circle_area():
    c = Circle(radius=2)
    print("Area:", c.area())  # expected: pi * 4 ≈ 12.566...


def test_str():
    c = Circle(radius=3)
    print("STR:", str(c))  # expected: "I'm a Circle with radius 3.0" (or 3)


def test_addition():
    c1 = Circle(radius=2)
    c2 = Circle(radius=3)
    c3 = c1 + c2
    print("Addition radius:", c3.radius)  # expected: 5.0


def test_comparisons():
    c1 = Circle(radius=2)
    c2 = Circle(radius=3)
    c3 = Circle(radius=2)

    print("c2 > c1:", c2 > c1)   # expected: True
    print("c1 > c2:", c1 > c2)   # expected: False
    print("c1 == c3:", c1 == c3) # expected: True
    print("c1 == c2:", c1 == c2) # expected: False
    print("c1 < c2:", c1 < c2)   # expected: True


def test_sorting():
    circles = [Circle(radius=5), Circle(radius=2), Circle(radius=4)]
    circles_sorted = sorted(circles)
    print("Sorted radii:", [c.radius for c in circles_sorted])  # expected: [2, 4, 5]


def test_invalid_both_radius_and_diameter():
    try:
        Circle(radius=5, diameter=10)
    except Exception as e:
        print("Both radius & diameter error:", e)  # expected: "There shouldn't be both radius and diameter"


def test_invalid_no_args():
    try:
        Circle()
    except Exception as e:
        print("No args error:", e)  # expected: "There should be radius or diameter"


def test_invalid_negative_radius():
    try:
        Circle(radius=-3)
    except Exception as e:
        print("Negative radius error:", e)  # expected: "Radius must be positive number"


if __name__ == "__main__":
    test_circle_creation_radius()
    test_circle_creation_diameter()
    test_circle_area()
    test_str()
    test_addition()
    test_comparisons()
    test_sorting()
    test_invalid_both_radius_and_diameter()
    test_invalid_no_args()
    test_invalid_negative_radius()