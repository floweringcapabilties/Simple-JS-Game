'use strict';


let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highScore = 0;
let numTxt = document.querySelector('.number');


function getMessage(mssg){
	document.querySelector('.message').textContent = mssg;
}
function getScore(x){
	document.querySelector('.score').textContent = x;
}
function playAgain(){
	number = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	numTxt.textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.guess').value = '';
	numTxt.style.width = '15rem';
	getMessage('Start guessing...');
	getScore(score);
}


document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);
	if(!guess){
		getMessage('no number!');
	}else if (guess === number){
		if(score > highScore){
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
		
		getMessage('Correct');
	
		numTxt.textContent = number;
		document.querySelector('body').style.backgroundColor = '#60b347';
		numTxt.style.width = '30rem';
	}
 
	if(guess > number && score >= 1){
		getMessage('Number is too high');
		score --;
		getScore(score);
	}else if(guess < number && score >= 1){
		getMessage('Number is too low');
		score --;
		getScore(score);
	}

	if(score == 0){
		numTxt.textContent = number;
		getMessage('You Lose');
	}

})

document.querySelector('.again').addEventListener('click', function(){
	playAgain();
})
