import random


def run():
    counter = 0;
    numero_aleatorio = random.randint(1, 100);
    numero_elegido = int(input("Elige un múmero del 1 al 100: "));
    while numero_elegido != numero_aleatorio:
        if numero_elegido < numero_aleatorio:
            counter += 1;
            print("Busca un número mas grande");
        else:
            counter += 1;
            print("Busca un número mas pequeño");
        numero_elegido = int(input("Elige otro número: "));
    print("¡Ganaste!");   
    print("Te tomo " + str(counter) + " intentos");


if __name__ == '__main__':
    run();