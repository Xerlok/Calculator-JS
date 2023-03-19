const operations = {
    '+': function add(num1,num2) {
        return num1 + num2;
    },

    '-': function subtract(num1,num2) {
        return num1 - num2;
    },

    '*': function multiply(num1,num2) {
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
    'exp': function exponent (num1, num2) {
        if (num2 == 2) {return num1 * num1}
        if (num2 == 1) {return num1}

        let result = num1;
        for (i = 0; i < num2; i++) {
            result = result * num1;
        }
        return result;
    },

    'sqr': function square (num) {
        return Math.sqrt(num);
    }
}

function operate (num1, operator, num2) {
    return operations[operator](num1,num2);
}


