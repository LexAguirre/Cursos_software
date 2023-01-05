def palindromo(palabra):
    palabra = palabra.replace(' ', '');
    palabra = palabra.lower();
    palabra_invertida = palabra[::-1];
    if(palabra == palabra_invertida):
        return True;
    else:
        return False;

def run(): #Estandar para la ejecución de programas en python
    palabra = input("Escrube una palabra: ");
    es_palindromo = palindromo(palabra);
    if es_palindromo == True:
        print("Es palindromo");
    else:
        print("No es palindromo")


if __name__ == '__main__':
    run();

