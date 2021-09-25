var randomnumber1= Math.floor(Math.random()*6)+1;
var randomnumber2= Math.floor(Math.random()*6)+1;

var Imagesource1 = "Images/dice"+randomnumber1+".png";
var Imagesource2 = "Images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",Imagesource1);
document.querySelectorAll("img")[1].setAttribute("src",Imagesource2);


if(randomnumber1>randomnumber2){
	document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(randomnumber2>randomnumber1){
	document.querySelector("h1").innerHTML="Player 2 wins";
}else{
	document.querySelector("h1").innerHTML="Draw";
}