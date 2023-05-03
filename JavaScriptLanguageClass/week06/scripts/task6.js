//Leven Barney

// Performs mathematical calculations of the total based on the expense, the percentage of tip, and sale tax percentage.
function calculate(expense, tip, saleTax) {
    let subtotal = parseFloat(expense);
    subtotal += parseFloat(expense) * (parseFloat(tip)/100);
    subtotal += parseFloat(expense) * (parseFloat(saleTax)/100);
    return subtotal;
}

// Assembles all the user-input variables, executes calculate, and then displays the resultant Float in dollars.
function doCalculation() {
    let expense = document.querySelector('#expense').value;
    let tip = document.querySelector('#rateOfTip').value;
    let saleTax = document.querySelector('#saleTax').value;
    let total = calculate(expense, tip, saleTax);
    document.querySelector('#total').value = "$" + total.toFixed(2);
    addToList(total);
}

let allCalculations = [];

function addToList(item) {
    allCalculations.push(item.toFixed(2));
    sortBy();
}

const output = (calculations) => {
    calculations.forEach(
        calculation => {
            let article = document.createElement('article');

            let cost = document.createElement('h3');
            cost.textContent = "$" + calculation;

            article.appendChild(cost);

            document.querySelector('#calculations').appendChild(article);
        }
    );
}

const reset = () => {
    document.querySelector('#calculations').innerHTML = '';
}


const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
        case 'costDescending':
            sortedList = bubbleSortDescending(allCalculations);
            output(sortedList);

            break;
        case 'costAscending':
            sortedList = bubbleSortAscending(allCalculations);
            output(sortedList);

            break;
        default:
            break;
    }
}

function bubbleSortAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (parseFloat(arr[j + 1]) < parseFloat(arr[j])) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

function bubbleSortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (parseFloat(arr[j + 1]) > parseFloat(arr[j])) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

// Listens for a click of the Calculate button which calls doCalculation() which is where the magic happens.
document.querySelector('#doStuff').addEventListener('click', doCalculation);
document.querySelector('#sortBy').addEventListener('change', sortBy);



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let currentYear = new Date().getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = currentYear;
