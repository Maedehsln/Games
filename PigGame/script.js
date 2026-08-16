const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const curent1 = document.querySelector('#current--0');
const curent2 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btnnew');
const btnRoll = document.querySelector('.btnroll');
const btnHold = document.querySelector('.btnhold');
let scores , currentScore , activePlayer , playing;

const data= function(){
    scores=[0 ,0];
    currentScore=0;
    activePlayer=0;
    playing=true;

    score1.textContent=0
    score2.textContent=0
    curent1.textContent=0
    curent2.textContent=0

    dice.classList.add('hidden');
    player1.classList.remove('playerwinner');
    player2.classList.remove('playerwinner');
    player1.classList.add('playerActive');
    player2.classList.remove('playerActive');



}
data();

btnNew.addEventListener('click', data);

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
   activePlayer=activePlayer===0? 1 : 0;
    player1.classList.toggle('playerActive');
    player2.classList.toggle('playerActive');
}

btnRoll.addEventListener('click' , function(){
    if(playing){
        const diceNumber = Math.trunc(Math.random()*6)+1;
        console.log(diceNumber);
        dice.classList.remove('hidden');
        dice.src =`dice-${diceNumber}.png`;

    if (diceNumber !== 1){
        currentScore+=diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    } else {switchPlayer();}
    }
})

btnHold.addEventListener('click', function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if (scores[activePlayer] >=100){
        playing=false;
        dice.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add('playerwinner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('playerActive');

    } else {switchPlayer();}
    }
})
