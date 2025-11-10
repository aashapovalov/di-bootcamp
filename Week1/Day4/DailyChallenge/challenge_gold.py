from curses.ascii import isalpha
from dataclasses import replace
from typing import TypeAlias
MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''



matr_list = MATRIX_STR.split('\n')
matr_list.pop(0)
n_rows = len(matr_list)
n_cols = len(matr_list[0])
matrix =  [list(row) for row in matr_list]
flat_str_list = []

for col in range(n_cols):
    for row in range(n_rows):
        flat_str_list.append(matrix[row][col])
map(lambda a: a if a.isalpha() else "", flat_str_list)
filter_flat_str_list = [a if a.isalpha() else "" for a in flat_str_list]
print(filter_flat_str_list)
final_str = " ".join(filter_flat_str_list)
print(final_str)