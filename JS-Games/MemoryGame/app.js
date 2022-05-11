cardArray = [
    {
        name : 'fries',
    },
    {
        name : 'cheeseburger',
    },
    {
        name : 'hotdog',
    },
    {
        name : 'pizza',
    },
    {
        name : 'ice-cream',
    },
    {
        name : 'milkshake',
    },
    {
        name : 'fries',
    },
    {
        name : 'cheeseburger',
    },
    {
        name : 'hotdog',
    },
    {
        name : 'pizza',
    },
    {
        name : 'ice-cream',
    },
    {
        name : 'milkshake',
    }
]

cardArray.sort(() =>  0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
let score = document.querySelector('.score').innerHTML;
let cardChosen = [];
let cardChosenId = [];
let cardsWon =[];

function createBoard () {
    for(i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);

    }
}

createBoard()

function checkMatch() {
    let cards = document.querySelectorAll('#grid img')
    if(cardChosenId[0] == cardChosenId[1]) {
        cards[cardChosenId[0]].setAttribute('src', 'images/blank.png');
        cards[cardChosenId[1]].setAttribute('src', 'images/blank.png');
    }
    else if(cardChosen[0] == cardChosen[1]){
        console.log('found a match');
        cards[cardChosenId[0]].setAttribute('src', 'images/white.png');
        cards[cardChosenId[1]].setAttribute('src', 'images/white.png');
        cards[cardChosenId[0]].removeEventListener('click', flipCard);
        cards[cardChosenId[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
        score = cardChosen.length;
    }
    else {
        cards[cardChosenId[0]].setAttribute('src', 'images/blank.png');
        cards[cardChosenId[1]].setAttribute('src', 'images/blank.png');
    }
    cardChosen = [];
    cardChosenId = [];

    if(cardChosen.length === (cardArray.length)/2){
        alert("You Won!!");
    }

}

function flipCard(clicked) {
    let cardId = clicked.target.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardChosen, cardChosenId);
    clicked.target.setAttribute('src', 'images/'+cardArray[cardId].name + '.png');
    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}