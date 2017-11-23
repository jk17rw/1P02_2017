

var noun = new Array();
nounArray = ["cup", "food", "cat", "girl", "gem"];

var adjective = new Array();
adjectArray = ["pretty", "fancy", "cute", "tasty", "yummy"];

function getWhat(){
var nounNum =  Math.round(Math.random()*4);
var adjectNum =  Math.round(Math.random()*4);


document.getElementById('output').innerHTML="what a" + " " +adjectArray[adjectNum] + " "+nounArray[nounNum] +"!";

}
