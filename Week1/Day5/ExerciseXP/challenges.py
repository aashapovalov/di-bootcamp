from random import choice, randint
from string import ascii_letters
from math import sqrt

#Exercise 1
#Instructions
#Write a script that inserts an item at a defined index in a list.
list1 = [1, 2, 3]
def insert_list(list, index, element):
    return list.insert(index, element)
print(list1)
insert_list(list1, 1, 4)
print(list1)

#Exercise 2
#Instructions
#Write a script that counts the number of spaces in a string.
str1 = '   hello world from python   '
def count_spaces(str):
    return str.count(' ')
print(count_spaces(str1))

#Exercise 3
#Instructions
#Write a script that calculates the number of upper case letters and lower case letters in a string.

str2 = ''.join(choice(ascii_letters) for _ in range(16))
print(str2)
def count_char(str):
    count_upper = 0
    count_lower = 0
    for letter in str:
        if letter.isupper():
            count_upper += 1
        elif letter.islower():
            count_lower += 1
    return count_upper, count_lower
print(count_char(str2))

#Exercise 4
#Instructions
#Write a function to find the sum of an array without using the built-in function:

list1 = [randint(0, 100) for _ in range(5)]
print(list1)
def sum_list(list):
    summation = 0
    for element in list:
        summation += element
    return summation
print(sum_list(list1))

#Exercise 5
#Instructions
#Write a function to find the max number in a list
list2 = [randint(0, 100) for _ in range(5)]
print(list2)
def max_list(list):
    maximum = 0
    for element in list:
        if element > maximum:
            maximum = element
    return maximum
print(max_list(list2))

#Exercise 6
#Instructions
#Write a function that returns factorial of a number

num1 = randint(0, 10)
print(num1)
def factorial(num):
    i = 1
    fact = 1
    while i <= num1:
        fact *= i
        i += 1
    return fact
print(factorial(num1))

#Exercise 7
#Instructions
#Write a function that counts an element in a list (without using the count method):
list3 = [choice(ascii_letters) for _ in range(160)]
rand_char = choice(ascii_letters)
print(rand_char, list3)
def list_count(rand_list, r_char):
    count = 0
    for element in rand_list:
        if element == r_char:
            count += 1
    return count
print(list_count(list3, rand_char), list3.count(rand_char))

#Exercise 8
#Instructions
#Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:
list4 = [randint(0, 100) for _ in range(3)]
print(list4)
def norm(r_list):
    summation = 0
    for element in r_list:
        summation += element ** 2
    return sqrt(summation)
print(norm(list4))

#Exercise 9
#Instructions
#Write a function to find if an array is monotonic (sorted either ascending of descending)

list5 = [randint(0, 100) for _ in range(randint(3,7))]
print(list5)
def is_mono(r_list):
    list_ac = sorted(r_list)
    list_d = sorted(list5, reverse=True)
    if r_list == list_d or r_list == list_ac:
        return True
    else:
        return False
print(is_mono(list5))

#Exercise 10
#Instructions
#Write a function that prints the longest word in a list.
list6 = [''.join(choice(ascii_letters) for _ in range(randint(1, 10))) for _ in range(5)]
print(list6)

def long_words(list):
    maximum = 0
    longest_word = ''
    for element in list:
        if len(element) > maximum:
            maximum = len(element)
            longest_word = element
    return longest_word
print(long_words(list6))

#Exercise 11
#Instructions
#Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

list7 = [str(x) if x % 2 else x for x in range(10)]
print(list7)
def sort_list(list):
    list_int = [el for el in list if type(el) == int]
    list_str = [el for el in list if type(el) == str]
    return list_int, list_str
print(sort_list(list7))

#Exercise 12
#Instructions
#Write a function to check if a string is a palindrome:
str3 = ''.join(choice(ascii_letters) for _ in range(5))
print(str3)
def is_palindrome(str):
    str_reverse = str[::-1]
    if str == str_reverse:
        return True
    else:
        return False
print(is_palindrome(str3))

#Exercise 13
#Instructions
#Write a function that returns the amount of words in a sentence with length > k:
str4 = ' '.join(''.join(choice(ascii_letters) for _ in range(randint(1, 10))) for _ in range(5))
length = randint(3, 5)
print(length, str4)
def sum_over_k(str, k):
    list_over_k = [el for el in str.split(' ') if len(el)>k]
    return len(list_over_k)
print(sum_over_k(str4, length))

#Exercise 14
#Instructions
#Write a function that returns the average value in a dictionary (assume the values are numeric):
dict1 = {key: randint(0, 100) for key in ascii_letters}
print(dict1)
def dict_avg(r_dict):
    return sum(r_dict.values()) / len(r_dict)
print(dict_avg(dict1))

# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:
num2 = randint(0, 100)
num3 = randint(0, 100)
print(num2, num3)
def common_div(a, b):
    minimal = min(a, b)
    divisors_list = []
    for i in range(2, minimal+1):
        if a % i == 0 and b % i == 0:
            divisors_list.append(i)
    return divisors_list
print(common_div(num2, num3))

# Exercise 16
# Instructions
# Write a function that test if a number is prime:
num4 = randint(2, 100)
print(num4)
def is_prime(num):
    for i in range(2, num // 2 + 1):
        if num % i == 0:
            return False
    return True
print(is_prime(num4))

# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:

list8 = [randint(0, 10) for _ in range(10)]
print(list8)
def weird_print(r_list):
    weird_list = []
    for index in range(len(r_list)):
        if r_list[index] == index:
            weird_list.append(index)
    return weird_list
print(weird_print(list8))

print("Exercise 18")
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

def type_count(**kwargs):
    types = {"int": 0,  "float": 0, "str": 0, "bool": 0}
    for key, value in kwargs.items():
        if isinstance(value, bool):
            types["bool"] += 1
        elif isinstance(value, int):
            types["int"] += 1
        elif isinstance(value, float):
            types["float"] += 1
        elif isinstance(value, str):
            types["str"] += 1
    print(types)

type_count(a=1,b='string',c=1.0,d=True,e=False)


# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
#
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.
str5 = ' '.join(''.join(choice(ascii_letters) for _ in range(randint(1, 10))) for _ in range(5))
print(str5)
def split_mimic(r_str, divider = ' '):
    div_index = []
    div_str = []
    for index in range(len(r_str)):
        if r_str[index] == divider:
            div_index.append(index)
    for index in range(len(div_index)):
        if index == 0:
            div_str.append(r_str[0:div_index[index]])
        else:
            div_str.append(r_str[div_index[index-1]+1:div_index[index]])
    div_str.append(r_str[div_index[len(div_index)-1]+1:len(r_str)-1])
    return div_str
print(split_mimic(str5))

# Exercise 20
# Instructions
# Convert a string into password format.

password = input('Enter password: ')
def password_conv(passw):
    pass_masked = "*" * len(passw)
    print(f'input: "{passw}"')
    print(f'output: "{pass_masked}"')

password_conv(password)
