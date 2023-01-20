'use strict';


let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;


function getMessage(mssg){
	document.querySelector('.message').textContent = mssg;
}
function getScore(x){
	document.querySelector('.score').textContent = x;
}
function playAgain(){
	number = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	document.querySelector('.number').textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.guess').value = '';
	getMessage('Start guessing...');
	getScore(score);
}

document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);
	if(!guess){
		getMessage('no number!');
	}else if (guess === number){
		getMessage('Correct');
		document.querySelector('.number').textContent = number;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
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
		document.querySelector('.number').textContent = number;
		getMessage('You Lose');
	}

})

document.querySelector('.again').addEventListener('click', function(){
	playAgain();
})
