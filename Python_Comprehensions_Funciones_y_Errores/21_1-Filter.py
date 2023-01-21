def run():
    numbers = [1, 2, 3, 4, 5];
    new_numbers = list(filter(lambda x: x % 2 == 0, numbers)); #Es un filtro que separa quellos que en su condición sea verdadera.
    print(new_numbers);
    


if __name__ == '__main__':
    run();