#CRUD Create, Read, Update and Delete

number = [1, 2, 3, 4, 5, 6];
print(number[1]);
number[-1] = 10;
print(number);

number.append(700);
print(number);

number.insert(0, "hola");
print(number);

number.insert(3, "change");
print(number);

task = ["Todo 1", "Todo 2", "Todo 3"];
new_list = number + task;
print(new_list);

index = new_list.index("Todo 2");
new_list[index] = "todo change";
print(new_list);

new_list.pop();
print(new_list);

new_list.pop(0);
print(new_list);

new_list.reverse(); #invertira el orden del array / lista
print(new_list);

numbers_a = [1, 3, 5, 2, 1];
numbers_a.sort();
print(numbers_a);

strings = ["ef", "au", "ai", "bh"];
strings.sort();
print(strings);

