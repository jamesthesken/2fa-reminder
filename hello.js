// James Thesken 2019

// check the site title 
var site = location.hostname,
    title = document.title;

// we make an array which contains the posisble phrases 
var possibleTitles = ["Sign Up", "Registration", "Register"]

// iterate through our array and alert the user if they should enable 2FA
for (i=0; i<possibleTitles.length; i++){
	if(title.includes(possibleTitles[i])==true){
		console.log("This contains our target word");
		alert("Just a friendly reminder to enable 2FA");
	}
}

// debug prints
console.log(title)
console.log(site)