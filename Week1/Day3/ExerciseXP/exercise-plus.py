#🌟 Exercise 1 : Student Grade Summary
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_average = {key: int(sum(value)/len(value)) for key, value in student_grades.items()}
print(student_average)

student_letter_grades = {key: "F" if value < 60 else "D" if value < 70 else "C" if value < 80 else "B" if value < 90 else "A" for key, value in student_average.items()}
print(student_letter_grades)

class_average = sum(student_average.values())/len(student_average)
print(class_average)

for key, value in student_average.items():
    print(f"{key}: {value}, {student_letter_grades[key]}")

#🌟 Exercise 2 : Advanced Data Manipulation and Analysis
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]
product_cat = set({})
for data in sales_data:
    product_cat.add(data["product"])

cat_sales = {key: 0 for key in product_cat}
for cat in product_cat:
    for transaction in sales_data:
        if cat == transaction["product"]:
            cat_sales[cat] = cat_sales[cat] + transaction["quantity"]*transaction["price"]
print(cat_sales)

customers = set({})
for data in sales_data:
    customers.add(data["customer_id"])

customer_sales = {key: 0 for key in customers}
for cid in customers:
    for transaction in sales_data:
        if cid == transaction["customer_id"]:
            customer_sales[cid] = customer_sales[cid] + transaction["quantity"]*transaction["price"]
print(customer_sales)

for transaction in sales_data:
    transaction["total_price"] = transaction["price"] * transaction["quantity"]

high_value_transaction = [transaction for transaction in sales_data if transaction["total_price"] > 500]
print(high_value_transaction)

customers_loyalty = {key: 0 for key in customers}
for cid in customers:
    for transaction in sales_data:
        if cid == transaction["customer_id"]:
            customers_loyalty[cid] = customers_loyalty[cid] + 1
loyal_customers = {key: value for key, value in customers_loyalty.items() if value > 1}
print(loyal_customers)

product_quantity = {key: 0 for key in product_cat}
for cat in product_quantity:
    for transaction in sales_data:
        if cat == transaction["product"]:
            product_quantity[cat] = product_quantity[cat] + transaction["quantity"]

product_transaction_value = {key: int(cat_sales[key]/value) for key, value in product_quantity.items()}
print(product_transaction_value)

most_popular_prod = max(product_quantity, key=product_quantity.get)
print(most_popular_prod)