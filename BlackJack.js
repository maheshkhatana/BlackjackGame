let player ={
    name:"per",
    Ruppes:"100"
}

let isalive = false
let hasblackjack = false

let playerEl = document.getElementById("player-el")
let praEl = document.getElementById("pra-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let card =[]
let sum
let message 

playerEl.innerText = player.name + " : $"+ player.Ruppes

function startGame(){
     isalive = true;
    let firstCard = randomCard()
    let secondCard = randomCard()
    card = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function randomCard(){
     let randomNumber = (Math.floor(Math.random()*13))+1
     if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " "
    }
    sumEl.innerText = "Sum:" + sum
    if(sum==21){
        let message = "You're a BlackJack" 
        praEl.innerText = message
        hasblackjack = false
    }
    else if(sum<=20){
        let message = "you want a new card?"
        praEl.innerText = message
    }
    else{
        let message = "ohh! sorry,you're out of game "
        praEl.innerText = message
        isalive = false
    }
}

function newCard(){
    if(isalive ==true && hasblackjack == false){
       let cards =  randomCard()
       card.push(cards)
        sum += cards
        renderGame()
    }    
}       
