import random
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

def find_sum(r_list, num):
    for i, item in enumerate(r_list):
        num_search = num - item
        if num_search in r_list[i:]:
            index = r_list.index(num_search, i)
            print(f"{item} + {r_list[index]} = {num}")

find_sum(list_of_numbers, target_number)