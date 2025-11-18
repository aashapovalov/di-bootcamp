import json
from random import randint

class Character():
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.skills = {"Strength": "", "Dexterity": "", "Constitution": "", "Intelligence": "", "Wisdom": "", "Charisma": ""}

    def calculate_skill(self):
        four_dices = sorted([randint(1, 6) for _ in range(4)])
        del four_dices[0]
        return sum(four_dices)

    def calculate_skill_set(self):
        for key, value in self.skills.items():
            self.skills[key] = str(self.calculate_skill())

class Game():
    def __init__(self, file_txt, file_json):
        self.file_txt = file_txt
        self.file_json = file_json
        self.char_dict = {"players": []}

    def define_characters(self):
        n_of_characters = int(input("How many characters do you want? "))
        self.char_dict["players"] = [{} for _ in range(n_of_characters)]
        for i in range(n_of_characters):
            character_name = input("What is your name? ")
            character_age = input("What is your age? ")
            new_character = Character(character_name, character_age)
            new_character.calculate_skill_set()
            self.char_dict["players"][i]["name"] = character_name
            self.char_dict["players"][i]["age"] = character_age
            self.char_dict["players"][i]["skills"] = new_character.skills

    def save_json(self):
        with open(self.file_json, "w") as json_file:
            json.dump(self.char_dict, json_file)

    def save_txt(self):
        pretty_text = ""
        for i in range(len(self.char_dict["players"])):
            player_entry = f"""Player #{i}
            Player Name: {self.char_dict["players"][i]["name"]}
            Player Age: {self.char_dict["players"][i]["age"]}\n\n
            Skills\n"""
            player_skills = ""
            for key, value in self.char_dict["players"][i]["skills"].items():
                player_skills += f"{key}: {value}\n"
            pretty_text += player_entry + player_skills
        with open(self.file_txt, "w") as text_file:
            text_file.write(pretty_text)

game1 = Game("game1.txt", "game1.json")
game1.define_characters()
game1.save_json()
game1.save_txt()


