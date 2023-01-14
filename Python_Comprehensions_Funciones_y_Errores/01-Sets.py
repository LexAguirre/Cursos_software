# import this # Es para ver la filosofia de python

"""
Un conjunto no puede tener archivos duplicados
"""
set_countries = {"col", "mex", "bol"}; 
print(set_countries);
print(type(set_countries));

set_numbers = {1, 2, 2, 443, 23};
print(set_numbers);

set_types = {1, "hola", False, 12.12};
print(set_types);

set_from_tuples = set(("abc", "cbv", "as", "abc")); #Convierte una tupla a un set para aplicar sus restriciones de negacion de valores repetidos 
print(set_from_tuples);

numbers = [1, 2, 3, 1, 2, 3, 4]; 
set_numbers = set(numbers); # Se aplica la restrición de un set
print(set_numbers);
unique_numbers = list(set_numbers); # Se regresa a una lista 
print(unique_numbers);
