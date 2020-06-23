// Tip Calculator
// Write a function tipAmount that is given the bill amount and 
//the level of service (one of good, fair and poor) and returns the dollar amount for the tip. 
//Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%

var good = .2;
var fair = .15;
var bad = .1;

function tipAmount(billAmount, serviceLevel){

    

    if (serviceLevel == good){
        var dollarAmount = billAmount * serviceLevel;
        console.log("$" + dollarAmount);
    }
    else if(serviceLevel == fair){
        var dollarAmount = billAmount * serviceLevel;
        console.log("$" + dollarAmount);
    }
    else if(serviceLevel == bad){
        var dollarAmount = billAmount * serviceLevel;
        console.log("$" + dollarAmount);
    }
    else
        console.log("Have a nice day!");
}

tipAmount(100, bad)