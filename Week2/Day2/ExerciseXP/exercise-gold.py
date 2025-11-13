class BankAccount():
    def __init__(self, balance, username, password, authenticated = False):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception('You are not logged in')
        else:
            if amount <= 0:
                raise Exception('You cannot deposit negative amount')
            else:
                self.balance += amount
                print(f"You have deposited {amount}. Your balance is {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception('You are not logged in')
        else:
            if amount <= 0:
                raise Exception('You cannot withdraw negative amount')
            else:
                self.balance -= amount
                print(f"You have withdrew {amount}. Your balance is {self.balance}")


    def authenticate(self, name, passw):
        if name != self.username or passw != self.password:
            raise Exception('Invalid credentials')
        else:
            self.authenticated = True


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance = 0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if amount < 0:
            raise Exception('You cannot withdraw negative amount')
        if amount < self.minimum_balance:
            raise Exception('You cannot withdraw more than the minimum balance')
        self.balance -= amount

class ATM:
    def __init__(self, account_list, try_limit):
        try:
            for account in account_list:
                if not isinstance(account, BankAccount):
                    raise Exception('Incorrect account list')
            self.account_list = account_list
        except TypeError as e:
            print(f"Can't instantiate class ATM: {e}")
        if not isinstance(try_limit, int) or try_limit <= 0:
             self.try_limit = 2
        else:
            self.try_limit = try_limit

    def show_main_menu(self):
        while True:
            print("""What would you like to do:
            - log in
            - exit""")
            user_choice = input("> ")
            if user_choice == "exit":
                return False
            elif user_choice == "log in":

                self.log_in()

    def log_in(self):
        count_tries = 0
        while count_tries < self.try_limit:
            username = input("Enter your username: ")
            password = input("Enter your password: ")
            for account in self.account_list:
                if account.username == username and account.password == password:
                    account.authenticate(username, password)
                    self.show_account_menu(account)
                    return
            print(f"Incorrect username or password. you have {self.try_limit - count_tries} tries left")
            count_tries += 1
        print("You can't log in")
        return

    def show_account_menu(self, account):
        while True:
            print("""What would you like to do:
            - deposit, 
            - withdraw 
            - exit""")
            user_choice = input("> ")
            if user_choice == "deposit":
                print("What would you like to deposit?")
                user_deposit = int(input("> "))
                try:
                    account.deposit(user_deposit)
                except Exception as e:
                    print(f"An error occurred: {e}")
            elif user_choice == "withdraw":
                print("What would you like to withdraw?")
                user_withdraw = int(input("> "))
                try:
                    account.withdraw(user_withdraw)
                except Exception as e:
                    print(f"An error occurred: {e}")
            elif user_choice == "exit":
                return False

acc1 = BankAccount(200, "john", "1234")
acc2 = BankAccount(500, "jane", "abcd")

atm1 = ATM([acc1, acc2], -1)
atm1.show_main_menu()


