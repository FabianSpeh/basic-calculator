// 0 shouldnt be clickable as first number
// implement decimals button
// implement modulo button
// implement factorial button

let firstNumber = null;

let secondNumber = null;

let operator = "";

// specifies whether the first Action in a calculation has been taken (first number has been typed in)
let firstAction = true;
// specifies whether an operator has been selected
let operatorActive = false;
// holds the current selected operator
let currentOperator = null;

// contains all number Buttons
const numberButtons = document.querySelectorAll(".number");
// contains the clear button(C)
const clearButton = document.querySelector(".clear");
// contains all operator buttons (+,-,*,/)
const operatorButtons = document.querySelectorAll(".operator");
// contains the equals button (=)
const equalsButton = document.querySelector(".equals");
// contains the display field
const input = document.querySelector(".input");
// contains the zero button
const zeroButton = document.querySelector(".zero");
// contains the back button
const undoButton = document.querySelector(".undo");

equalsButton.addEventListener("click", function () {
  if (operatorActive) {
    secondNumber = Number(input.textContent);
    input.textContent =
      Math.round(operate(firstNumber, secondNumber, operator) * 1000000000000) /
      1000000000000;
    currentOperator.classList.remove("active");
    operatorActive = false;
  }
});

undoButton.addEventListener("click", function () {
  input.textContent = input.textContent.slice(0, -1);   
});

// adds functionality to the operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].classList.remove("active");
    }
    if (!firstAction) {
      // adds an active state to the active operator button
      button.classList.add("active");
    }

    currentOperator = button;
    firstNumber = Number(input.textContent);
    operator = button.textContent;
    operatorActive = true;
    firstAction = true;
  });
});

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (firstAction) {
      input.textContent = "";
      firstAction = false;
    }
    if (input.textContent.length <= 13) {
      input.textContent += button.textContent;
    }
    console.log(firstAction);
  });
});

zeroButton.addEventListener("click", function () {
  if (!firstAction && input.textContent.length <= 13) {
    input.textContent += zeroButton.textContent;
  }
});

clearButton.addEventListener("click", function () {
  input.textContent = "0";
  firstAction = true;
  operatorActive = false;
  firstNumber = null;
  secondNumber = null;
  operator = "";
});

const add = (number1, number2) => {
  return number1 + number2;
};

const subtract = (number1, number2) => {
  return number1 - number2;
};

const multiply = (number1, number2) => {
  return number1 * number2;
};

const divide = (number1, number2) => {
  return number1 / number2;
};

const operate = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
  }
  return result;
};
