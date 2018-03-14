function msg(){
	alert("Enter the empty Fields");
}

function shopOnFlipkart() {
   var x = document.getElementById("shop");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function colorChangeRed(){
	if(document.getElementById("demo").style.backgroundColor == "red")
	{
		document.getElementById("demo").style.backgroundColor = "white";
	}else{
		document.getElementById("demo").style.backgroundColor = "red";
	}
}

function colorChangeBlue(){
	if(document.getElementById("test").style.backgroundColor == "blue")
	{
		document.getElementById("test").style.backgroundColor = "white";
	}else{
		document.getElementById("test").style.backgroundColor = "blue";
	}
}

function colorChangeGreen(){
	if(document.getElementById("qwinix").style.backgroundColor == "green")
	{
		document.getElementById("qwinix").style.backgroundColor = "white";
	}else{
		document.getElementById("qwinix").style.backgroundColor = "green";
	}
}



