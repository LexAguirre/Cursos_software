import random;

def run():

    def choose_options():
        options = ("Rock", "Paper", "Scissors");
        user_option = input("Rock, paper or scissors: ");
        user_option = user_option.capitalize();
        user_option = user_option.strip();

        if not user_option in options:
            print("That option is not available");
            #continue;
            return None, None;

        computer_option = random.choice(options);
        print(f"The computer chose {computer_option}");
        return user_option, computer_option;

    def check_rules(user_option, computer_option, user_wins, computer_wins):
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
        return user_wins, computer_wins;

    def check_winner(user_wins, computer_wins):
        if computer_wins == 2:
            print("The winner is the computer");
            return "finish";
        elif user_wins == 2:
            print("The winner is the user");
            return "finish";

    def run_game():
        rounds = 1;
        computer_wins = 0;
        user_wins = 0;

        while True:

            print("*" * 10);
            print("ROUND", rounds)
            print("*" * 10);

            print("Computer_wins", computer_wins);
            print("User_wins", user_wins);
            rounds += 1;

            user_option, computer_option = choose_options();
            user_wins, computer_wins = check_rules(user_option, computer_option, user_wins, computer_wins);
            if check_winner(user_wins, computer_wins) == "finish":
                break;

    run_game();   
            
    
if __name__ == "__main__":
    run();