const heading = document.querySelector('.heading');
const buttons = document.querySelectorAll('.card-image');
const roundNo = document.querySelector('.Roundnumber');
const computerPointArea = document.querySelector('.computerpoint')
const humanPointArea = document.querySelector('.humanpoint')
const computerValueArea = document.querySelector('.computer-choice'); // New
const humanValueArea = document.querySelector('.human-choice'); // New
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');

let computerPoint = 0;
let humanPoint = 0;
let roundCount = 0;

function humanSelection(buttons, callback) {
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.target.getAttribute('data-value');
            callback(clickedButton);
        });
    });
}

const yourCallbackFunction = (clickedButton) => {
    const computerValue = getComputerChoice();
    
    playRound(computerValue, clickedButton);
    roundNo.innerHTML = roundCount;
};

function getComputerChoice() {
    let list = ['ROCK', 'PAPER', 'SCISSOR'];
    let chosen = Math.floor(Math.random() * 3);
    return list[chosen];
}

const humanselected = humanSelection(buttons, yourCallbackFunction);

function playRound(computerSelected, playerSelected) {
    let result = '';
    heading.innerHTML='';
    humanValueArea.textContent = playerSelected; // Update the displayed human choice
    computerValueArea.textContent = computerSelected; // Update the displayed computer choice

    if (computerSelected === playerSelected) {
        result = "It's a draw";
    } else if (
        (computerSelected === 'ROCK' && playerSelected === 'SCISSOR') ||
        (computerSelected === 'PAPER' && playerSelected === 'ROCK') ||
        (computerSelected === 'SCISSOR' && playerSelected === 'PAPER')
    ) {
        computerPoint++;
        computerPointArea.innerHTML = computerPoint;
    } else if (
        (playerSelected === 'ROCK' && computerSelected === 'SCISSOR') ||
        (playerSelected === 'PAPER' && computerSelected === 'ROCK') ||
        (playerSelected === 'SCISSOR' && computerSelected === 'PAPER')
    ) {
        humanPoint++;
        humanPointArea.innerHTML = humanPoint;
    }

    if (result === "It's a draw") {
        roundCount = roundCount;
    } else {
        roundCount++;
    }

    if (roundCount === 5) {
        if (humanPoint > computerPoint) {
            heading.innerHTML = "Human won";
        } else if (computerPoint > humanPoint) {
            heading.innerHTML = "Computer won";
        }
        humanPoint = 0;
        computerPoint = 0;
        roundCount = 0;
        humanPointArea.innerHTML = 0;
        computerPointArea.innerHTML = 0;
        humanValueArea.textContent = ''; // Clear the human choice
        computerValueArea.textContent = '';
    }
}
