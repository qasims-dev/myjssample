var start = new Date().getTime();

function getRandcolor()
{
var letters = '0123456789ABCDEF'.split('');
var color = "#";

for(var i=0;i<6;i++)
{

	color+= letters[Math.floor(Math.random()*16)]
}

return color;

}

function reappear()
{
var left = Math.random()*400;
var top = Math.random()*400;
var width = (Math.random()*200)+100;
var height = Math.random()*400;

var ti = Math.random();
if(ti > 0.5)
{
document.getElementById("shape").style.borderRadius = "50%";

}
else
{
document.getElementById("shape").style.borderRadius = "0%";

}

document.getElementById("timerand").innerHTML = ti;
document.getElementById("shape").style.backgroundColor = getRandcolor();
document.getElementById("shape").style.width = width+"px";
document.getElementById("shape").style.height = width+"px";
document.getElementById("shape").style.left = left+"px";
document.getElementById("shape").style.top = top+"px";


document.getElementById("shape").style.display = "block";
start = new Date().getTime();

}

function appearafter()
{
setTimeout(reappear,Math.random()*2000);

}
appearafter();
document.getElementById("shape").onclick = function(){

	document.getElementById("shape").style.display = "none";
	var newT = new Date().getTime();

	var timeTaken = (newT - start)/1000;
	document.getElementById("timetaken").innerHTML = timeTaken;
	
	appearafter();
}
