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
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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
            console.log(operation, input, input2);
            display.textContent = operate(operation, input, input2);
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
        display.textContent = operate(operation, input, input2);
    }
})
