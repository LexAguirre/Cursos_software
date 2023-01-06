#Con las funciones podremos utilizar el mismo bloque de codigo multiples veces al ser invocado
def imprimir_mensaje():
    print("Mensaje especial");
    print("Estoy utilizando funciones");

imprimir_mensaje();
imprimir_mensaje();

def conversacion(mensaje):
    print("Hola");
    print("Como estás");
    print(mensaje);
    print("Adios")

opcion = int(input("Elije una opción (1, 2, 3): "));

if opcion == 1:
    conversacion("Elegiste la opción 1");
elif opcion == 2:
    conversacion("Elegiste la opción 2");
elif opcion == 3:
    conversacion("Elegiste la opción 3");
else: print("Elegiste una opción invalida");

def suma(a, b):
    print("Se suman dos números");
    resultado = a + b;
    return resultado; #Con esto podremos obtener lo que nos da la variable resultado

sumatoria = suma(1, 4);
print(sumatoria);
