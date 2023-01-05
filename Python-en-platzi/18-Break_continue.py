def run():
    # for contador in range(1000):
    #     if contador % 2 != 0: # Todo numero que se divida entre 2 si su resto es 0 entonces es par sino es inpar
    #         continue
    #     print(contador);

    # for i in range(10000):
    #     print(i);
    #     if i == 5678:
    #         break; #detiene el ciclo al encontrar el número

    texto = input("Escribe un texto: ");
    for letra in texto:
        if letra == "o":
            break
        print(letra); 


if __name__ == '__main__':
    run()