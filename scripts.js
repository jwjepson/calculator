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
let num1;
let operator = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (((display.textContent).length + 1) > 12) {
            display.textContent += "";
        }
        else if (num1) {
            display.textContent = "";
            display.textContent += number.textContent;

        }
        else {
            display.textContent += number.textContent;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (num1) {
            
            console.log(operator.value);
            display.textContent = operate(operator.value, num1, display.textContent);
        }
        num1 = display.textContent;
        console.log(num1);
    });
});

