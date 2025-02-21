function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number
let result2 = subtract(10, 5); // result2: number

// Type 'string' is not assignable to type 'number'.
let result3 = add("5", 3); // Error!