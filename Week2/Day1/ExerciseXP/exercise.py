#🌟 Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Emmy", 18)
cat2 = Cat("Elly", 19)
cat3 = Cat("Anny", 11)

def find_oldest_cat(cat1, cat2, cat3):
    if cat1.age >= cat2.age and cat1.age >= cat3.age:
        return cat1
    elif cat2.age >= cat3.age and cat2.age >= cat1.age:
        return cat2
    elif cat3.age >= cat2.age and cat3.age >= cat1.age:
        return cat3

print(f"The oldest cat is {find_oldest_cat(cat1, cat2, cat3).name}. It is {find_oldest_cat(cat1, cat2, cat3).age}")

#🌟 Exercise 2 : Dogs
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Carl", 20)
sarahs_dog = Dog("Clara", 10)
print(davids_dog.name, davids_dog.height)
print(sarahs_dog.name, sarahs_dog.height)

davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()

print(davids_dog.height>sarahs_dog.height)

#🌟 Exercise 3 : Who’s the song producer?
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

#🌟 Exercise 4 : Afternoon at the Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, *animal):
        self.animals.extend(animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal):
        if animal in self.animals:
            self.animals.remove(animal)

    def sort_animals(self):
        sorted_animals = {}
        for element in self.animals:
            if element[0] in sorted_animals.keys():
                sorted_animals[element[0]].append(element)
            else:
                sorted_animals[element[0]] = [element]
        return sorted_animals

    def print_groups(self):
        sorted_animals = self.sort_animals()
        for key, value in sorted_animals.items():
            print(f"{key}: {value}")

zoo_rishon = Zoo('Gan Haiot, Rishon Lezion')
zoo_rishon.add_animal('Zebra')
print(zoo_rishon.animals)
zoo_rishon.add_animal('Baboon')
zoo_rishon.add_animal('Hyppo')
zoo_rishon.add_animal('Anaconda', 'Lion')
zoo_rishon.add_animal('Python')
zoo_rishon.add_animal('Pig')
zoo_rishon.get_animals()
zoo_rishon.sell_animal('Baboon')
zoo_rishon.sort_animals()
zoo_rishon.print_groups()