import random;

options = ("Rock", "Paper", "Scissors");

computer_wins = 0;
user_wins = 0;
rounds = 1;

while True:

    print("*" * 10);
    print("ROUND", rounds)
    print("*" * 10);

    print("Computer_wins", computer_wins);
    print("User_wins", user_wins);

    user_option = input("Rock, paper or scissors: ");
    user_option = user_option.capitalize();
    user_option = user_option.strip();

    if not user_option in options:
        print("That option is not available");
        continue;

    computer_option = random.choice(options);
    print(f"The computer chose {computer_option}");

    if user_option == computer_option:
        print("It's a tie");
    elif user_option == "Rock":
        if computer_option == "Scissors":
            user_wins += 1;
            print("Rock wins to scissors");
            print("You win ;)");
        else:
            computer_wins += 1;
            print("Paper wins to rock");
            print("You lose :(");
    elif user_option == "Paper":
        if computer_option == "Rock":
            user_wins += 1;
            print("Paper wins to rock");
            print("You win ;)");
        else:
            computer_wins += 1;
            print("Scissors wins to Paper");
            print("You lose :(");
    elif user_option == "Scissors":
        if computer_option == "Paper":
            user_wins += 1;
            print("Scissors wins to paper");
            print("You win ;)");
        else:
            computer_wins += 1;
            print("Rock wins to scissors");
            print("You lose :(");

    if computer_wins == 2:
        print("El ganador es la computadora");
        break;

    if user_wins == 2:
        print("El ganador es el usuario");
        break;

    rounds += 1;