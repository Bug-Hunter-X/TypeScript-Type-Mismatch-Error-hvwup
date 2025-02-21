function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        console.error("Invalid input. Both arguments must be numbers.");
        return 0; // Or throw an error
    }
}

let result1 = add(5, 3); // result1: number
let result2 = subtract(10, 5); // result2: number

//Corrected with input validation
let result3 = addSafe("5", 3); // No Error, handles invalid input
let result4 = addSafe(5,3); // No Error