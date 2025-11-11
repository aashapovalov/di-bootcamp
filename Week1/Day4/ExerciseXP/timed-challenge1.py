from itertools import count


def occurrence(string, symbol):
    str_list = list(string)
    print(f"String: {string}")
    print(f"Character: {symbol}")
    print(str_list.count(symbol))

occurrence("Programming is cool!", "m")
