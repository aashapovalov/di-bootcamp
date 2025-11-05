print("Hello World\n"*4, "I love python\n"*4)

user_month = input("Enter any month number (1 to 12): ")
if 3 <= int(user_month) <= 5:
    print("It is spring!")
elif 5 <= int(user_month) <= 8:
    print("It is summer!")
elif 9 <= int(user_month) <= 11:
    print("It is autumn!")
elif int(user_month) in [1, 2, 12]:
    print("It is winter!")
else:
    print("It is not a month")

print(len("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))

sent_len = 0
while True:
    new_sentence = input("input the longest sentence they can without the character 'A': ")
    if new_sentence.find("A") == -1:
        if len(new_sentence) > sent_len:
            sent_len = len(new_sentence)
            print(f"Now the longest sentence has {sent_len} characters. Well done!")
        else:
            print("Your sentence is correct, but too short. Try again!")
    if 'A' in new_sentence:
            print("Your sentence contains 'A' character. Try again!")
    if not new_sentence:
        break