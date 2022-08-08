let cards = []
let sum = 0;

let hasBlackJack = false
let isAlive = false
let message =""
let messageEl=document.querySelector("#message-el")

let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let palyerEl=document.querySelector("#player-el")

function startGame(){
    let name=prompt("Enter your name","Player 1")
    let chips=parseInt(prompt("Enter your chips worth","10"))
    palyerEl.textContent = name + ":  $" + chips

    isAlive = true
   
}
function drawCard()
{
    let firstCard=getrandomCard()
    let secondCard=getrandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
        renderGame()

}


function getrandomCard(){
    let x = Math.floor(Math.random()*13)+1
   if(x > 10)
   { return 10
   }
   else if(x===1) {
    return 11

   }
   else{
    return x
   }
    }
function renderGame(){
    cardEl.textContent = "CARDS:  "
    for(let i=0; i<cards.length; i++)
    {
        cardEl.textContent += cards[i] +"   " 
    }
    sumEl.textContent = "SUM: " + sum; 

if (sum <= 20)
{
message = "Do you want to draw a new card";
}
else if(sum === 21)
{
    message = "Congratulations! You got BlackJack";
    hasBlackJack = true
    }
else{
    message = "You're out of game";
    isAlive = false
    }
   messageEl.textContent = message;
}
function newCard(){
    if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getrandomCard()
    cards.push(thirdCard) 
    sum = sum + thirdCard
    renderGame()
    }
    else{
        messageEl.textContent = "Game has already Ended!"
    }

}

function resetGame(){
    sumEl.textContent = "SUM:"
    cardEl.textContent = "CARDS:"
    messageEl.textContent = "Do you like to play another round:"
    sum = 0
    isAlive = true 
     hasBlackJack = false


    }
