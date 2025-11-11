from string import ascii_letters
from random import choice,randint
def str_reverse():
    user_string = input("Please enter a string of words separated by commas: ")
    str_list = user_string.split(",")
    str_list.sort()
    new_str = ','.join(str_list)
    print(new_str)


sentence = " ".join(["".join(choice(ascii_letters) for _ in range(randint(1, 10))) for _ in range(randint(1, 10))])
print(sentence)
def long_sent(sent):
    max_len = 0
    max_word = ""
    for word in sent.split(" "):
        if len(word) > max_len:
            max_len = len(word)
            max_word = word
    return max_word
print(long_sent(sentence))
print(long_sent("Margaret's toy is a pretty doll."))
print(long_sent("A thing of beauty is a joy forever."))