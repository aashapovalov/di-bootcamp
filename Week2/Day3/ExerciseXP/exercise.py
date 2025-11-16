import random
import string
import datetime
import faker

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"'{str(self.amount)} {self.currency}'" if self.amount == 1 else f"'{str(self.amount)} {self.currency}s'"

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise TypeError("You can't add different currencies")
        else:
            raise TypeError("You can add only integers or currencies")

    def __iadd__(self, other):
        self.amount += other
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#the comment is the expected output
print(c1)
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1)
# 5 dollars

c1 += 5
print(repr(c1))
# 10 dollars

#c1 += c2
print(c1)
# 20 dollars

#print(c1 + c3)

#🌟 Exercise 3: String module
user_str = ''
for index in range(5):
    user_str += random.choice(string.ascii_letters)
print(user_str)

#🌟 Exercise 4: Current Date
data_today = datetime.date.today()
print(data_today)

#🌟 Exercise 5: Amount of time left until January 1st
datetime_today = datetime.datetime.now()
datetime_jan = datetime.datetime(year=2026 , month=1, day=1)
print(datetime_jan - datetime_today)

#🌟 Exercise 6: Birthday and minutes
user_birthday = input("Enter your birthday(yyyy/mm/dd):")
diff = datetime_today - datetime.datetime.strptime(user_birthday, '%Y/%m/%d')
print(diff.total_seconds()//60)

#🌟 Exercise 7: Faker Module
user_list = []
def add_user():
    user = {}
    fake = faker.Faker()
    user['first_name'] = fake.first_name()
    user['address'] = fake.address()
    user['language_code'] = fake.language_code()
    user_list.append(user)

add_user()
add_user()
print(user_list)