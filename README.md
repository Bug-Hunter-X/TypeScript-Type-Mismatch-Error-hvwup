# TypeScript Type Mismatch Bug

This repository demonstrates a common type mismatch error in TypeScript and provides a solution. The bug arises from passing a string argument to a function expecting a number.  The solution involves stricter type checking and input validation.

## Bug

The `bug.ts` file contains a simple addition function that incorrectly accepts a string argument, leading to a compilation error. 

## Solution

The `bugSolution.ts` file shows how to fix the error by either using type guards or ensuring that the inputs are always numbers.