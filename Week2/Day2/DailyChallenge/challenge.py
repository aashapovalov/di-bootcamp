from math import ceil
from string import ascii_lowercase

class Pagination:
    def __init__(self, items = None, page_size = 10):
        if items is None:
            self.items = []
        else:
            self.items = items
        self.page_size = page_size
        self.current_idx = 1
        self.pages_num = ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        elem_begin = (self.current_idx - 1) * self.page_size
        elem_end = (self.current_idx - 1) * self.page_size + self.page_size - 1
        return self.items[elem_begin: elem_end + 1]

    def go_to_page(self, page_num):
        try:
            if page_num in range(self.pages_num +1):
                self.current_idx = page_num
            else:
                raise Exception(f"Page number should be between 1 and {self.pages_num}")
        except ValueError as e:
            print(e)

    def first_page(self):
        self.current_idx = 1

    def last_page(self):
        self.current_idx = self.pages_num

    def next_page(self):
        try:
            if self.current_idx < self.pages_num:
                self.current_idx = self.current_idx + 1
            else:
                raise Exception(f"Page number should be between 1 and {self.pages_num}")
        except ValueError as e:
            print(e)

    def previous_page(self):
        try:
            if self.current_idx > 1:
                self.current_idx = self.current_idx - 1
            else:
                raise Exception(f"Page number should be between 1 and {self.pages_num}")
        except ValueError as e:
            print(e)

new_list = [let for let in ascii_lowercase]
print(new_list)
pag1 = Pagination(new_list, 5)
print(pag1.get_visible_items())
pag1.next_page()
print(pag1.get_visible_items())
print(pag1.current_idx)
pag1.go_to_page(3)
print(pag1.get_visible_items())
pag1.last_page()
print(pag1.current_idx)
print(pag1.get_visible_items())
