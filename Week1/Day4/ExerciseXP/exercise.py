from random import randint, uniform

#🌟 Exercise 1: What Are You Learning?
def display_message():
    print("I am learning about functions in Python.")

display_message()

#🌟 Exercise 2: What’s Your Favorite Book?
def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

#🌟 Exercise 3: Some Geography
def describe_city(city, country = "Unknown"):
    print(f"{city} is in {country}")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")

#Exercise 4: Random
def guess_number(number):
    my_number = randint(1, 101)
    if number == my_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {my_number}")

guess_number(100)

#🌟 Exercise 5: Let’s Create Some Personalized Shirts!
def make_shirt(size = "L", text = "I love Python"):
    print(f"Your t-shirt size is {size}, and the text on it is '{text}'")

make_shirt("L")
make_shirt("M")
make_shirt("XXS", "I love JS")
make_shirt(size="small", text="Hello!")

#🌟 Exercise 6: Magicians…
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_list):
    for index in range(len(magician_list)):
       print(f"{magician_list[index]} the Great")

show_magicians(magician_names)

#🌟 Exercise 7: Temperature Advice
def get_random_temp():
    user_month = input("Enter what month is it now: ")
    if user_month in ['December', 'January', 'February']:
        return uniform(-10, 5)
    elif user_month in ['March', 'April', 'May']:
        return uniform(-5, 20)
    elif user_month in ['June', 'July', 'August']:
        return uniform(10, 41)
    elif user_month in ['September', 'October', 'November']:
        return uniform(-5, 20)

def main():
    temp = round(get_random_temp(), 1)
    message = 'Brrr, that’s freezing! Wear some extra layers today.' if temp < 0 else 'Quite chilly! Don’t forget your coat.' if temp <=16 else 'Nice weather.' if temp <=23 else 'A bit warm, stay hydrated.' if temp <=32 else 'It’s really hot! Stay cool.'
    print(f"The temperature right now is {temp} degrees Celsius")
    print(message)

main()