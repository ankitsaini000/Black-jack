let player = {
  name: "Ankit",
  chips: 2000
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";




let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;



let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#card-el");



function getRandomCard() {

  let rendomNumber = Math.floor(Math.random() * 13) + 1;
  if (rendomNumber === 1) {
    return 11;
  }
  else if (rendomNumber > 10) {
    return 10;
  }
  else {
    return rendomNumber
  }





}



function renderGame() {

  cardsEl.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
    console.log(cards);
  }




  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
  }
  else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  }
  else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  // cardsEl.textContent = "cards : " + cards[0] + " " + cards[1];

}

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;



  renderGame();
}


function newCard() {
  console.log("Drawing a new card from the deck!");

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }



}


// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]


// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);

// console.log(experience.length);


// let yourself = ["Ankit saini",
//   20,
//   true
// ];

// console.log("name : ",yourself[0], "age : ", yourself[1], "Like pizza : ", yourself[2])


// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "I love you baby",
//   "I miss you sona",
//   "I love you too",
//   "hi baby",
// ]

// let newMessage = "Same here!";

// messages.push(newMessage);
// console.log(messages);

// for (let i = 0; i < messages.length; i++) {
//   console.log(messages[i]);
// }

// let cards = [7, 4, 6, 3, 1, 2];
// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }


// let sentence = ["Hello", "My", "Name", "is", "Ankit", "Saini"];

// let printEl = document.getElementById("print-el");

// for (let i = 0; i < sentence.length; i++) {
//   printEl.textContent += sentence[i] + " ";
// }





////////loop

// for (let count = 1; count < 11; count++) {
//   console.log(count);
// }

// for (let count = 10; count < 21; count++) {
//   console.log(count);
// }

// for (let i = 10; i <= 100; i += 10) {
//   console.log(i);
// }