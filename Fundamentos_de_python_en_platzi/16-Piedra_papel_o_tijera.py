user_option = input("Piedra, papel o tijera: ");
computer_option = "Piedra";

if user_option == computer_option:
    print("It's a tie");
elif user_option == "Piedra":
    if computer_option == "tijera":
        print()