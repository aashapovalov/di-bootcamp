#🌟 Exercise 1: Converting Lists into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
new_dict = dict(zip(keys, values))
print(new_dict)

#🌟 Exercise 2: Cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price_list = [0 if value < 3 else 10 if value <=12 else 15 for value in family.values()]
print(price_list)
print(sum(price_list))

#🌟 Exercise 3: Zara
zara_info_dict = {
"name": "Zara",
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona",
"type_of_clothes": ["men", "women"", children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000,
"major_color":
    {"France": "blue",
    "Spain": "red",
    "US": ["pink", "green"]}
}

zara_info_dict["number_stores"] = 2
print(f"Zara creates goods for: {', '.join(zara_info_dict["type_of_clothes"])}")
zara_info_dict["country_creation"] = "Spain"
if "international_competitors" in zara_info_dict.keys():
    zara_info_dict["international_competitors"].append("Designal")
del zara_info_dict["creation_date"]
print(zara_info_dict["international_competitors"][len(zara_info_dict["international_competitors"]) - 1])
print(f"Zara's major color in the US are: {', '.join(zara_info_dict["major_color"]["US"])}")
print(len(zara_info_dict.keys()))
print(zara_info_dict.keys())

more_on_zara = {
"creation_date": 1975,
"number_stores": 7000
}

zara_info_dict.update(more_on_zara)
print(zara_info_dict)

#🌟 Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
dict1 = dict(zip(users, range(len(users))))
print(dict1)
dict2 = dict(zip(range(len(users)), users))
print(dict2)
dict3 = dict(zip(sorted(users), range(len(users))))
print(dict3)