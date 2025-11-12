class MenuManager:
    def __init__(self):
        self.menu = [
    {"name": "Soup", "price": 10, "spice_level": "B", "gluten_index": False},
    {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten_index": True},
    {"name": "Salad", "price": 18, "spice_level": "A", "gluten_index": False},
    {"name": "French Fries", "price": 5,  "spice_level": "C", "gluten_index": False},
    {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten_index": True},
]
    def add_item(self, name, price, spice_level, gluten_index):
        self.menu.append({"name": name, "price": price, "spice_level": spice_level, "gluten_index": gluten_index})

    def update_item(self, name, price, spice_level, gluten_index):
        for item in self.menu:
            if item["name"] == name:
                item["price"] = price
                item["spice_level"] = spice_level
                item["gluten_index"] = gluten_index
                return
            print("The dish is not in the menu")

    def remove_item(self, name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                return
            print("The dish is not in the menu")
