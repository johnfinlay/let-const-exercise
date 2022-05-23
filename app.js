// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!

// ES2015 Global Constants
// /* Write an ES2015 Version */
const PI = 3.14;
// Quiz
// What is the difference between var and let?
      // var is scoped at the function level, it can be both re-assigned and re-declared, and its declaration it hoisted.
      // let is scoped at the block level, it can be re-assigned but cannot be re-declared.
// What is the difference between var and const?
      // var is scoped at the function level, it can be both re-assigned and re-declared, and its declaration it hoisted.
      // const is scoped at the block level, it cannot be re-assigned or re-declared.
// What is the difference between let and const?
      // var can be re-assigned and const cannot.
// What is hoisting?
      // hoisting is where javaScript initializes all var declarations when the code loads, but values are not available
      // in the code until after they are assigned.