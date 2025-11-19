from random import shuffle

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.deck = []
        self.suit_options = ["Hearts", "Clubs", "Diamonds", "Spades"]
        self.value_options = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    def shuffle(self):
        for i in range(len(self.suit_options)):
            for j in range(len(self.value_options)):
                self.deck.append(Card(self.suit_options[i], self.value_options[j]))
        shuffle(self.deck)

    def deal(self):
        drawn_card = self.deck.pop(0)
        print(f"A card {drawn_card.value} of {drawn_card.suit} is drawn. There are {len(self.deck)} cards left.")

deck1 = Deck()
deck1.shuffle()
deck1.deal()
deck1.deal()
deck1.deal()
deck1.deal()
deck1.deal()