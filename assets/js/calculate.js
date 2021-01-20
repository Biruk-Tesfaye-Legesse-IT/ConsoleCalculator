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
        case "5":
            power();
            break;
        case "6":
            sqrt();
            break;

        case "7":
            average();
            break;
        case "8":
            areaCircle();
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

function power() {
    const base = prompt("Enter the base: ");
    const power = prompt("Enter the power/exponent: ");

    let result = base ** power;
    console.log("Result: " + result);
}

function sqrt() {
    const input = prompt("Enter the number you want to find the square root of: ");
    let result = Math.sqrt(input);
    console.log("Result is: " + result);
}


function average() {
    const numbers = prompt("Enter the numbers separated by a comma: ");
    let listNumbers = numbers.split(",");
    let sum = 0;
    let average;
    listNumbers.forEach(function(value) {
        sum += Number(value);
    });
    average = sum / listNumbers.length;
    console.log("Average is : " + average);
}

function areaCircle() {
    const radius = prompt("Enter the radius of the circle");
    let rSquare = radius ** radius;

    let area = (3.141592653589793238 * rSquare).toFixed(2);


    console.log("The area is: " + area);
}