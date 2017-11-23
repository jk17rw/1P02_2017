//Make a new array for getColour
var colourArray = new Array();
colourArray = ["RED", "GREEN", "BLUE", "YELLOW"];
//The colour we're generating
var colour="";
function getColour(){

var colourNum =  Math.round(Math.random()*3);

colour=String(colourArray[colourNum]);

document.getElementById('output').innerHTML=colour;

setTimeout(function(){document.getElementById('output').innerHTML="";},1000);

}

function pushButton(userColour){
 if(colour == userColour){

document.getElementById('output').innerHTML="CORRECT!";
setTimeout(getColour(), 2000);
}
else{
  document.getElementById('output').innerHTML="GAME OVER!";
}

}
