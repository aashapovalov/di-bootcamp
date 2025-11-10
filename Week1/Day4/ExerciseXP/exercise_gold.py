from datetime import date
from random import randint

#Exercise 1 : When will I retire ?
def get_age(year, month, day):
    user_age = date.today().year - year
    if (date.today().month, date.today().day) < (month, day):
        user_age = user_age - 1
    return user_age

def can_retire():
    dob = input("Enter your date of birth (YYYY/MM/DD): ")
    gender = input("Enter your gender (M/F): ").lower()
    dob_list = dob.split("/")
    user_age = get_age(int(dob_list[0]), int(dob_list[1]), int(dob_list[2]))
    if gender == "m":
        if user_age >= 67:
            print("You can retire")
            return True
        else:
            print("You can't retire")
            return False
    elif gender == "f":
        if user_age >= 62:
            print("You can retire")
            return True
        else:
            print("You can't retire")
            return False
can_retire()

#Exercise 2 : Sum
def sum_four_digits(num):
    sum_list = []
    for i in range (4):
        sum_list.append(int(str(num)*(i+1)))
    print(sum(sum_list))

sum_four_digits(3)

#Exercise 3 : Double Dice
def throw_dice():
    return randint(1, 7)

def throw_until_doubles():
    count = 0
    while True:
        num1 = throw_dice()
        num2 = throw_dice()
        count += 1
        if num1 != num2:
            print(f"Dice1: {num1} and Dice2: {num2}")
        elif num1 == num2:
            print(f"Dice1: {num1} and Dice2: {num2} show the same value! Game over!")
            return count

def main():
    double_list = []
    for i in range(100):
        double_list.append(throw_until_doubles())
        print(f"""Total throws: {sum(double_list)}
Average throws to reach doubles: {round(sum(double_list)/len(double_list), 2)}.""")

main()