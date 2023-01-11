text = "She knows how to program in Python";

"""
print("JavaScript" in text);
print("Python" in text);

if "JS" in text:
    print("You chose well ;)");
else:
    print("It's also a good choice");
"""

size = len("love    "); #Led ayuda a conocer la longitud del string
print(size);

print(text);
print(text.upper());
print(text.lower());
print(text.count("a"));
print(text.swapcase()); # Invierte las mayusculas y minusculas en el string
print(text.startswith("She ")); # Revisa si el string empieza con el contenido del parentesis
print(text.endswith(" and JavaScript")); # Revisa si el string termina con el contenido del parentesis
print(text.replace("Python", "Go"));

text_2 = "Este es un titulo";
print(text_2);
print(text_2.capitalize());
print(text_2.title()); #Pone en mayuscula cada palabra 
print(text_2.isdigit()); #Revisa si el texto es un digito aunque este en tipo string 
print("345".isdigit());