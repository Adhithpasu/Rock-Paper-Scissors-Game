let scoreEl = document.getElementById("score-el")
let startEl = document.getElementById("startBtn")
let playerMessageEl = document.getElementById("playerMessage-el")
let compScoreEl = document.getElementById("comp-score-el")
let score = 0
let computers_option = ""
let players_turn = ""
let computers_score = 0
let computers_choice = -1
let players_choice = -1
let gameStarted = false
function roundWinner(){
    if ((computers_choice == 0 && players_choice == 1) || (computers_choice == 1 && players_choice == 2) || (computers_choice == 2 && players_choice == 0)){
        increasePlayerScore()
        playerMessageEl.textContent = "Game details: " + "You chose " + players_turn + ". The computer choosed " + computers_option + ". You won this round! You get a point!"
    }
    else if ((computers_choice == 1 && players_choice == 0) || (computers_choice == 2 && players_choice == 1) || (computers_choice == 0 && players_choice == 2)){
        increaseComputerScore()
        playerMessageEl.textContent = "Game details: " + "You chose " + players_turn + ". The computer choosed " + computers_option + ". You lost this round! The computer gets a point!"
    }
    else{
        playerMessageEl.textContent = "Game details: " + "You chose " + players_turn + ". The computer choosed " + computers_option + ". Tied! Both you and the computer choose the same option!"
    }
}
function start(){
    score = 0
    computers_score = 0
    compScoreEl.textContent = "Computers Score: " + 0
    scoreEl.textContent = "Player's Score: " + 0
    gameStarted = true
    playerMessageEl.textContent = "Game details: Game has started you may select Rock, Paper or scissors"
    startEl.textContent = "Rest Game"
}
function computers_turn(){
    computers_choice = Math.floor(Math.random() * 3)
    if (computers_choice == 0){
        computers_option = "Rock"
    }
    else if (computers_choice == 0){
        computers_option = "Paper"
    }
    else{
        computers_option = "Scissors"
    }
    roundWinner()
}
function rockChoice(){
    if (gameStarted){
        players_choice = 0
        players_turn = "Rock"
        computers_turn()
    }
}
function paperChoice(){
    if (gameStarted){
        players_choice = 1
        players_turn = "Paper"
        computers_turn()
    }
}
function scissorsChoice(){
    if (gameStarted){
        players_choice = 2
        players_turn = "Scissors"
        computers_turn()
    }
}
function increasePlayerScore(){
    score += 1
    scoreEl.textContent = "Player's Score: " + score
}
function increaseComputerScore(){
    computers_score += 1
    compScoreEl.textContent = "Computers Score: " + computers_score
}
