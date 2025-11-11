board_state = [[' ' for _ in range(3)] for _ in range(3)]
player_turn = ['playerO', 'playerX']
player_symbol = {'playerX': 'X', 'playerO': 'O'}

def display_board():
    global board_state
    game_title = "TIC TAC TOE"
    outer_border = "*" * 17
    inner_border = "*" + ' ' * 2 + '-' * 3 + '|' + '-' * 3 + '|' + '-' * 3 + ' ' * 2 + "*"
    segment_begin = "*" + ' ' * 3
    segment_middle = " " + "|" + " "
    segment_end = ' ' * 3 + "*"

    print(game_title)
    print(outer_border)
    for index in range(3):
        print(segment_begin, end='')
        print(board_state[index][0], end='')
        print(segment_middle, end='')
        print(board_state[index][1], end='')
        print(segment_middle, end='')
        print(board_state[index][2], end='')
        print(segment_end)
        print(inner_border)

    print(outer_border)

def player_input(player):
    print(f"{player} turn" )
    global board_state
    while True:
        row = int(input("Enter row: ")) - 1
        column = int(input("Enter column: ")) - 1
        if row in range(3) and column in range(3):
            if board_state[row][column] == ' ':
                board_state[row][column] = player_symbol[player]
                break
            elif board_state[row][column] == 'X' or board_state[row][column] == 'O':
                print("This cell is occupied. Try again.")
        elif row not in [0, 1, 2] or column not in [0, 1, 2]:
            print("Row and column must be integer between 1 and 3. Try again.")

def check_win(player):
    global board_state
    win_combinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
    ]
    for combination in win_combinations:
        if board_state[combination[0][0]][combination[0][1]] == board_state[combination[1][0]][combination[1][1]] == board_state[combination[2][0]][combination[2][1]] == player_symbol[player]:
            return True
    return False

def check_tie(count):
    global board_state
    no_winner = not (check_win('playerX') and check_win('playerO'))
    if no_winner and count == 9:
        return True
    return False

def main():
    display_board()
    move_count = 1
    while True:
        player_index = int(move_count % 2)
        player_input(player_turn[player_index])
        if check_win(player_turn[player_index]):
            display_board()
            print(f"{player_turn[player_index]} wins! Game Over.")
            return
        if check_tie(move_count):
            display_board()
            print("There is a tie. Game Over.")
            return
        move_count += 1
        display_board()

main()