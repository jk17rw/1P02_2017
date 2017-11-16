//The starting time
var start = new Date();
var startmilli = start.getTime();

function stopTime(){
//This time
  var end = new Date();
  var endmilli = end.getTime();

  var diffmilli = endmilli - startmilli;
  var diffsec = diffmilli/1000;

  alert("The number of seconds is:" + diffsec);
}
