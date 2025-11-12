class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, **animal_list):
        for key, value in animal_list.items():
            if key in self.animals.keys():
                self.animals[key] += value
            else:
                self.animals[key] = value

    def get_info(self):
        print("Farm Name: " + self.name + "\n")
        for key, value in self.animals.items():
            print(f"{key}: {value}")
        print("\n       E-I-E-I-0!")

    def get_animal_types(self):
        print(sorted([animal for animal in self.animals.keys()]))
        return sorted([animal for animal in self.animals.keys()])

    def get_short_info(self):
        animal_str = ""
        animal_list = self.get_animal_types()
        for index in range(len(animal_list)):
            if self.animals[animal_list[index]] > 1:
                animal_str += f"{animal_list[index]}s, "
            elif self.animals[animal_list[index]] == 1:
                animal_str += f"{animal_list[index]}, "
        print(f"{self.name} has {animal_str}")


macdonald = Farm("McDonald")
macdonald.add_animal(cow = 2, sheep = 5, chicken = 3)
macdonald.get_info()
macdonald.get_short_info()
