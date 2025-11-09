from random import shuffle

user_input = input("Type a string, which is exactly 10 characters long: ")
string_state = True

while string_state:
    if len(user_input) > 10:
        user_input = input("The string is too long. Try again: ")
    elif len(user_input) < 10:
        user_input = input("The string is too short. Try again: ")
    else:
        print("Perfect string!")
        string_state = False

print(f"The first string character is {user_input[0]}, the last string character is {user_input[-1]}")

char_by_char = ''
for char in user_input:
    char_by_char += char
    print(char_by_char)

input_list = list(user_input)
shuffle(input_list)
input_shuffle = "".join(input_list)
print(input_shuffle)