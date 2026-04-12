// /**
//  * Example 1----
//  */
// getName1(); // gives error because Js treats this as a variable which is already stored as a undefined, undefined() gives error

// getName(); // it prints the actual output because during the memory creation phase it stores as actual function definition

// console.log(x); // undefined

// console.log(getName); // prints the function definition
// var x = 7;
// function getName() {
//     console.log("getName function: Lakshman");
// }

// var getName1 = function() {
//     console.log("getName1 function: Chandu");
// }



/**
 * Example 2
 */
var x = 10;
a();
b();
console.log(x);

function a() {
    var x = 20;
    console.log(x);
}

function b() {
    var x = 30;
    console.log(x);
}
