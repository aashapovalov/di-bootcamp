from string import punctuation
from re import sub, escape

class Text():
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        return self.text.split(" ").count(word)

    def most_common_word(self):
        words = set(self.text.split(" "))
        word_frequency_count = {}
        for word in words:
            word_frequency_count[word] = self.word_frequency(word)
        max_freq_key = ""
        max_freq_value = 0
        for key, value in word_frequency_count.items():
            if value > max_freq_value:
                max_freq_key = key
                max_freq_value = value
        return max_freq_key

    def unique_words(self):
        return set(self.text.split(" "))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path) as file:
            text = file.read()
        text1 = Text(text)
        return text1

class TextModification(Text):
    def remove_punctuation(self):
        regex = "[" + escape(punctuation) + "]"
        new_text = sub(regex, "", self.text)
        return new_text

    def remove_stop_words(self):
        with open("stop_words.txt") as file:
            stop_words = file.readlines()
        text_list = self.text.split(" ")
        for word in text_list:
            if word in stop_words:
                text_list.remove(word)
        return " ".join(text_list)

    def remove_special_characters(self):
        special_characters = ".^$*+?{}[]()|\/"
        regex = "[" + escape(special_characters) + "]"
        return sub(regex, "", self.text)
