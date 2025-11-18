from menu_manager import *

def load_manager():
    menu = "restaurant_menu.json"
    menu_manager = MenuManager(menu)
    return menu_manager

def show_menu():
    menu_manager = load_manager()
    while True:
        user_choice = input("""MENU
        (a) Add and item
        (d) Delete an item
        (v) View the menu
        (x) Exit: 
        """)
        if user_choice == "a":
            add_item_to_menu(menu_manager)
        elif user_choice == "d":
            remove_item_from_menu(menu_manager)
        elif user_choice == "v":
            show_restaurant_menu(menu_manager)
        elif user_choice == "x":
            menu_manager.save_to_file()
            print("menu was saved successfully")
            break
        else:
            print("invalid choice, try again 'a', 'd', 'v' or 'x'")

def add_item_to_menu(menu_manager):
    item_name = input("Enter item name: ")
    item_price = input("Enter item price: ")
    menu_manager.add_item(item_name, item_price)
    print("item was added successfully")

def remove_item_from_menu(menu_manager):
    item_name = input("Enter item name: ")
    for item in menu_manager.menu["items"]:
        if item["name"] == item_name:
            menu_manager.remove_item(item_name)
            print("item was removed successfully")
            return
    print("item was not found in menu")
    return

def show_restaurant_menu(menu_manager):
    print("MENU:")
    for item in menu_manager.menu["items"]:
        print(f"{item['name']} - {item['price']}")

show_menu()
