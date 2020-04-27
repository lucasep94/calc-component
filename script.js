var myCalc = document.querySelector('my-calc');
function insertValue(e) {
    myCalc.formula += e.value;
}

function calculate() {        
    myCalc.result = eval(myCalc.formula);
}

function remove() {
    myCalc.formula = '';
    myCalc.result = '';
}

function empty() {
    myCalc.result = '';
}