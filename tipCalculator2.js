var good = .2;
var fair = .15;
var bad = .1;

function totalAmount(billAmount, serviceLevel){

    if (serviceLevel == good){
        var tipAmount = billAmount * serviceLevel;
        var totalBill = tipAmount + billAmount;
        console.log("$" + totalBill);
    }
    else if (serviceLevel == fair){
        var tipAmount = billAmount * serviceLevel;
        var totalBill = tipAmount + billAmount;
        console.log("$" + totalBill);
    }
    else if (serviceLevel == bad){
        var tipAmount = billAmount * serviceLevel;
        var totalBill = tipAmount + billAmount;
        console.log("$" + totalBill);
    }

}
totalAmount(100, bad)