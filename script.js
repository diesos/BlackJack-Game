let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
	let i = Math.floor(Math.random() * 12)
	if (i === 0)
		i++;
	return i;
}

function startGame() {
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}

	sumEl.textContent = "Sum: " + sum
	if (sum <= 20) {
		message = "Do you want to draw a new card? 😜🤔"
	} else if (sum === 21) {
		message = "You've got Blackjack! 🤑💶✅"
		hasBlackJack = true
	} else {
		message = "You're out of the game! ❌"
		isAlive = false
	}
	messageEl.textContent = message
}


function newCard() {
	if (sum > 21)
		messageEl.textContent = "😀 You already lost ! Click 'New Game'"
	else {
		let card = getRandomCard()
		sum += card
		cards.push(card)
		console.log(cards)
		renderGame()
	}
}

function newGame() {
	firstCard = getRandomCard()
	secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	sumEl.textContent = "Sum: "
	cardsEl.textContent = "Cards: "
	renderGame();
}
