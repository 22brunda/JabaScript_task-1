document.getElementById("formhide").style.display="none";
function showform(){
	var Email=document.getElementById("Email").value
	var Firstname = document.getElementById("Firstname").value;
	var Lastname = document.getElementById("Lastname").value;
	var Address=document.getElementById("Address").value
	 if( Email == "" || Firstname == "" || Lastname == "" || Address == "" ) {
	 	alert("Enter the empty Fields");
	 } else {
	 	document.getElementById("mail").innerHTML=Email;
		document.getElementById("fn").innerHTML=Firstname;
		document.getElementById("ln").innerHTML=Lastname;
		document.getElementById("addr").innerHTML=Address;
		document.getElementById("formhide").style.display="block";
		document.getElementById("showform").style.display="none";
	 }
	
}

function shopOnFlipkart() {
   var x = document.getElementById("shop");
    if (x.style.display === "none") {
        x.style.diksplay = "block";
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



