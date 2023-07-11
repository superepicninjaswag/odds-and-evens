let playerTeam;
const ODD = 'odd';
const EVEN = 'even';
const ONE = 'one';
const TWO = 'two';

const oddButton = document.querySelector('#odd');
const evenButton = document.querySelector('#even');
const orText = document.querySelector('.choices span');

const oneButton = document.createElement('button');
oneButton.textContent = '☝️ One';
oneButton.id = 'one';

const twoButton = document.createElement('button');
twoButton.textContent = '✌️ Two';
twoButton.id = 'two';

const statusHeader = document.querySelector('h2');
const oddCounter = document.querySelector('#odd-counter');
const evenCounter = document.querySelector('#even-counter');


function getComputerChoice() {
    return (Math.random() < 0.5) ? 1 : 2;
}

function playRound(e) {
    let playerChoice = (e.target.id == ONE) ? 1 : 2;
    let computerChoice = getComputerChoice();
    
    let resultMessage = "";

    if (playerChoice == computerChoice) {
        resultMessage += "Evens win!";
        evenCounter.textContent = +evenCounter.textContent + 1;
    } else {
        resultMessage += "Odds win!";
        oddCounter.textContent = +oddCounter.textContent + 1;
    }

    resultMessage += ` (you: ${playerChoice}, computer: ${computerChoice})`;
    statusHeader.textContent = resultMessage;
}

function pickTeam(e) {
    if (e.target.id === ODD) {
        playerTeam = ODD;
    } else if (e.target.id === EVEN) {
        playerTeam = EVEN;
    }

    orText.remove();
    oddButton.remove();
    evenButton.remove();

    const choices = document.querySelector('.choices');
    choices.appendChild(oneButton);
    choices.appendChild(orText);
    choices.appendChild(twoButton);

    oneButton.addEventListener('click', playRound);
    twoButton.addEventListener('click', playRound);

    statusHeader.textContent = `You're on the ${playerTeam}s`;
}

oddButton.addEventListener('click', pickTeam);
evenButton.addEventListener('click', pickTeam);
