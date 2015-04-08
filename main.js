// First prompt the user to ask how many disaster victims they wish to enter.
var victims = prompt("How many distaster victims are there?", "ex. 3");

var victimNames = [];
var victimPhones = [];
var victimStreets = [];

// For each disaster victim that will be added, prompt the user to enter their name, phone number, and street.
for(var i = 0; i < victims; i++) {
	var victimName = prompt("Victim #" + (i+1) + " name:");
	var victimPhone = prompt("Victim #" + (i+1) + " phone:");
	var victimStreet = prompt("Victim #" + (i+1) + " street:");

	// Add each newly entered user to three arrays, one for each piece of information.
	victimNames.push(victimName);
	victimPhones.push(victimPhone);
	victimStreets.push(victimStreet);
}

// Repeat steps 1 and 2, but this time you are asking for volunteers.
var volunteers = prompt("How many volunteers are there?", "ex. 3");

var volunteerNames = [];
var volunteerPhones = [];
var volunteerStreets = [];

for(var i = 0; i < volunteers; i++)
{
	var volunteerName = prompt("volunteer #" + (i+1) + " name:");
	var volunteerPhone = prompt("volunteer #" + (i+1) + " phone:");
	var volunteerStreet = prompt("volunteer #" + (i+1) + " street:");

	volunteerNames.push(volunteerName);
	volunteerPhones.push(volunteerPhone);
	volunteerStreets.push(volunteerStreet);
}


// At the end, print out, in a single alert, the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers.
var listVictims = "";
var listVolunteers = "";

for(var i = 0; i < victimNames.length; i++) {
	listVictims += victimNames[i] + " ";
}

for(var i = 0; i < volunteerNames.length; i++) {
	listVolunteers += volunteerNames[i] + " ";
}


alert(
	"# of victims: " + victims  
	+ "\n# of volunteers: " + volunteers
	+ "\nVictims: " + listVictims
	+ "\nVolunteers: " + listVolunteers
);













