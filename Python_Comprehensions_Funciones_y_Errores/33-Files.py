file = open("./33-text.txt")
# print(file.read()) # Lee todo el archivo
# print(file.readline()) # Lee linea por linea del archivo
# print(file.readline())
# print(file.readline())
# print(file.readline())

for line in file:
    print(line)  # El leer linea por linea permite no desperdiciar memoria

file.close()  # Cierra la lectura del archivo y asi libera memoria

# Este formato abre, lee y cierra el archivo por lo que es la mas profecional
with open("./33-text.txt") as file:
    for line in file:
        print(line)
