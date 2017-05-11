//Define ok users and passwords and organize into an array
var user1 = {
	un: "un1",
	pw: "pw1",
}

var user2 = {
	un: "un2",
	pw: "pw2",
}

var user3 = {
	un: "un3",
	pw: "pw3",
}

var userArray = [user1, user2, user3];

//When the enter button is clicked, call the fucntion to grab the id and pw entered
//and check user authentication
document.getElementById('enter').onclick = function (){authenticate()};

//Autheticate user function
function authenticate(){

	var un = document.getElementById('un').value;
	var pw = document.getElementById('pw').value;

//check the stored usernames and passwords against the known
//if there's a match let them in
//if you get to the end of the array of known users
//i will have incremented all the way to the array's length (less 1)
//this tells you there was no match so let the user know
	for(i=0; i<userArray.length; i++){
		if ((un == userArray[i].un) && (pw == userArray[i].pw)){
			alert("You're in!")
			break;
		}
		if(i==userArray.length-1){
			alert("No match found")
		}
	}
};



