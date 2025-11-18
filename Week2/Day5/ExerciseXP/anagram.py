from anagram_checker import *
from re import escape, search
from string import punctuation

def is_valid(word):
    word_stripped = word.lower().strip(" ")
    special_chars = str(set(r".^$*+?{}[]()|\/" + punctuation))
    regex = "[" + escape(special_chars) + "]"
    if search(regex, word_stripped):
        print("Special or punctuation characters are not allowed. Try again.")
        return None
    if len(word_stripped.split(" ")) > 1:
        print("Only one word allowed. Try again.")
        return None
    else:
        return word_stripped


def main():
    while True:
        user_choice = input("""What would you like to do?
        - check a word (c)
        - exit (x)
          """)
        if user_choice == "c":
            user_word = input("Enter a word: ")
            user_word_clean = is_valid(user_word)
            if user_word_clean is not None:
                print(f"your word: {user_word_clean}".upper())
                anagram_checker1 = AnagramChecker()
                if anagram_checker1.is_valid_word(user_word):
                    print("This is a valid English word.")
                else:
                    print("This is an invalid English word.")
                anagram_list = anagram_checker1.get_anagrams(user_word)
                if user_word in anagram_list:
                    anagram_list.remove(user_word)
                if len(anagram_list) > 0:
                    anagram_string = ", ".join(anagram_list)
                    print(f"Anagrams for your word: {anagram_string}")
                else:
                    print("No anagrams for your word")
        elif user_choice == "x":
            return False
        else:
            print("Invalid input. Try again.")

main()



