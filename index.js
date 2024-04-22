let firstNumber = null;
let secondNumber = null;
let operator = "";
let firstAction = true;

const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const input = document.querySelector(".input");

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (firstAction) {
      input.textContent = "";
      firstAction = false;
    }
    if (input.textContent.length <= 13) {
      input.textContent += button.textContent;
    }
  });
});

clearButton.addEventListener("click", function () {
  input.textContent = "0";
  firstAction = true;
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
