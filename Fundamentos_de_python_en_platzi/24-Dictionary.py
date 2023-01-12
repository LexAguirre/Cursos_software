my_dict = {};
print(type(my_dict));

my_dict = {
    "avion": "Bla bla bla",
    "name": "Ramon", 
    "last_name": "Aguirre",
    "age": 20,
};

print(my_dict);
print(len(my_dict));

print(my_dict["age"]);
print(my_dict["last_name"]);
print(my_dict.get("age"));

print("avion" in my_dict);
print("otroqueno" in my_dict);