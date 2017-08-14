alert("Welcome to the ANGRY BIRD game with different features!");

var weapon = prompt('Select a weapon to kill the ANGRY BIRD: a rubber chicken, a axe, a boomrang');
alert("You are ready to kill with " + weapon + ".");

var randomNumber = Math.round(Math.random());

if(randomNumber === 0){
    alert("You lost. Never give up until you win. Try again!!");
}else if(randomNumber === 1){
    alert("You killed the ANGRY BIRD with your" + weapon + " weapon. You win!!");
}