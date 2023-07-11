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


function getComputerChoice() {
    return (Math.random() < 0.5) ? 1 : 2;
}

function playRound(e) {
    
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
}

oddButton.addEventListener('click', pickTeam);
evenButton.addEventListener('click', pickTeam);
