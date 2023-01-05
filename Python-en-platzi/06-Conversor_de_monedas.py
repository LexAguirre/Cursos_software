pesos = input("¿Cuantos pesos mexicanos tienes?: ");
pesos = float(pesos); #Convierte nuestra variable a decimal 
valor_dolar = 20;
dolares = pesos / valor_dolar;
dolares = round(dolares, 2); #Se limita los decimales que se muestran 
dolares = str(dolares);

print("Tienes $" + dolares + "dolares");

"""
Invertir el funcionamiento del codigo por lo que se hace un conversor de dolar a peso 
"""
dolar = input("¿Cuantos dolares tienes?: ");
dolar = float(dolar); #Convierte nuestra variable a decimal 
valor_peso = 20;
pesos = dolar * valor_peso;
pesos = round(pesos, 2); #Se limita los decimales que se muestran 
pesos = str(pesos);

print("Tienes $" + pesos + " pesos");