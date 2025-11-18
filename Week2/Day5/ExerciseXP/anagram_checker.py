class AnagramChecker:
    def __init__(self):
        with open("sowpods.txt") as file:
            self.text = file.readlines()
        for i in range(len(self.text)):
            self.text[i] = self.text[i].lower().strip("\n")

    def is_valid_word(self, word):
        if word in self.text:
            return True
        else:
            return False

    def is_anagram(self, word1, word2):
        word_list1 = sorted(list(word1.lower()))
        word_list2 = sorted(list(word2.lower()))
        if word_list1 == word_list2:
            return True
        else:
            return False

    def get_anagrams(self, word):
        anagram_list = []
        for element in self.text:
            if self.is_anagram(element, word):
                anagram_list.append(element)
        return anagram_list

