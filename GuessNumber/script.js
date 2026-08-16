'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20 ; 
let highscore = 0 ;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);

//** --  when there is no input -- ** 
    if(!guess){
        displayMessage (' ⛔ No number!')

//** --  when player wins -- ** 

    } else if(guess===secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor = 'rgb(207, 106, 135)'
        highscore ++ ; 
        document.querySelector('.Highscore > span').textContent = highscore;

//** --  when guess is wrong -- **   

    } else if (guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!' );
            score -- ; 
            document.querySelector('.score > span').textContent = score;

        }else{
            displayMessage(' 💥You lost the game!');
            document.querySelector('.score > span').textContent = 0;
        }
    }
})

//** -- button Again and reset the Game -- **

document.querySelector('.again').addEventListener ('click' , function (){
    score=20;
    secretNumber= Math.trunc(Math.random() * 20 )+1;
    displayMessage('Start guessing...');
    document.querySelector('.score > span').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';

})

//------ modal-----

const modal = document.querySelector('.Modaal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector ('.close-modal');
const btnsOpenModal = document.querySelector ('.show-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key ==="Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
})
