#🌟 Exercise 1: Favorite Numbers
my_fav_numbers = {4, 7, 28}
my_fav_numbers.add(14)
my_fav_numbers.add(77)
my_fav_numbers.remove(77)
friend_fav_numbers = {1, 6, 4}
our_fav_numbers = my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)

#🌟 Exercise 2: Tuple
tuple_example = (1, 2, 3)
list_new = list(tuple_example)
list_new.append(4)
tuple_new = tuple(list_new)
print(tuple_new)

#🌟 Exercise 3: List Manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

#🌟 Exercise 4: Floats
mix_list = [num/2 for num in range(3, 11)]

#🌟 Exercise 5: For Loop
for num in range(21):
    print(num)

for num in range(21):
    if num % 2 == 0:
        print(num)

#🌟 Exercise 6: While Loop
state = True
while state:
    user_name = input("Type your name (not digits and at least 3 letters long: ")
    if len(user_name) < 3 or user_name.isdigit():
        print("Your name is too short or you used digits. Try again.")
    else:
        print("Thank you for your name.")
        state = False

#🌟 Exercise 7: Favorite Fruits
user_fruits = input("Type your favourite fruits (you can input several fruits, separated by spaces): ")
user_fruits = user_fruits.split(" ")
state = True
user_guess = input("Enter any fruit: ")
if user_guess in user_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

#🌟 Exercise 8: Pizza Toppings
state = True
topping_list = []
while state:
    user_topping = input("Type a topping you want to end (type 'stop' to stop it): ")
    if user_topping == "stop":
        state = False
    else:
        topping_list.append(user_topping)
        print(f"Adding {user_topping} to your pizza.")
print(f"You chose pizza with {", ".join(topping_list)}")
print(f"Your pizza costs {10 + 2.5*len(topping_list)}")

#🌟 Exercise 9: Cinemax Tickets
state = True
family_list = []
price_sum = 0
while state:
    user_age = input("Type an age to calculate the ticket price (type 'stop' to stop it): ")
    if user_age == "stop":
        state = False
    else:
        family_list.append(user_age)
        print(f"Adding ticket for {user_age} years old person.")
        if int(user_age) in range(3, 13):
            price_sum += 10
        elif int(user_age) > 12:
            price_sum += 15
print(f"Here are your {len(family_list)} tickets for {price_sum}$ total.")
