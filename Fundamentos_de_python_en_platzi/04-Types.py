#Strings

my_name = "Ramón";
my_name = "Alex";
print("my_name", my_name);
print(type(my_name));

#int
my_age = 12
print("my_age =>", my_age);
print(type(my_age));

#boolean
is_single = False;
print("is_single =>", is_single);
print(type(is_single));

#inputs
my_age = input("¿Cual es tu edad?");
print("my_age =>", my_age);
print(type(my_age));


def calculate_tip(bill_amount, tipPercentage):
   return round(((bill_amount * tipPercentage)/100),2)

calculate_tip(100, 10);
calculate_tip(1524.33, 25);