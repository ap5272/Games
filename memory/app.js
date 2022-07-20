const cardArray =[
    {
        name: 'fire',
        img: 'images/fire.png'
    },

    {
        name: 'frost',
        img: 'images/frost.png'
    },

    {
        name: 'leaf',
        img: 'images/leaf.png'
    },

    {
        name: 'air',
        img: 'images/air.png'
    },

    {
        name: 'dark',
        img: 'images/dark.png'
    },

    {
        name: 'light',
        img: 'images/light.png'
    },

    {
        name: 'fire',
        img: 'images/fire.png'
    },

    {
        name: 'frost',
        img: 'images/frost.png'
    },

    {
        name: 'leaf',
        img: 'images/leaf.png'
    },

    {
        name: 'air',
        img: 'images/air.png'
    },

    {
        name: 'dark',
        img: 'images/dark.png'
    },

    {
        name: 'light',
        img: 'images/light.png'
    }
]



const resultDisplay = document.querySelector('#result')
const gridDisplay = document.querySelector('#grid')
const restartButton = document.querySelector('#restart')

let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []


cardArray.sort(() => 0.5 - Math.random())
restartButton.addEventListener('click', restart)

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)

        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()
//card.addEventListener('click', flipCard)


function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1] && optionOneId !== optionTwoId){
        alert('Match Found!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        //resultDisplay.innerHTML = 'You found all matches!!'
        cardsWon.push(cardsChosen)
    }

    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Try again!')
    }
    cardsChosen = []
    cardsChosenIds = []

    //console.log(cardsWon.length)
    resultDisplay.innerHTML = cardsWon.length

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'You found all matches!!'
    }
    
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

function restart(){
    //const gridDisplay = document.querySelector('#grid')
    cardsWon = []
    cardsChosen = []
    cardsChosenIds = []
    for (let i = 0; i < cardArray.length; i++){
        //const card = document.createElement('img')
        const cards = document.querySelectorAll('#grid img')
        
        cards[i].setAttribute('src', 'images/blank.png')
        cards[i].addEventListener('click', flipCard)
        //card.setAttribute('data-id', i)

        //card.addEventListener('click', flipCard)
        //gridDisplay.append(card)
    }
    cardArray.sort(() => 0.5 - Math.random())
}
