document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name:'mandril1',
            img: 'images/juego/mandril1.png'
        },
        {
            name:'mandril1',
            img: 'images/juego/mandril1.png'
        },
        {
            name:'mandril2',
            img: 'images/juego/mandril2.png'
        },
        {
            name:'mandril2',
            img: 'images/juego/mandril2.png'
        },
        {
            name:'mandril3',
            img: 'images/juego/mandril3.png'
        },
        {
            name:'mandril3',
            img: 'images/juego/mandril3.png'
        },
        {
            name:'mandril4',
            img: 'images/juego/mandril4.png'
        },
        {
            name:'mandril4',
            img: 'images/juego/mandril4.png'
        },
        {
            name:'mandril5',
            img: 'images/juego/mandril5.png'
        },
        {
            name:'mandril5',
            img: 'images/juego/mandril5.png'
        },
        {
            name:'mandril6',
            img: 'images/juego/mandril6.png'
        },
        {
            name:'mandril6',
            img: 'images/juego/mandril6.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/juego/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert ('You found a match')
            cards[optionOneId].setAttribute('src', 'images/juego/white.png')
            cards[optionTwoId].setAttribute('src', 'images/juego/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/juego/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/juego/blank.png')
            alert ('Sorry, Try Again =(')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You Found them All!!'
        }
    }


    //flip your card

    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()


})