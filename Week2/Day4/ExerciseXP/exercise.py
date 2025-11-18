#🌟 Exercise 1: Random Sentence Generator

from random import choice
import json

def get_words_from_file(filename):
    with open(filename) as f:
        return f.readlines()

def get_random_sentence(length):
    file_name = "words.txt"
    words = get_words_from_file(file_name)
    sentence = ""
    for i in range(length):
        word = choice(words)
        sentence += word.strip("\n")
        if i != length - 1:
            sentence += " "
    return sentence.lower()

def main():
    """The program generates a random sentence of a specified length from a word list"""
    while True:
        try:
            length = int(input("Enter the length of the sentence (from 2 to 20): "))
            if length > 20 or length < 2:
                print("Please enter a number between 2 and 20")
                continue
            else:
                print(get_random_sentence(length))
                return False
        except ValueError:
            print("Please enter an integer")
            continue

main()

#🌟 Exercise 2: Working with JSON

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

sample_dict = json.loads(sampleJson)
sample_dict["company"]["employee"]["payable"]["salary"] = 5000
sample_dict["company"]["employee"]["birth_date"] = "1980/11/11"

json_file = "sample.json"
with open(json_file, "w+") as f:
    json.dump(sample_dict, f, indent=2, sort_keys=True)
    f.seek(0)
    print(f.read())