menu = """
Bienvenido al conversor de monedas 💰

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexicanos

Elige una opción: """;

opcion = int(input(menu));

if opcion == 1:
    pesos = input("¿Cuantos pesos mexicanos tienes?: ");
    pesos = float(pesos); #Convierte nuestra variable a decimal 
    valor_dolar = 4930;
    dolares = pesos / valor_dolar;
    dolares = round(dolares, 2); #Se limita los decimales que se muestran 
    dolares = str(dolares);

    print("Tienes $" + dolares + "dolares");
elif opcion == 2:
    pesos = input("¿Cuantos pesos mexicanos tienes?: ");
    pesos = float(pesos); #Convierte nuestra variable a decimal 
    valor_dolar = 178;
    dolares = pesos / valor_dolar;
    dolares = round(dolares, 2); #Se limita los decimales que se muestran 
    dolares = str(dolares);

    print("Tienes $" + dolares + "dolares");
elif opcion == 3:
    pesos = input("¿Cuantos pesos mexicanos tienes?: ");
    pesos = float(pesos); #Convierte nuestra variable a decimal 
    valor_dolar = 20;
    dolares = pesos / valor_dolar;
    dolares = round(dolares, 2); #Se limita los decimales que se muestran 
    dolares = str(dolares);

    print("Tienes $" + dolares + "dolares");
else:
    print("Opción invalida");
