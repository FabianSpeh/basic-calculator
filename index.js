let firstNumber = null;
let secondNumber = null;
let operator = "";

const numberButtons = document.querySelectorAll(".number");
const input = document.querySelector(".input");

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    input.textContent += button.textContent;
  });
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
