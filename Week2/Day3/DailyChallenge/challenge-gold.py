user1 = ("Tom",19,80)
user2 = ("John",20,90)
user3 = ("Jony",17,91)
user4 = ("Jony",17,93)
user5 = ("Json",21,85)

list1 = [user5,user4,user3,user2,user1]
print(list1)
list1.sort(key=lambda t: (t[0], t[1], t[2]))
print(list1)