import json
import re

valentine_list = "valentine_list.json"
with open(valentine_list) as file:
    v_list = json.load(file)

regex_item = "^(?=(?:[^eE]*[eE]){2,})V[A-Za-z-]*(?: (?:[A-Z][A-Za-z-]*|of|and|the|for|with))*$"
regex_price = r"^\d{2},14$"


while True:
    item_name = input("Enter item name: ")
    if re.match(regex_item, item_name):
        while True:
            price = input("Enter price: ")
            if re.match(regex_price, price):
                v_list["items"].append({"name": item_name, "price": price})
                break
    break

with open(valentine_list, "w") as file:
    json.dump(v_list, file)

with open(valentine_list) as file:
    print("""
 *****     *****
********* *********
*******************
 *****************
  ***************
    ***********
      *******
        ***
         *
             """)
    print(file.readlines())
