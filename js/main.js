/* Accounting Formulas
 * ---
 * Overall Value
 * Total Assests = Liabilities + Equity
*/

// This is a variable
// all variables are declared with var
var title = 'Building Wealth'; // semi-colon ends the declaration

// store the element by id
var elTitle = document.getElementById('title');
elTitle.textContent = title; // set the value of the element

// the options for which forluma is chosen
// array constructor
var formula = new Array(
    'assests',
    'one-tenth',
    'debt-payment',
    'growth');

var elFormula = document.getElementById('asset-label');
elFormula.textContent = formula[0]; // get array by key (index)

// this is also an Array
// array literal
var newFormula = [ // square brackets
    'assets', // comma delimited
    'how to build wealth',
    'debt-payment',
    'growth',
    'create a money tree' // no comma on last item
];
// object literal
// creating an individual object
var progression = { // curly brackets
    name: 'wealth level', // key value pairs seperated by a colon
    goal: 1000000, // name the indecies (keys)
    level: 400,
    workon: 'creating money tree'
}; // same rules as arrays

// print progession object title
var pName = document.getElementById('progress-title');
pName.textContent = progression.name;

// print goal label
var pGoalLabel = document.getElementById('progress-goal-label');
pGoalLabel.textContent = pGoalLabel.name;

// print progression level label

// print progression workon label

// print progression goal value
var pGoalValue = document.getElementById('progress-goal');
pGoalValue.textContent = progression.goal;

// print progression level value
var pLevelValue = document.getElementById('progress-level');
pLevelValue.textContent = progression.level;

// print progression workon value
var pWorkonValue = document.getElementsByClassName('progress-workon');
pWorkonValue.textContent = progression.workon;



// Object
// calculates the amount of assets for a business
// function
// returns assests
function totalAssets(l, e) {
    // print known variables
    var la = document.getElementById('liabilities');
    la.textContent = l;

    var ea = document.getElementById('equity');
    ea.textContent = e;

    // find the total assests
    var total = l + e;
    // print the results
    var el = document.getElementById('totalAssets');
    el.textContent = total;

    // return results
    return el.textContent;
};

// print out total assets
totalAssets(2000000, 10000000);

var area = function(length, width) {
    return length * width;
};

var al = document.getElementById('totalArea');
al.textContent = area(15,60);

// calculates one tenth of income
// income divided by 10
// object - literal notation
var OneTenth = {
    income: 100,
    tenth: 10,

    savingsadded: function() {
        return addto = this.income / this.tenth;
    }
};
// print out
// One tenth function
var elIncome = document.getElementById("income");
elIncome.textContent = OneTenth.income;

// print by document
// object - literal notation
// get document location id & the content to print for the specified location
var printTo = {
    printId: '',
    variableName: '',

    printOut: function() {
        var el = document.getElementById(this.printId);
        el.textContent = this.variableName;
    }
}
