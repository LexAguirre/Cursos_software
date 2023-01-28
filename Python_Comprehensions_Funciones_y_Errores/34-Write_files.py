# Para otorgar permisos de escritura se coloca "w",  y para lectura y escritura se utiliza "r+" pero añade a lo que hay y con "w+" sobre escribe el contenido del archivo
with open("./34-Text.txt", "r+") as file:
    for line in file:
        print(line)
    file.write("Nuevas cosas en este archivo\n")
    file.write("Otra linea\n")
    file.write("Mas linea\n")
