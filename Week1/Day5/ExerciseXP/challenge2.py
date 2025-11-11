str_length = 5
for el in [num for num in range(1, 6) if num % 2 == 1]:
    num_spaces = (str_length - int(el))//2
    spaces = " " * num_spaces*2
    stars = " *" * el
    print(f"{spaces}{stars}")

str_length = 5
for el in [num for num in range(1, 6)]:
    num_spaces = str_length - int(el)
    spaces = " " * num_spaces*2
    stars = " *" * el
    print(f"{spaces}{stars}")


for el in [num for num in range(1, 6)]:
    num_spaces = str_length - int(el)
    stars = " *" * el
    print(f"{stars}")
for el in sorted([num for num in range(1, 6)], reverse=True):
    num_spaces = str_length - int(el)
    spaces = " " * num_spaces*2
    stars = " *" * el
    print(f"{spaces}{stars}")

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):
    minimum = i
    for j in range( i + 1, len(my_list)):
        if(my_list[j] < my_list[minimum]):
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)