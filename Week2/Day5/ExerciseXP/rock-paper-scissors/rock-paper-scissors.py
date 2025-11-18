from game import *

def get_user_menu_choice():
    while True:
        user_choice = input("""What would you like to do?
        - Play a new game (p)
        - Show score (s)
        - Exit (x)
        """)
        if user_choice in ["p", "s", "x"]:
            return user_choice
        else:
            print("Invalid input. Try again.")

def print_results(results):
    print(f"Results:\n Wins: {results["win"]}, loss: {results["loss"]}, draws: {results["draw"]}")
    print("Thank you for playing!")

def main():
    game1 = Game()
    result_dict = {"win": 0, "loss": 0, "draw": 0}
    while True:
        user_choice = get_user_menu_choice()
        if user_choice == "p":
            result = game1.play()
            result_dict[result] += 1
        elif user_choice == "s":
            print_results(result_dict)
        elif user_choice == "x":
            return False

main()