// all variable creations begin with var
var today = new Date(); // create new date object
var hourNow = today.getHours(); // get the hours of new object - method call
var greeting;

if (hourNow > 20) {
    greeting = "Good Evening";
}   else if (hourNow > 12) {
    greeting = "Good Afternoon";
}   else if (hourNow > 0) {
    greeting = "Good Morning";
}   else {
    greeting = "Welcome"
}

document.write("<h4>" + greeting + "</h4>");

// Arrays
// values in array can be mixed
// declare as variable
var house = [   // square brackets
    'Bungalow', // values are comma delimited
    'Modern',
    'Cottage',
    'Castle'
]   // does not end with sem-colon

// get the element by id
var elHouse = document.getElementById('house-types');
// set the value of the element to the variable
elHouse.textContent = house;

var elHouseBungalow = document.getElementById('bungalow');
elHouseBungalow.textContent = house[0];
