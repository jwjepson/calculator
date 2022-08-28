function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator == "add") {
        return add(num1,num2);
    }
    else if (operator == "multiply") {
        return multiply(num1, num2);
    }
    else if (operator == "divide") {
        return divide(num1, num2);
    }
    else if (operator == "subtract") {
        return subtract(num1, num2);
    }
}

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const negativeButton = document.querySelector(".negative-button");
const percentButton = document.querySelector(".percent-button");
let display = document.querySelector(".screen-data");
const equalButton = document.querySelector(".equal-button");
let input = "";
let input2 = "";
let operation = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (((display.textContent).length + 1) > 12) {
            display.textContent += "";
        }
        else if (input) {
            display.textContent = "";
            input2 += number.textContent;
            display.textContent = input2;
        }
        else {
            display.textContent += number.textContent;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (input && input2) {
            console.log(input);
            console.log(input2);
            display.textContent = Math.round(operate(operation, input, input2) * 1000) / 1000;
            input = display.textContent;
            input2 = "";
            operation = operator.value;
        }
        else {
            input = display.textContent;
            operation = operator.value;
        }
    });
});

equalButton.addEventListener("click", () => {
    if (input && input2) {
        display.textContent = Math.round(operate(operation, input, input2) * 1000) / 1000;
    }
});

clearButton.addEventListener("click", () => {
    input = "";
    input2 = "";
    operation = "";
    display.textContent = "";
});

negativeButton.addEventListener("click", () => {
    if (input2) {
        input2 = -input2;
        display.textContent = -display.textContent;
    }
    else if (display.textContent) {
        display.textContent = -display.textContent;
    }
});

percentButton.addEventListener("click", () => {
    if (input2) {
        input2 = input2 / 100;
        display.textContent = display.textContent / 100;
    }
    else if (display.textContent) {
        display.textContent = display.textContent / 100;
    }
});



