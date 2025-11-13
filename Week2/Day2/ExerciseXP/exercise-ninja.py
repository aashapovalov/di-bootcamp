import time

class Board:
    def __init__(self, dimension_x, dimension_y):
        self.dimension_x = dimension_x
        self.dimension_y = dimension_y
        self.alive_cells = []

    def display_board(self):
        for i in range(self.dimension_y):
            for j in range(self.dimension_x):
                if (j, i) in self.alive_cells:
                    print("x", end="")
                else:
                    print(".", end="")
            print("")

    def clear_screen(self):
        print("\033[H\033[J", end="")

    def calc_board(self):
        old_alive = self.alive_cells.copy()
        new_alive = []
        for i in range(self.dimension_y):
            for j in range(self.dimension_x):
                min_j = max(j - 1, 0)
                max_j = min(j + 1, self.dimension_x - 1)
                min_i = max(i - 1, 0)
                max_i = min(i + 1, self.dimension_y - 1)
                count = 0
                for k in range(min_i, max_i + 1):
                    for l in range(min_j, max_j + 1):
                        if (l, k) in old_alive:
                            count += 1
                if (j, i) in old_alive:
                    count -= 1
                    if count in [2, 3]:
                        new_alive.append((j, i))
                else:
                    if count == 3:
                       new_alive.append((j, i))
        self.alive_cells = new_alive


board1 = Board(100, 40)
board1.alive_cells = [
    (10+24, 10),
    (10+22, 11), (10+24, 11),
    (10+12, 12), (10+13, 12), (10+20, 12), (10+21, 12), (10+34, 12), (10+35, 12),
    (10+11, 13), (10+15, 13), (10+20, 13), (10+21, 13), (10+34, 13), (10+35, 13),
    (10+0, 14), (10+1, 14), (10+10, 14), (10+16, 14), (10+20, 14), (10+21, 14),
    (10+0, 15), (10+1, 15), (10+10, 15), (10+14, 15), (10+16, 15), (10+17, 15), (10+22, 15), (10+24, 15),
    (10+10, 16), (10+16, 16), (10+24, 16),
    (10+11, 17), (10+15, 17),
    (10+12, 18), (10+13, 18)
]
count1 = 0
while count1<100:
    board1.clear_screen()
    print(f"Generation: {count1}")
    board1.display_board()
    board1.calc_board()
    time.sleep(0.1)
    count1 +=1

