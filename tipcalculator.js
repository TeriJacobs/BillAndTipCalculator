//1. Calculating how much each person contributes towards the bill.
function myFunction() {
    var bill = parseInt(document.getElementById("billAmount").value);
    var people = parseInt(document.getElementById("numOfPeople").value);

    var total = bill / people;
    
    console.log(total);
    document.getElementById('result1').innerHTML = total;
}

//2. Calculating what the total tip value is

function calculateTip(){
    var bill = parseInt(document.getElementById("billAmount").value);
    var tip = parseInt(document.getElementById("tipAmount").value);
    
    
    var tipTotal = (bill * (tip / 100));
    
    document.getElementById('result2').innerHTML = tipTotal;
    
}

//3. Calculating how much each person contrabutes towards the  bill split + tip split.
function combined(){
    var bill = parseInt(document.getElementById("billAmount").value);
    var people = parseInt(document.getElementById("numOfPeople").value);
    var tip = parseInt(document.getElementById("tipAmount").value);
    //var billSplit = document.getElementById("result1");
    //var tipSplit = document.getElementById("result2");// JS only reads values directly linked in HTML calculation rather than attaining a user input's result

    var tipTotal = (bill * (tip / 100));
    document.getElementById('result2').innerHTML = tipTotal;
    

    var total = bill / people;
    document.getElementById('result1').innerHTML = total;

    
    var personSplit = tipTotal + total;

    document.getElementById('result3').innerHTML = personSplit;
    console.log(personSplit);

    
}    

