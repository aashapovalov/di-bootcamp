cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars_list = cars.split(", ")
print(f"There are {len(cars_list)} cars manufacturers in the list")

cars_list.sort()
print(cars_list)

cars_list.sort(reverse=True)
print(cars_list)

print(f"There are {len([company for company in cars_list if 'o' in company])} manufacturers in the list that have 'o' in their names")
print(f"There are {len([company for company in cars_list if 'i' not in company])} manufacturers in the list that don't have 'i' in their names")

cars_list1 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_list2 = list(set(cars_list1))
print(f"There are following {len(cars_list2)} manufacturers in the list: {', '.join(cars_list2)}")

cars_list2.sort()
cars_list_rev = [comp[::-1] for comp in cars_list2]
print(cars_list_rev)
