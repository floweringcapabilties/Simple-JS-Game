'use strict';


const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
let score = 3;


document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);

	if(!guess){
		document.querySelector('.message').textContent = 'no number!';
	}else if (guess === number){
		document.querySelector('.message').textContent = 'Correct';
	}else if(guess > number){
		if(score > 1){
			document.querySelector('.message').textContent = 'Number is too high';
			score --;
			document.querySelector('.score').textContent = score;
		}else{
			score --;
			document.querySelector('.score').textContent = score;
			document.querySelector('.message').textContent = 'You Lose';
		}
	
	}else if(guess < number){
		if(score > 1){
			document.querySelector('.message').textContent = 'Number is too high';
			score --;
			document.querySelector('.score').textContent = score;
		}else{
			score --;
			document.querySelector('.score').textContent = score;
			document.querySelector('.message').textContent = 'You Lose';
		}
	}

})
