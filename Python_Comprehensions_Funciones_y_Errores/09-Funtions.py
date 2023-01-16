def run():
    def my_print(text):
        print(text * 2);

    my_print("This is my print ");
    my_print("Hello there! ");

    def suma(a, b):
        my_print(a + b);

    suma(1, 5);
    suma(10, 15);


if __name__ == '__main__':
    run();