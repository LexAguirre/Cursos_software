import sys; #Información del sistema 
import re; #expresiones regulares
import time; #Informacion del tiempo
import collections; #Informacion que se recolecta al analizar

def run():
    print(sys.path); #sys es el sistema por lo que toma informacion del sistema donde se ejecuta

    text = "My phone number is 111 284 9283, the code of my country is +52, and my lucky number is 1"
    result = re.findall("[1-9]+", text); #busca unos numeros espesificos en el texto
    print(result);

    timestamp = time.time();
    print(timestamp)
    local = time.localtime();
    result = time.asctime(local);
    print(result);

    numbers = [1, 3, 2, 4, 5, 3, 2, 4, 5, 5, 2, 3, 1, 3, 2, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 1, 3];
    counter = collections.Counter(numbers);
    print(counter);


if __name__ == '__main__':
    run();