#Mini-Project #2 - Hangman
import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
tries = 6

HANGMAN_PICS = [
""" +---+
 |   |
 |   
 |   
 |   
_|___""",
""" +---+
 |   |
 |   O
 |   
 |   
_|___""",
""" +---+
 |   |
 |   O
 |   |
 |   
_|___""",
""" +---+
 |   |
 |   O
 |  /|
 |   
_|___""",
""" +---+
 |   |
 |   O
 |  /|\\
 |   
_|___""",
""" +---+
 |   |
 |   O
 |  /|\\
 |  / 
_|___""",
""" +---+
 |   |
 |   O
 |  /|\\
 |  / \\
_|___"""
]

def display_word(user_letters):
    global word
    current_state = ''
    for letter in word:
        if letter in user_letters:
            current_state += letter
        else:
            current_state += '*'
    return current_state

def check_if_win(user_letters):
    global word
    if set(user_letters).intersection(set(word)) == set(word):
        return True
    return False


def game():
    count_tries = 0
    user_letters = []
    while count_tries < 6:
        print(HANGMAN_PICS[count_tries])
        print(f"You have {tries - count_tries} tries left")
        print(f"The word is: {display_word(user_letters)}")
        input_letter = input('Type a letter: ')
        if user_letters.count(input_letter) != 0:
            print("You've already taken this. Try again")
            continue
        elif word.find(input_letter) != -1:
            print("Correct!")
        else:
            print("Wrong!")
            count_tries += 1
        user_letters.append(input_letter)
        if check_if_win(user_letters):
            print("You win! The word was " + word)
            break
        else:
            print(f"Game Over. You lost. The word was {word}")
            print(HANGMAN_PICS[count_tries])

game()