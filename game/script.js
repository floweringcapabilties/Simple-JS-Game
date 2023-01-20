'use strict';


const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
let score = 20;


function getMessage(mssg){
	document.querySelector('.message').textContent = mssg;
}
function getScore(x){
	document.querySelector('.score').textContent = x;
}

document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);

	if(!guess){
		getMessage('no number!');
	}else if (guess === number){
		getMessage('Correct');
		document.querySelector('body').style.backgroundColor = '#60b347';
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
		getMessage('You Lose');
	}

})
