/* Accounting Formulas
 * ---
 * Overall Value
 * Total Assests = Liabilities + Equity
 */

 // the options for which forluma is chosen
 // array
 var formula = new Array(
     'assests',
     'one-tenth',
     'debt-payment',
     'growth');

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
