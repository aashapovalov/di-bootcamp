#Exercise 1: Birthday Look-up
birthdays = {
    "Alice": "1992/07/14",
    "Bob": "1985/11/03",
    "Chen": "1998/02/28",
    "Daria": "2001/12/09",
    "Ethan": "1990/05/21",
}
user_name = input("Enter person's name: ")
print(f"{user_name}'s birthday: {birthdays[user_name]}")

#Exercise 2: Birthdays Advanced
user_name1 = input(f"I have birthdays for {', '.join(birthdays.keys())} Enter person's name: ")
if user_name1 in birthdays.keys():
    print(f"{user_name}'s birthday: {birthdays[user_name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {user_name1}")

#Exercise 3: Add Your Own Birthday
user_name3 = input("Enter your name: ")
user_bd3 = input("Enter your birthday in YYYY/MM/DD format: ")
birthdays[user_name3] = user_bd3
user_name4 = input("Enter person's name: ")
if user_name4 in birthdays.keys():
    print(f"{user_name}'s birthday: {birthdays[user_name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {user_name1}")

#Exercise 4: Fruit Shop
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
line = '\n'.join(f"{name} for ${price}" for name, price in items.items())
print(line)

items1 = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total_price = 0
for name, quan in items1.items():
    total_price += quan["price"] * quan["stock"]
print(f"Total price: ${total_price}")