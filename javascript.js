let playerChoice;
let cpuChoice;
let playerWon = 0;
let cpuWon = 0;
let pick = ["rock", "paper", "scissors"];
let whoWonRoundElement = document.getElementById("whoWonRoundElement");
let currentRoundElement = document.getElementById("currentRoundElement");
let whoChoseWhatElement = document.getElementById("whoChoseWhatElement");
let wonRoundsCounterElement = document.getElementById("wonRoundsCounterElement");
let startButtonElement = document.getElementById("startButtonElement");
let playerRock = document.getElementById("playerRock");
let playerPaper = document.getElementById("playerPaper");
let playerScissors = document.getElementById("playerScissors");
let currentRound = 0;
function roundStart(playerChoice) { /*Round start function where game gets processed*/
	cpuChoice = randomCpuChoice()
	whoChoseWhatElement.textContent = "Player chose: " + pick[playerChoice] + " " + "CPU chose: " + pick[cpuChoice];	
	if (playerChoice === cpuChoice){
		currentRound++;
        whoWonRoundElement.textContent = "It's a draw!"
	} else if (playerChoice === 0 && cpuChoice === 2) {
    	whoWonRoundElement.textContent = "Player won this round with: " + pick[playerChoice]
		playerWon ++;
		currentRound++;
	} else if (playerChoice === 2 && cpuChoice === 0){
        whoWonRoundElement.textContent = "CPU won this round with: " + pick[cpuChoice]
		cpuWon++;
		currentRound++;
	}
	else if (playerChoice > cpuChoice) {
    	whoWonRoundElement.textContent = "Player won this round with: " + pick[playerChoice]
		playerWon++;
		currentRound++;
	} else {
        whoWonRoundElement.textContent = "CPU won this round with: " + pick[cpuChoice]
		cpuWon++;
		currentRound++;
	}
	wonRoundsCounterElement.textContent = "Player: " + playerWon + " " + "CPU: " + cpuWon
	switch(playerWon){
		case 5:
            outcome.textContent = "Player Won!";
            startButtonElement.style.display = "block"; /*Unhides start button*/
            hideChoices(); /*Hides rock, p, s buttons*/ 
        break;
	}
	switch(cpuWon){
		case 5:
            outcome.textContent = "CPU Won!";
            startButtonElement.style.display = "block"; /*Unhides start button*/
            hideChoices(); /*Hides rock, p, s buttons*/ 
        break;
	}
	currentRoundElement.textContent = "Round: " + currentRound;
}
function randomCpuChoice(){ /*Generates random number from 0 to 2*/
	return cpuChoice = Math.floor(Math.random()*3);
}
function hideChoices(){   /*function that when called hides rock, p, s buttons*/
	playerRock.style.display = "none";
	playerPaper.style.display = "none";
	playerScissors.style.display = "none";
}
function startGame(){
	playerRock.style.display = "block";
	playerPaper.style.display = "block";
	playerScissors.style.display = "block"; /*(or flex if youre using flex)*/
	startButtonElement.style.display = "none";
	playerChoice = 0;
	cpuChoice = 0;
	playerWon = 0;
	cpuWon = 0;
	whoWonRoundElement.textContent = "";
	currentRoundElement.textContent = "";
	whoChoseWhatElement.textContent = "";
	wonRoundsCounterElement.textContent = "";
	outcome.textContent = "";
	currentRound = 0;
}