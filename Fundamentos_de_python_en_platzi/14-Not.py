print(not True);
print(not False);

# and
print("NOT AND");
print("not True or True =>", not True or True);
print("not False or True =>", not False or True);
print("not True or False =>", not True or False);
print("not False or False =>", not False or False);

stock = input("Input the number of the stock ");
stock = int(stock);

print(not stock >= 100 and stock <= 1000);