set_countries = {"col", "mex", "bol"}; 

size = len(set_countries);
print(size);

print("col" in set_countries);
print("pe" in set_countries);

#add
set_countries.add("pe");
print(set_countries);
set_countries.add("pe");
print(set_countries);

# update 
set_countries.update({"ar", "ecua", "pe"}); #Añade cualquier tipo de objeto 
print(set_countries);

#remove
set_countries.remove("col");
print(set_countries);

set_countries.remove("ar"); # Elimina pero si no encuentra el elemento entonces regresa un error
set_countries.discard("arg"); # Elimina pero si no encuentra el elemento entonces no regresa un error
print(set_countries);
set_countries.add("arg");
print(set_countries);
set_countries.clear(); #Vacia el set
print(set_countries);
print(len(set_countries));