const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const del = document.getElementById('bD');
const clear = document.getElementById('bC');
const equals = document.getElementById('bEq');
const plusMinus = document.getElementById('bPl-min');
const dot = document.getElementById('bDec');
const display = document.getElementById('results-window');
const waifu = document.getElementById('waifu');
const buttons = document.querySelectorAll('.button');


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
    'x^x': function exponent (num1, num2) {
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

function operate (num1, operator, num2){
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    result = operations[operator](num1,num2);

    return Math.round((result + Number.EPSILON) * 1000) / 1000;
}

function calculate (){ 
    let num1 = '';
    let num2 = '';
    let operator = '';

    let textLength = display.textContent.length;

    numbers.forEach(number => {
        number.addEventListener("click", e => {
            if (operator === "") { // Read first number if no operator set yet
                if (num1.includes('.')) {dot.disabled = true;}
                num1 += e.target.innerText;
                display.innerText = num1;
            } 
            
            else { // Read second number
                dot.disabled = false;
                if (num2.includes('.')) {dot.disabled = true;}
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
        display.style.fontSize = "3rem";
        dot.disabled = false;
    })

    clear.addEventListener("click", () => {
        display.innerText = "0";
        num1 = '';
        num2 = '';
        operator = '';
        display.style.fontSize = "3rem";
        dot.disabled = false;
    })
    // Change font size depending on text length
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            textLength = display.textContent.length;
            if (textLength > 10 && textLength <= 15) {
                display.style.fontSize = "2rem";
            }
/*             else if (textLength > 15) {
                display.style.fontSize = "1rem";
            } */
        })
    })
    });
}

calculate();
