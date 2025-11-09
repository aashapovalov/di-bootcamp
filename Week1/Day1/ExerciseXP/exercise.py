print("Hello World\n"*4)

print(99 ** 3 * 8)

#>>> 5 < 3 #False
#>>> 3 == 3 #True
#>>> 3 == "3" #False
#>>> "3" > 3 #False
#>>> "Hello" == "hello" #False

computer_brand = 'Mac'
print(f"I have a {computer_brand} computer.")

name =  "Alex"
age = 40
shoe_size = "10.5"
info = f"My name is {name} and I am {age} years old. My shoe size is {shoe_size}"
print(info)

a = 5
b = 4
if a > b:
    print("Hello World")

user_input = input("Enter any number: ")
if user_input % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")


user_name = input("Enter your name: ")
if user_name == "Alex":
    print("Great, you have the best name in the world!")
else:
    print("Sorry, you are not the best name.")

user_height = input("Enter your height: ")
if int(user_height) < 145:
    print(f"You need to grow {145 - int(user_height)} to ride")
else:
    print("You are tall enough to ride!")