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
    if (num=="-"){
        return "";
    }
    // Format the number with commas as thousands separators
    return Number(num).toLocaleString("en");
}

function reverserFormattedNumber(stringNum){
    // Reverse numbers from string to numbers to perform addition and etc
    // Search and replace all commas using global modifier(g)
    if (stringNum=="-"){
        return "";
    }
    return Number(stringNum.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if (this.id == "clear"){
            printOutput('');
            printHistory('');
        }
        else if (this.id == "backspace"){
            var output = getOutput().toString();
            output = output.slice(0, -1);
            printOutput(reverserFormattedNumber(output));
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if (output=="" && history!=""){
                if (isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if (output!="" || history!=""){
                output = output=="" ? output : reverserFormattedNumber(output);
                history += output;
                if (this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            };
        };
    });
};

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverserFormattedNumber(getOutput());
        if (output!=NaN){
            output += this.id;
            printOutput(output);
        }
    });
};

