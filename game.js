function getComputerChoice() {
    return (Math.random() < 0.5) ? 1 : 2;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection + computerSelection) % 2 == 0) {
        return "Evens win!";
    } else {
        return "Odds win!";
    }
}

function playGame() {
    alert("Pick odds or evens.")
    for(let i = 0; i < 5; i += 1){
        player = prompt("Input 1 or 2 (fingers)");
        result = playRound(player, getComputerChoice());
        console.log(result);
    }
}

playGame();