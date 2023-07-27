desicion = input("Por favor, ingresa si quieres realizar una suma, resta, multiplicacion o division:");
desicion.toLowerCase()

print(desicion)

if (desicion == "suma"):
    num1 = (input("Ingresa el primer numero a sumar")).toNumber()
    num2 = (input("Ingresa el primer numero a sumar")).toNumber()

    print(num1 + num2)
elif (desicion == "resta"):
    num1 = (input("Ingresa el primer numero a restar")).toNumber()
    num2 = (input("Ingresa el primer numero a restar")).toNumber()

    print(num1 - num2)
elif (desicion == "multiplicacion"):
    num1 = (input("Ingresa el primer numero a multiplicar")).toNumber()
    num2 = (input("Ingresa el primer numero a multiplicar")).toNumber()

    print(num1 * num2)
elif (desicion == "division"):
    num1 = (input("Ingresa el primer numero a dividir")).toNumber()
    num2 = (input("Ingresa el primer numero a dividir")).toNumber()

    print(num1 / num2)
else:
    print("Opcion invalida")