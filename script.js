/** @format */

// Number
const myNumber = 657;

// BigInt
const theBigInt = 12356789n;

// String
const myString = "First String";

// Boolean
const doneAss = true;

// Null
const aptNumber = null;

// Undefined
const noValue = undefined;

// Object
const obj = { name: "Jess" };

// Symbol
const id = Symbol("id");

// Function
var addNum = function (x, y) {
  return x + y;
};

const display = `myNumber is a ${typeof myNumber}, theBigInt is a ${typeof theBigInt}, myString is a ${typeof myString}, doneAss is a ${typeof doneAss}, aptNumber is a ${typeof aptNumber}, noValue is an ${typeof noValue}, obj is an ${typeof obj}, id is a ${typeof id} and addNum is a ${typeof addNum}`;

alert(display);
