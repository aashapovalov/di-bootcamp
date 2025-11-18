import json

#Exercise 1 : Restaurant Menu Manager
class MenuManager():
    def __init__(self, menu):
        with open(menu) as file:
            self.menu = json.load(file)

    def add_item(self, name, price):
        self.menu["items"].append({"name": name, "price": price})

    def remove_item(self, name):
        for index in range(len(self.menu["items"])):
            if self.menu["items"][index]["name"] == name:
                self.menu["items"].pop(index)
                return

    def save_to_file(self):
        with open("restaurant_menu.json", "w") as file:
            json.dump(self.menu, file, indent=2)
