var random1 = Math.floor(Math.random()*6 + 1);
var random2 = Math.floor(Math.random()*6 + 1);
let img=document.querySelectorAll('img');
if(random1==1)img[0].src="images/dice1.png";
else if(random1==1)img[0].src="images/dice1.png";
else if(random1==2)img[0].src="images/dice2.png";
else if(random1==3)img[0].src="images/dice3.png";
else if(random1==4)img[0].src="images/dice4.png";
else if(random1==5)img[0].src="images/dice5.png";
else img[0].src="images/dice6.png";

if(random2==1)img[1].src="images/dice1.png";
else if(random2==1)img[1].src="images/dice1.png";
else if(random2==2)img[1].src="images/dice2.png";
else if(random2==3)img[1].src="images/dice3.png";
else if(random2==4)img[1].src="images/dice4.png";
else if(random2==5)img[1].src="images/dice5.png";
else img[1].src="images/dice6.png";

let result=document.querySelector("h1");
if(random1>random2)result.textContent="Player 1 wins!";
else if(random2>random1)result.textContent="Player 2 wins!";
else result.textContent="--Draw--";