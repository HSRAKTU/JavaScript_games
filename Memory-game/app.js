const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = [];
const cardsWon = [];

function createBoard(){
    for (let i=0 ; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.setAttribute('class','card')
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    if(cardsChosen[0].id == cardsChosen[1].id){
        alert('you clicked the same image!!')
    }
    if(cardsChosen[0].name == cardsChosen[1].name){
        alert('You found a match')
        cards[cardsChosen[0].id].setAttribute('src','images/white.png')
        cards[cardsChosen[1].id].setAttribute('src','images/white.png')
        cards[cardsChosen[0].id].removeEventListener('click',flipCard)
        cards[cardsChosen[1].id].removeEventListener('click',flipCard)

        cardsWon.push(cardsChosen);
    }else{
        cards[cardsChosen[0].id].setAttribute('src','images/blank.png')
        cards[cardsChosen[1].id].setAttribute('src','images/blank.png')
    }
    cardsChosen = [];

    if(cardsWon.length == cardArray.length/2){
        const result = document.querySelector('span')
        result.innerHTML = 'You Won'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push({name: cardArray[cardId].name, id:cardId})
    console.log(cardsChosen)
    console.log('clicked', cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}