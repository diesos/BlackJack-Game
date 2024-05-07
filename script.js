let player = {
	name: "Player",
	chips: 200,
	earnChips: function () {
		this.chips += 50
	},
	loseChips: function () {
		this.chips -= 50
	}
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
	let i = Math.floor(Math.random() * 13) + 1;
	if (i > 10)
		i = 10;
	else if (i === 1)
		i = 11;
	return i;
}

function startGame() {
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "Sum: " + sum
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
		isAlive = true
	} else if (sum === 21) {
		message = "You've got Blackjack!"
		hasBlackJack = true
		isAlive = false
		player.earnChips()
		playerEl.textContent = player.name + ": $" + player.chips
	} else {
		message = "You're out of the game!"
		isAlive = false
		player.loseChips()
		playerEl.textContent = player.name + ": $" + player.chips

	}
	if (player.chips < 0)
		playerEl.textContent = player.name + ": $" + player.chips + "<- Be careful, you're in debt lol"
	messageEl.textContent = message
	if (player.chips < -150)
		playerEl.textContent = player.name + ": $" + player.chips + "<- OMFG stop ! you'll get some serious problems..."
	messageEl.textContent = message
}


function newCard() {
	if (isAlive === true) {
		let card = getRandomCard()
		sum += card
		cards.push(card)
		renderGame()
	}
}
