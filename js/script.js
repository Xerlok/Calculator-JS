const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const del = document.getElementById('bD');
const clear = document.getElementById('bC');
const equals = document.getElementById('bEq');
const plusMinus = document.getElementById('bPl-min');
const dot = document.getElementById('bDec');
const display = document.getElementById('results-window');
const waifu = document.getElementById('waifu');


const operations = {
    '+': function add(num1,num2) {
        return num1 + num2;
    },

    '-': function subtract(num1,num2) {
        return num1 - num2;
    },

    'x': function multiply(num1,num2) {
        return num1 * num2;
    },

    '/': function divide(num1,num2) {
        return num1 / num2;
    },

    // not sure this one is correct, what is % in calculator?
    '%': function modulo (num1,num2) {
        return Math.pow(num1, num2);
    },

    // в степени
    'x2': function exponent (num1, num2) {
        if (num2 == 2) {return num1 * num1}
        if (num2 == 1) {return num1}

        let result = num1;
        for (i = 0; i < num2; i++) {
            result = result * num1;
        }
        return result;
    },

    '√': function square (num) {
        return Math.sqrt(num);
    }
}

function operate (num1, operator, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return operations[operator](num1,num2);
}

function updateDisplay (){ 
    let num1 = '';
    let num2 = '';
    let operator = '';

    numbers.forEach(number => {
        number.addEventListener("click", e => {
            if (operator === "") { // Read first number if no operator set yet
                num1 += e.target.innerText;
                display.innerText = num1;
            } 
            
            else { // Read second number
                num2 += e.target.innerText;
                display.innerText = num1 + operator + num2;
            }
        });
    });

    operators.forEach(op => {
        op.addEventListener("click", e => {
            if (operator === ""){
            operator = e.target.innerText;
            display.innerText = num1 + operator;
            }
            else {
                num1 = operate(num1, operator, num2);
                operator = e.target.innerText;
                display.innerText = num1 + operator;
                num2 = "";
            }
        });

    equals.addEventListener("click", () => {
        display.innerText = num1 + operator + num2 + '=' + operate(num1, operator, num2);
        num1 = '';
        num2 = '';
        operator = '';
    })

    clear.addEventListener("click", () => {
        display.innerText = "0";
        num1 = '';
        num2 = '';
        operator = '';
    })

    dot.addEventListener("click", () => {
        
    })
    });
}

updateDisplay();


/* operators.forEach(operator => addEventListener("click", updateDisplay)); */
