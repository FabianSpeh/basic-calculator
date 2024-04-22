let firstNumber = 0;
let secondNumber = 0;
let operator = "";

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
