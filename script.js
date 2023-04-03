function getHex()
{
	

var letters = "0123456789ABCDEF";     // storing all letter and digit combinations // for html color code

var color = '#'; // html color code starts with #
	
	

for (var i = 0; i < 6; i++)// generating 6 times as HTML color code consist // of 6 letter or digits
             
	color += letters[(Math.floor(Math.random() * 16))];
	return color;
}

function changeColor()
{
	var hex = getHex();
	document.getElementById("hex").innerHTML = hex;
	document.getElementsByTagName("BODY")[0].style.backgroundColor = hex;
}