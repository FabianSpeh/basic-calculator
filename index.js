// 0 shouldnt be clickable as first number
// implement decimals button
// implement modulo button
// implement factorial button

let firstNumber = null;
let secondNumber = null;
let operator = "";
let firstAction = true;
let operatorActive = false;

const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const input = document.querySelector(".input");

equalsButton.addEventListener("click", function () {
  if (operatorActive) {
    secondNumber = Number(input.textContent);
    input.textContent =
      Math.round(operate(firstNumber, secondNumber, operator) * 1000000000000) /
      1000000000000;
    operatorActive = false;
  }
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
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
