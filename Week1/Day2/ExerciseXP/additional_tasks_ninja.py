from math import sqrt
from random import randint
#Exercises XP Ninja
# Exercise 1: Formula


user_numbers = input("Type your numbers, separated by comma: ")
user_numbers_list = user_numbers.split(',')
new_user_numbers_list = [int(sqrt((2*50*int(num))/30)) for num in user_numbers_list]
print(new_user_numbers_list)

#Exercise 2 : List of integers
length = 50
list1 = []
for i in range(length):
    list1.append(randint(-100, 100))
print("The list of numbers – printed in a single line:", list1)
list1.sort(reverse=True)
print("The list of numbers – sorted in descending order:", list1)
print("The sum of all the numbers: ", sum(list1))
list_short = [list1[0], list1[len(list1)-1]]
print("A list containing the first and the last numbers:", list_short)
print("A list of all the numbers greater than 50", [num for num in list1 if num > 50])
print("A list of all the numbers smaller than 10", [num for num in list1 if num < 10])
print("A list of all the numbers squared:", [num ** 2 for num in list1])
print("The numbers without any duplicates", set(list1), f"\nthere are {len(set(list1))} numbers in the list")
print("The average of all the numbers:", sum(list1)/len(list1))
print("The largest number:", max(list1))
print("The smallest number:", min(list1))
max_num = 0
min_num = 0
sum_num = 0
i = 1
for num in list1:
    i += 1
    sum_num += num
    if num > max_num:
        max_num = num
    if num < min_num:
        min_num = num
print("The average of all the numbers (without using built in functions):", sum_num/i)
print("The largest number (without using built in functions):", max_num)
print("The smallest number (without using built in functions):", min_num)

#Exercise 3: Working on a paragraph
paragraph = 'Learning Python is one of the best ways to begin understanding how software really works. The language is simple and expressive, which makes it easy to read and write even for people who are new to programming. With Python, you can automate repetitive tasks, analyze data, build web applications, or even experiment with artificial intelligence. Because it’s open source and supported by a large community, there’s always help available when you get stuck or want to explore new ideas.'
print(f"The paragraph contains {len(paragraph)} characters.")
print(f"The paragraph contains {len(paragraph.split('. '))} sentences.")
print(f"The paragraph contains {len(paragraph.split(' '))} words.")
print(f"The paragraph contains {len(set(paragraph.lower().split(' ')))} unique words.")
print(f"The paragraph contains {len([char for char in paragraph if char != ' '])} non-whitespace characters.")
print(f"The average amount of words per sentence is {len(paragraph) / len(paragraph.split('. '))} words")
word_list = [w.strip(".,!?;:()\"'").lower() for w in paragraph.split()]
word_dict = {}
for word in word_list:
    word_dict[word] = word_dict.get(word, 0) + 1

for key, value in word_dict.items():
    if value > 1:
        print(f"The paragraph has {value} words '{key}'")

#Exercise 4 : Frequency Of The Words
input_string = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
word_list1 = [w.strip(".,!?;:()\"'").lower() for w in input_string.split()]
word_dict1 = {}
for word in word_list1:
    word_dict1[word] = word_dict1.get(word, 0) + 1

for key, value in word_dict1.items():
    print(f"{key}:{value}")

