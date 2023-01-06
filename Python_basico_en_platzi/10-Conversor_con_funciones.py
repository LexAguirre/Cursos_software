def conversor(tipo_pesos, valor_dolar):
    pesos = input("¿Cuantos pesos " + tipo_pesos + " tienes?: ");
    pesos = float(pesos); #Convierte nuestra variable a decimal 
    dolares = pesos / valor_dolar;
    dolares = round(dolares, 2); #Se limita los decimales que se muestran 
    dolares = str(dolares);

    print("Tienes $" + dolares + "dolares");

menu = """
Bienvenido al conversor de monedas 💰

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexicanos

Elige una opción: """;

opcion = int(input(menu));

if opcion == 1:
    conversor("colombianos", 3875);
elif opcion == 2:
    conversor("argentinos", 65);
elif opcion == 3:
    conversor("mexicanos", 24);
else:
    print("Opción invalida");