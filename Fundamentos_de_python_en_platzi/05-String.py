name = "Ramon";
last_name = "Aguirre";

print(name);
print(last_name);

full_name = name + " " + last_name;

print(full_name);

quote = "I'm " + name;

print(quote);

quote_2 = 'She said "Hello"';
print(quote_2);

#Format 
template = "Hello, my name is " + name + " and my last name is " + last_name;
print(template);
template = "Hello, my name is {} and my last name is {}".format(name, last_name);
print("v2: ", template);

age = 20;
template = f"Hello, my name is {name} {last_name} and I'm {age} years old";
print("v3: ", template);
