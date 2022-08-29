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

function checkForError(result) {
    if (result == "Infinity") {
        return "Error";
    }
    return result;
}

const body = document.querySelector("body");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const negativeButton = document.querySelector(".negative-button");
const decimalButton = document.querySelector(".decimal-button");
const percentButton = document.querySelector(".percent-button");
let display = document.querySelector(".screen-data");
const equalButton = document.querySelector(".equal-button");
let input = "";
let input2 = "";
let operation = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (input) {
            display.textContent = "";
            if (input2.length == 12) {
                display.textContent = input2;
            }
            else {
                input2 += number.textContent;
                display.textContent = input2;
            }
        }
        else {
            if (display.textContent.length < 12) {
                display.textContent += number.textContent;
            }
        }
        if (display.textContent.includes(".")) {
            decimalButton.disabled = true;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (input && input2) {
            display.textContent = checkForError(Math.round(operate(operation, input, input2) * 1000) / 1000);
            input = display.textContent;
            input2 = "";
            operation = operator.value;
        }
        else {
            input = display.textContent;
            operation = operator.value;
            decimalButton.disabled = false;
        }
    });
});

equalButton.addEventListener("click", () => {
    if (input == 1 && input2 == 1) {
        display.textContent = "🐟";
    }
    else if (input && input2) {
        display.textContent = checkForError(Math.round(operate(operation, input, input2) * 1000) / 1000);
        if ((display.textContent.length - 1) > 12) {
            let answer = parseFloat(display.textContent);
            display.textContent = answer.toExponential(1);
        }
    }
});

clearButton.addEventListener("click", () => {
    input = "";
    input2 = "";
    operation = "";
    display.textContent = "";
    decimalButton.disabled = false;
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
        let percentage = display.textContent / 100;
        if ((percentage.toString().length - 1) > 12) {
            display.textContent = percentage.toExponential(1);
        }
        else {
            display.textContent = percentage;
        }
    }
});

