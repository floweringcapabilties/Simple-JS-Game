'use strict';


const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
let score = 20;


document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);

	if(!guess){
		document.querySelector('.message').textContent = 'no number!';
	}else if (guess === number){
		document.querySelector('.message').textContent = 'Correct';
	}else if(guess > number){
		document.querySelector('.message').textContent = 'Number is too high';
		score --;
		document.querySelector('.score').textContent = score;
	}else if(guess < number){
		document.querySelector('.message').textContent = 'Number is too low';
		score --;
		document.querySelector('.score').textContent = score;
	}

})
