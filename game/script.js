'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
console.log(number);

document.querySelector('.check').addEventListener('click', function(){
	const guess = Number (document.querySelector('.guess').value);
	console.log(typeof guess);


	if(!guess){
		document.querySelector('.message').textContent = 'no number!';
	}else if (guess === number){
		document.querySelector('.message').textContent = 'Correct';
	}else if(guess > number){
		document.querySelector('.message').textContent = 'Number is too high';
	}else if(guess < number){
		document.querySelector('.message').textContent = 'Number is too low';
	}

})
