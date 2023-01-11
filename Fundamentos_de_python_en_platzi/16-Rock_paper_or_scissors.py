import random;

user_option = input("Rock, paper or scissors: ");
user_option = user_option.capitalize();
user_option = user_option.strip();
options = ["Rock", "Paper", "Scissors"];
computer_option = random.choice(options);
print(f"The computer chose {computer_option}");

if user_option == computer_option:
    print("It's a tie");
elif user_option == "Rock":
    if computer_option == "Scissors":
        print("Rock wins to scissors");
        print("You wins ;)");
    else:
        print("Paper wins to rock");
        print("You lose :(");
elif user_option == "Paper":
    if computer_option == "Rock":
        print("Paper wins to rock");
        print("You wins ;)");
    else:
        print("Scissors wins to Paper");
        print("You lose :(");
elif user_option == "Scissors":
    if computer_option == "Paper":
        print("Scissors wins to paper");
        print("You wins ;)");
    else:
        print("Rock wins to scissors");
        print("You lose :(");