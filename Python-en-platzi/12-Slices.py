nombre = "Francisco";

print(nombre[0]);
print(nombre[1]);
print(nombre[0:3]); #Cortará desde el primer caracter hasta el anterior al cuarto
print(nombre[:3]); #Cortará desde el principio hasta el anterior al cuarto
print(nombre[3:]); #Cortará desde el cuarto caracter hasta el final
print(nombre[1:7]); #Cortará desde el segundo caracter hasta el anterior al octavo caracter
print(nombre[1:7:2]); #Cortará desde el segundo caracter hasta el anterior al octavo caracter pero con saltos de dos en dos 
print(nombre[::]); #Cortará desde el principio hasta el final con saltos por defaut de uno en uno
print(nombre[1::3]); #Cortará desde el segundo caracter hasta el final con saltos de tres en tres
print(nombre[::-1]); #Cortará desde el principio hasta el final con saltos del lado contrario por lo que sera del final al principio