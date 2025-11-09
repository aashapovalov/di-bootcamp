#Challenge 1: Letter Index Dictionary
user_word = input("Enter a word: ")
word_dict = {}
for index in range(len(user_word)):
    if user_word[index] in word_dict.keys():
        word_dict[user_word[index]].append(index)
    else:
        word_dict[user_word[index]] = [index]
print(word_dict)

#Challenge 2: Affordable Items
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

items_purchase_num = {key: value.strip("$").replace(',', '') for key, value in items_purchase.items()}
wallet_num = int(wallet.strip("$"))
aff_items = []

for key, value in items_purchase_num.items():
    if int(value) <= int(wallet_num):
        wallet_num = wallet_num - int(value)
        aff_items.append(key)

if len(aff_items) > 0:
    print(aff_items)
else:
    print("Nothing")