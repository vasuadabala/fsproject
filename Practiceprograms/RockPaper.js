function rockpaperScissors(p1, p2) {
    var message = "";
    if (p1 == p2) {
        message = "it's a tie";
        console.log(message);
    }
    else if ((p1 == "rock" && p2 == "scissors") ||
        (p1 == "scissors" && p2 == "paper") ||
        (p1 == "paper" && p2 == "rock")) {
        message = "comgratulation player1 is the winner";
        console.log(message);
    }
    else {
        message = "comgratulation player2 is the winner";
        console.log(message);
    }
}
rockpaperScissors("rock", "scissors");
rockpaperScissors("scissors", "rock");
rockpaperScissors("rock", "rock");
