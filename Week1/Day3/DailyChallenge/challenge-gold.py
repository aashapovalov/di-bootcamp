#Daily challenge GOLD: Caesar Cypher
shift = 3
text = "If your output is not correct, the most likely issue is that you are still comparing strings instead of numbers".lower()
letter_list = list(range(97, 123))
new_text = ""
for letter in text:
    if letter.isspace():
        new_text += letter
    elif ord(letter) + shift <= letter_list[len(letter_list) - 1]:
        new_text += chr(ord(letter) + shift)
    else:
        new_text += chr(letter_list[ord(letter) + shift - letter_list[len(letter_list) - 1]-1])
print(new_text)