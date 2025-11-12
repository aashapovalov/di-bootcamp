from random import choice
#🌟 Exercise 1: Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds * 3}'

all_cats = [Bengal("Bara", 6), Chartreux("Cara", 8), Siamese("Sara", 3)]

sara_pets = Pets(all_cats)
sara_pets.walk()

#🌟 Exercise 2: Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return "WUFF"

    def run_speed(self):
        return f"{self.name} runs fast"

    def fight(self, other_dog):
        if self.weight > other_dog.weight:
            return f"{self.name} is the winner"
        if self.weight < other_dog.weight:
            return f"{other_dog.name} is the winner"
        else:
            return "Both dogs are dead"

dog1 = Dog("Manny", 10, 20)
dog2 = Dog("Benny", 10, 20)
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

#🌟 Exercise 3: Dogs Domesticated
class Dog1:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return "WUFF"

    def run_speed(self):
        return f"{self.name} runs fast"

    def fight(self, other_dog):
        if self.weight > other_dog.weight:
            return f"{self.name} is the winner"
        if self.weight < other_dog.weight:
            return f"{other_dog.name} is the winner"
        else:
            return "Both dogs are dead"

class PetDog(Dog1):

    def __init__(self, name, age, weight, trained = False):
        self.trained = trained
        super().__init__(name, age, weight)

    def train(self):
        self.trained = True
        print(self.bark())

    def play(self, *dogs):
        names_str = f"{self.name}, "
        for dog in dogs:
            names_str += dog + ", "
        names_str = names_str.strip(", ")
        print(f"{names_str} all play together")

    def do_a_trick(self):
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        print(f"{self.name} {choice(tricks)}")

my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max")
my_dog.do_a_trick()

#🌟 Exercise 4: Family and Person Classes
class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.last_name = ""

    def is_18(self):
        if self.age >= 18:
            return True
        else:
            return False

class Family():
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append({"first_name": first_name, "age": age, "last_name": self.last_name, "person": new_member})

    def check_majority(self, first_name):
        for member in self.members:
            if member["first_name"] == first_name:
                if member["person"].is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return  # stop searching once you found the person
        print(f"{first_name} is not a member of the family.")

    def family_presentation(self):
        print(f"Family {self.last_name}: ")
        for member in self.members:
            print(member["first_name"], member["age"])

# --- Setup a family and add members ---
fam = Family("Doe")
fam.born("Alice", 17)     # minor
fam.born("Bob", 21)       # adult
fam.born("Charlie", 15)   # minor
# Get Person objects back from the stored dicts
alice   = fam.members[0]["first_name"]
bob     = fam.members[1]["first_name"]
charlie = fam.members[2]["first_name"]


print("\n--- Family presentation ---")
fam.family_presentation()     # Note: prints Person object; see notes below

print("\n--- Majority checks (members) ---")
fam.check_majority(alice)     # expect “Sorry, you are not allowed…”
fam.check_majority(bob)       # expect “You are over 18…”
fam.check_majority(charlie)   # expect “Sorry, you are not allowed…”
