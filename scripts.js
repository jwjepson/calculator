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
    return operator(num1, num2);
}

let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".screen-data");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (((display.textContent).length + 1) > 12) {
            display.textContent += "";
        }
        else {
            display.textContent += number.textContent;
        }
    });
});
