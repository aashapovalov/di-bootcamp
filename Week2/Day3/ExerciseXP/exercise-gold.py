import holidays
import datetime
import re
from random import randint, choice
from string import ascii_letters

#Exercise 1 : Upcoming Holiday
us_holidays = holidays.country_holidays('US', years = 2025)
christmas = datetime.date(2025, 12, 25)
diff = 0
while diff <= 0:
    for key, value in us_holidays.items():
        diff = (key - datetime.date.today()).days
        if (key - datetime.date.today()).days <= 0:
            continue
        else:
            print(f"Today is {datetime.date.today()}")
            print(f"There are {diff} days left until {value}")
            break

#Exercise 2 : How Old Are You On Jupiter?
EARTH_YEAR = 31557600
planet_earth_years = {
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn": 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132
}
user_sec = int(input("Please enter your age in seconds: "))
user_earth_years = user_sec // EARTH_YEAR
print(f"You are {user_earth_years} years old on Earth")
for key, value in planet_earth_years.items():
    print(f"You are {user_earth_years//value} years old on {key}")

#Exercise 3 : Regular Expression #1
def return_numbers(str):
    print(''.join(re.findall("[0-9]", str)))

return_numbers("k5k3q2g5z6x9bn")

#Exercise 4 : Regular Expression #2
def check_name():
    user_name = input("Please enter your name: ")
    reg = "^[A-Z][a-z]+ [A-Z][a-z]+$"
    if re.match(reg, user_name):
        print("Correct name")
    else:
        print("Incorrect name")

check_name()

#Exercise 5: Python Password Generator
def gen_pass():
    reg_pas = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$"
    spec_symb = "!@#$%^&*()"
    while True:
        pass_len = int(input("Please enter your password length (from 6 to 30): "))
        if pass_len > 30 or pass_len < 6 or not isinstance(pass_len, int):
            print("Password length must be an integer from 6 to 30")
        else:
            break
    while True:
        password = ""
        for i in range(pass_len):
            acc_symb_list = [choice(spec_symb), str(randint(0, 9)), choice(ascii_letters)]
            password += acc_symb_list[randint(0, len(acc_symb_list) - 1)]
        if re.match(reg_pas, password):
            break
        else:
            print(f"Incorrect password {password}")
            continue
    print(f"Your password is {password}")

    return password

gen_pass()




reg_pas = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$"
