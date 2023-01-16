def run():
    price = 100 #Variable global
    def increment():
        price = 200 # Variable local
        price = price + 10;
        print(price);
        return price;

    print(price); #Impresion de una variable global
    price_2 = increment(); 
    print(price_2);


if __name__ == '__main__':
    run();