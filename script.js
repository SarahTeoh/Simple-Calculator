function add(){
    var sum = 0;

    for (var i=0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}

function multiply(){
    var multiplied = arguments[0];

    for (var i=1; i < arguments.length; i++){
        multiplied *= arguments[i];
    }

    return multiplied;
}

function printOutput(num){
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getHistory(){
    return document.getElementById("history-value").innerText;
}

function getFormattedNumber(num){
    // Format the number with commas as thousands separators
    return Number(num).toLocaleString("en");
}

function reverserFormattedNumber(stringNum){
    // Reverse numbers from string to numbers to perform addition and etc
    // Search and replace all commas using global modifier(g)
    return Number(stringNum.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        
    });
};

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = getOutput();
        output += this.id;
        printOutput(output);
    });
};