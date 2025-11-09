#Challenge 1: Multiples of a Number
user_number = int(input("Please enter a number: "))
user_length = int(input("Please enter a length: "))
multiples_list = []
for i in range(user_length):
    multiples_list.append(user_number*(i+1))
print(multiples_list)

#Challenge 2: Remove Consecutive Duplicate Letters
user_string = str(input("Please enter a string: "))
user_string_clean = ''

for i in range(len(user_string)):
    if i == 0:
        user_string_clean = user_string_clean + user_string[i]
        continue
    if user_string[i] != user_string[i-1]:
        user_string_clean = user_string_clean + user_string[i]
print(user_string_clean)
