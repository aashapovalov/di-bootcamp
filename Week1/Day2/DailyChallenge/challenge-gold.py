from datetime import date, datetime

user_birthday = input("Enter your birthday (in DD/MM/YYYY format): ")
user_birthday_date = datetime.strptime(user_birthday, "%d/%m/%Y")
today = datetime.today()
age = today.year - user_birthday_date.year
if (today.month, today.day) < (user_birthday_date.month, user_birthday_date.day):
    age -= 1
candles_count = age % 10
cake_top = '_'*((11 - candles_count) // 2) + 'i'*candles_count + '_'*(11 - ((11 - candles_count) // 2) - candles_count)
print(f"""       {cake_top}
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
""")