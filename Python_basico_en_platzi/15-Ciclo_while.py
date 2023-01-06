def run():
    LIMITE = 1000000; #cuando se establece una variable en mayuscula se vuelve constante por lo cual es algo que no cambiará

    contador = 0;
    potencia_2 = 2**contador;
    while potencia_2 < LIMITE: #Mientras que potencia_2 no pase LIMITE entonces se segira ejecutando el codigo
        print("2 elevado a " + str(contador) + " es igual a: " + str(potencia_2));
        contador = contador + 1;
        potencia_2 = 2**contador;


if __name__ == '__main__':
    run();