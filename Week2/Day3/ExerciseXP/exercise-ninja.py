#Exercise 1 : Temperature

from abc import ABC, abstractmethod
from random import randint, random

class Temperature(ABC):
    def __init__(self, temperature: float):
        self.temperature = temperature

    @abstractmethod
    def to_celsius(self) -> float:
        pass

    def to_fahrenheit(self) -> float:
        c = self.to_celsius()
        return c * 9 / 5 + 32

    def to_kelvin(self) -> float:
        c = self.to_celsius()
        return c + 273.15

class Celsius(Temperature):

    def to_celsius(self):
        return self.temperature

class Fahrenheit(Temperature):

    def to_celsius(self):
        return (self.temperature - 32)/1.8


class Kelvin(Temperature):

    def to_celsius(self):
        return self.temperature - 273.15

#Exercise 2: In the Quantum Realm
class QuantumParticle():
    def __init__(self, x, y, p):
        self.x = x
        self.y = y
        self.p = p

    def position(self):
        return randint(0, 10000)

    def momentum(self):
        return random

    def spin(self):
        return randint(0, 1) - 0.5

    def disturbance(self):
        self.position()
        self.spin()
        print("Quantum Interferences!!")

    def __repr__(self):
        print(f"Particle position: {self.x}, momentum: {self.y}, spin: {self.p}")

    def entangle(self, particle):
        if isinstance(particle, QuantumParticle):
            particle.spin = 0.5 if self.p == -0.5 else -0.5
            print("Spooky Action at a Distance !!")
        else:
            raise TypeError("Particle must be of type QuantumParticle")

p1 = QuantumParticle(x=1, y=0.1,p=5.0)
p2 = QuantumParticle(x=2,y=0.1, p=5.0)
p1.entangle(p2)

