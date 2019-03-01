/* eslint-env browser */

// two numbers: num1, num2
// four operations: add(+), subtract(-), multiply(*), divide(/)
// Result: function calculate (parameter1, parameter2, parameter3)

function calculator() {
    "use strict";
    var num1, num2, action, result;

    num1 = parseInt(window.prompt("Choose a number:"));
    num2 = parseInt(window.prompt("Choose another number:"));
    action = window.prompt("Choose an operation: add, subtract, multiply or divider");

    function add(param1, param2) {
        result = param1 + param2;
        return result;
    }
    function subtract(param1, param2) {
        result = param1 - param2;
        return result;
    }
    function multiply(param1, param2) {
        result = param1 * param2;
        return result;
    }
    function divide(param1, param2) {
        result = param1 / param2;
        return result;
    }
    
    function calculate(param1, param2, operation) {
        switch (action) {
          case "add":
            result = add(param1, param2);
            break;
          case "subtract":
            result = subtract(param1, param2);
            break;
          case "multiply":
            result = multiply(param1, param2);
            break;
          case "divide":
            result = divide(param1, param2);
            break;
        }
        return result;
    }
    
    return calculate(num1, num2, action);

}

window.alert(calculator());

