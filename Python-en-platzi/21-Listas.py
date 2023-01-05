numeros = [1, 3, 6, 8, 9, 45, 90];

print(numeros);

objetos = ["Hola", 3, 4.5, True];

print(objetos);
print(objetos[3]);
print(objetos[0]);

objetos.append(False);
objetos.append(1);

print(objetos);

objetos.pop(1);

for elemento in objetos:
    print(elemento);

print(objetos[::-1]);
print(objetos[1:3]);