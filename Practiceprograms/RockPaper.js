//29.Make a two-player Rock-Paper-Scissors game. 
// (Hint: Ask for player plays (using input), 
// compare them, print out a message of congratulations to the winner, and ask if the players want to start a new game)
//this method is input as string
//
function rockpaperScissors(p1, p2) {
    var message = "";
    if (p1 == p2) {
        console.log("it's a tie");
    }
    else if ((p1 == "rock" && p2 == "scissors") ||
        (p1 == "scissors" && p2 == "paper") ||
        (p1 == "paper" && p2 == "rock")) {
        console.log("congratulation player1 is the winner");
    }
    else {
        console.log("congratulation player2 is the winner");
    }
}
rockpaperScissors("rock", "scissors");
rockpaperScissors("scissors", "rock");
rockpaperScissors("rock", "rock");
