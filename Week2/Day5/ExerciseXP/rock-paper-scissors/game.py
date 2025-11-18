from random import randint

class Game:
    def get_user_item(self):
        while True:
            user_choice = input("""Enter your choice:
            - rock (r)
            - paper (p)
            - scissors (s)
            """)
            user_options = {"r": "rock", "p": "paper", "s": "scissors"}
            if user_choice in ["r", "p", "s"]:
                return user_options[user_choice]
            else:
                print("Invalid input. Try again.")

    def get_computer_item(self):
        choices = ["rock", "paper", "scissors"]
        computer_choice = choices[randint(0, len(choices) - 1)]
        return computer_choice

    def get_game_result(self, user_choice, computer_choice):
        if user_choice == computer_choice:
            return "draw"
        elif (user_choice, computer_choice) in [("rock", "scissors"), ("paper", "rock"), ("scissors", "paper")]:
            return "win"
        else:
            return "loss"

    def play(self):
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        result = self.get_game_result(user_choice, computer_choice)
        print(f"You chose {user_choice} and computer chose {computer_choice}\n The result is {result.upper()}")
        return result
