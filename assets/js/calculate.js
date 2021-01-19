// jshint esversion:6


(function init() {
    var operation = prompt(
        "Welcome! Choose the designated number to perform operation  \n 1.Addition \n 2.Subtraction \n  3.Multiplication \n  4.Division \n  5.Power \n 6.Square root \n 7.Average \n  8.Area of a circle \n"
    );

    switch (operation) {
        case "1":
            add();
            break;
        case "2":
            subtract();
            break;
        case "3":
            multiply();
            break;
        case "4":
            divide();
            break;

    }
})();

function add() {
    const inputNumbers = prompt("Enter the numbers separated by a comma: ");
    let numbers;
    let sum = 0;
    numbers = inputNumbers.split(",");

    numbers.forEach(function(value) {
        sum += Number(value);
    });
    console.log("Sum is " + sum);
}

function subtract() {
    const inputNumbers = prompt("Enter the numbers separated by a comma: ");
    let numbers;
    numbers = inputNumbers.split(",");

    let difference = Number(numbers[0]);

    numbers.forEach(function(value, index) {
        if (index === 0) {} else {
            difference -= Number(value);
        }
    });
    console.log("Difference is " + difference);
}

function multiply() {
    const inputNumbers = prompt("Enter the numbers separated by a comma: ");
    let numbers;
    let product = 1;

    numbers = inputNumbers.split(",");

    numbers.forEach(function(value) {
        product *= Number(value);
    });
    console.log("Product is " + product);
}

function divide() {

    const inputNumbers = prompt("Enter the numbers separated by a comma: ");
    let numbers;
    numbers = inputNumbers.split(",");
    let dividend = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            dividend = "Invalid Input";
            break;
        } else {
            dividend = dividend / Number(numbers[i]);
        }
    }
    console.log("The quotient is " + dividend);
}