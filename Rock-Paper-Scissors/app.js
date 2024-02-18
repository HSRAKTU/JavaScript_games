const computerChoiceDisplay = document.getElementById('computer-choice')

const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')


const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);

    switch (randomNumber) {
        case 0:
            computerChoice = 'rock'
            break;
        case 1:
            computerChoice = 'paper'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
        default:
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    let result
    if(computerChoice === userChoice){
       
        result = 'Its a draw!'
    }
    if(computerChoice ==='scissors' && userChoice ==='rock'){
        result = 'You win!!'
    }
    if(computerChoice ==='rock' && userChoice ==='paper'){
        result = 'You win!!'
    }
    if(computerChoice ==='paper' && userChoice ==='scissors'){
        result = 'You win!!'
    }

    if(computerChoice ==='rock' && userChoice ==='scissors'){
        result = 'You lose!!'
    }
    if(computerChoice ==='paper' && userChoice ==='rock'){
        result = 'You lose!!'
    }
    if(computerChoice ==='scissors' && userChoice ==='paper'){
        result = 'You lose!!'
    }
    

    resultDisplay.innerHTML = result
    
}