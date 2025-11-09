from math import sqrt

#Exercises XP Gold
#Exercise 1: Concatenate lists

list1 = ['a', 'b', 'c']
list2 = ['d', 'e', 'f']
list1.extend(list2)
print(list1)

#Exercise 2: Range of numbers
for item in range(1500, 2501):
    if item % 5 == 0 and item % 7 == 0:
        print(item)

#Exercise 3: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Type your name: ")
if user_name in names:
    print(f"if the input is {user_name} we should be printing the index {names.index(user_name)}")

#Exercise 4: Greatest Number
number_list = []
for number in range(3):
    user_number = input("Type your number: ")
    number_list.append(int(user_number))
print(f"The greatest number is {max(number_list)}")

#Exercise 5: The Alphabet
alphabet_list = [chr(number) for number in range(97, 123)]
print(', '.join(alphabet_list))
vowels = ['a', 'e', 'i', 'o', 'u']
for letter in alphabet_list:
    if letter in vowels:
        print(f'{letter} is a vowel')
    else:
        print(f'{letter} is a consonant')

#Exercise 6: Words and letters
words_list = []
for number in range(7):
    user_word = input("Type your word: ")
    words_list.append(user_word)
user_character = input("Type your character: ")
first_app = []
for word in words_list:
    if user_character in word:
        first_app.append(word.index(user_character))
    else:
        first_app.append(f"There is no {user_character} in the {word}")
print(first_app)

#Exercise 7: Min, Max, Sum
list3 = list(range(1, 1000000))
print(min(list3), max(list3))
print(sum(list3))

#Exercise 8 : List and Tuple
user_numbers = input("Type your numbers, separated by comma: ")
user_numbers_list = user_numbers.split(',')
user_numbers_tuple = tuple(user_numbers_list)
print(user_numbers_list)
print(user_numbers_tuple)

