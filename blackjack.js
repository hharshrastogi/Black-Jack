// == is less strict => age(100) == "100" will be true but age(100) === "100" will be false

//let sumEl = document.querySelector("#sum-el")

//array can have multiple data types in it 

//for (let count = 1; count < 11; count++)

//Math.random() generates a random number between 0 and 1(not including 1)
//Math.floor() returns the nearest smallest integer

//Object : key-value pairs object_name.key_name or object_name["key_name"]


let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let msg = ""
let player = {}
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

player.name = "Harsh"
player.chips = "$100"

playerEl.textContent = player.name + ": " + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber>10)
        return 10
    else if(randomNumber === 1)
        return 11
    else 
        return randomNumber
}

function startGame(){
    if(isAlive === false){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    }
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++)
        cardsEl.textContent += cards[i] + " "


    sumEl.textContent = "Sum " + sum

    if (sum <= 20)
        msg = "Do you want to draw a new card?"
    else if (sum === 21){
        msg = "Wohoo! You've got a Blackjack!"
        hasBlackJack = true
    }
    else{
        msg = "You are out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = msg
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let newcard = getRandomCard()
    cards.push(newcard)
    sum += newcard
    renderGame()
    }
}