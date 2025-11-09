user_input = input("Enter a number: ")
user_number = int(user_input)
divisor_list = []
for i in range(user_number-1):
    if user_number % (i+1) == 0:
        divisor_list.append(i+1)

if sum(divisor_list) == user_number:
    print("Yes, the number is a perfect number")
else:
    print("No, the number is not a perfect number")