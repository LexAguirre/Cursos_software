def run():

    def find_volume(length=1, width=1, depth=1): #Se dejan algunas variables por defecto por so no se ingresan datos a la función
        return length * width * depth, width, "Hello" # los (length * width * depth) los convierte al primer elemento de una tupla

    result, width, text = find_volume(width = 10);

    print(result);
    print(width);
    print(text);


if __name__ == '__main__':
    run();