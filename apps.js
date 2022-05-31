    //card options
const cardArray = [
    {
        name : 'Rantanplan',
        img : 'assets/chien1.jpg'
    },
    {
        name : 'Rantanplan',
        img : 'assets/chien1.jpg'
    },
    {
        name : 'Milou',
        img : 'assets/chien2.jpg'
    },
    {
        name : 'Milou',
        img : 'assets/chien2.jpg'
    },
    {
        name : 'Marduk',
        img : 'assets/chien3.jpg'
    },
    {
        name : 'Marduk',
        img : 'assets/chien3.jpg'
    },
    {
        name : 'Jules',
        img : 'assets/chien4.jpg'
    },
    {
        name : 'Jules',
        img : 'assets/chien4.jpg'
    },
    {
        name : 'Lassie',
        img : 'assets/chien5.jpg'
    },
    {
        name : 'Lassie',
        img : 'assets/chien5.jpg'
    },
    {
        name : 'Rex',
        img : 'assets/chien6.jpg'
    },
    {
        name : 'Rex',
        img : 'assets/chien6.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
let cardWon = []

//create the board
function createBoard() {
    for (let i = 0; i < cardArray .length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'assets/dos-carte.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }   
}
//check for matches
function checkForMatch(){
    const card = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]){
        alert('You found a match!')
        card[optionOneId].setAttribute('src', 'assets/white.jpg')
        card[optionTwoId].setAttribute('src', 'assets/white.jpg')
        cardWon.push(cardChosen)
    }else {
        card [optionOneId].setAttribute('src','assets/dos-carte.jpg')
        card [optionTwoId].setAttribute('src','assets/dos-carte.jpg')
        alert('Sorry, try again!')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardWon.length
    if (cardWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulation! You found all the dogs!'
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
}


createBoard();