#Exercise 1 : What’s your name ?
def get_full_name(first_name, last_name, middle_name = ''):
    if not middle_name:
        return first_name.capitalize() + ' ' + last_name.capitalize()
    else:
        return first_name.capitalize() + ' ' + middle_name.capitalize() + ' ' + last_name.capitalize()

print(get_full_name(first_name="bruce", last_name="lee"))

#Exercise 2 : From English to Morse
english_morse = {
    'a': '.-',   'b': '-...', 'c': '-.-.', 'd': '-..',  'e': '.',
    'f': '..-.', 'g': '--.',  'h': '....', 'i': '..',   'j': '.---',
    'k': '-.-',  'l': '.-..', 'm': '--',   'n': '-.',   'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.',  's': '...',  't': '-',
    'u': '..-',  'v': '...-', 'w': '.--',  'x': '-..-', 'y': '-.--',
    'z': '--..', ' ': '/', '.': '.-.-.-', ',': '--..--',
}
morse_english = {key: value for value, key in english_morse.items()}

def eng_to_morse(string):
    str_list = list(string.lower())
    for i in range (len(str_list)):
        str_list[i] = english_morse.get(str_list[i])
    translated_string = ' '.join(str_list)
    print(translated_string)

eng_to_morse('This is a test')

print(morse_english)
def morse_to_english(string):
    str_list = string.split(' ')
    for i in range (len(str_list)):
        str_list[i] = morse_english[str_list[i]]
    translated_string = ''.join(str_list)
    print(translated_string)

morse_to_english('- .... .. ... / .. ... / .- / - . ... -')

#Exercise 3 : Box of stars
def box_printer(*args):
    for arg in args:
        print(arg)

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")
#Exercise 4 : What is the purpose of this code?
def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)