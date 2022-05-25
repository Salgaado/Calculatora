"use strict";

const clear = document.getElementById("clear");
const div = document.getElementById("/");
const times = document.getElementById("*");
const backspace = document.getElementById("backspace");
const minus = document.getElementById("-");
const plus = document.getElementById("+");
const equal = document.getElementById("equal");
const parLeft = document.getElementById("dot");
const parRight = document.getElementById("sqrt");
const numberButtons = document.querySelectorAll(".btn-number");
console.log(numberButtons);
const operatorButtons = document.querySelectorAll(".btn-operator");
const display = document.getElementById("display");
class Calculator {
  constructor() {
    this.firstOperand = "";
    this.currentOperand = "";
    this.operation = "";
    this.updateDisplay = function () {
      displayFirst.textContent = this.firstOperand + this.operation;
      display.textContent = this.currentOperand;
    };
    this.appendNumber = function (number) {
      if (this.currentOperand.includes(".") && number === ".")
        return;
      this.currentOperand += number.toString();
      this.updateDisplay();
    };
    this.chooseOperation = function (operator) {
      if (this.currentOperand === "")
        return;
      if (this.firstOperand !== "") {
        this.calc();
      }
      this.operation = operator;
      this.firstOperand = this.currentOperand;
      this.currentOperand = "";
      this.updateDisplay();
    };
    this.calc = function () {
      let result;
      let prev = parseFloat(this.firstOperand);
      let current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current))
        return;
      switch (this.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "×":
          result = prev * current;
          break;
        case "÷":
          result = prev / current;
          break;
        default:
          return;
      }
      this.firstOperand = "";
      this.currentOperand = result.toString();
      this.operation = "";
      this.updateDisplay();
    };

    this.sqrt = function () {
      this.currentOperand = Math.sqrt(this.currentOperand).toFixed(2);
      this.updateDisplay();
    };
    this.clear = function () {
      this.firstOperand = "";
      this.currentOperand = "";
      this.operation = "";
      this.updateDisplay();
    };
    this.backspace = function () {
      this.currentOperand = this.currentOperand.slice(0, -1);
      this.updateDisplay();
    };
  }
}
const calculadora = new Calculator();
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    calculadora.appendNumber(item.innerText);
  });
});
operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    calculadora.chooseOperation(item.innerText);
  });
});
equal.addEventListener("click", () => {
  calculadora.calc();
});
clear.addEventListener("click", () => {
  calculadora.clear();
});
backspace.addEventListener("click", () => {
  calculadora.backspace();
});
sqrt.addEventListener("click", () => {
  calculadora.sqrt();
});

