"use strict";
const sayHi = () => console.log('Hi!');
sayHi();
const sum = (a, b) => {
    let c = a + b;
    console.log(c);
};
sum(2, 4);
const date = new Date();
console.log(date.getHours());
const obj = {
    name: "John",
    age: 22,
    isAdmin: true
};
//------------------------------------------
// Описание массивов
const arr = [1, 2, 3];
const arr2 = [1, 2, 3, "bla"]; // - called union type 
let t = [1, "message"];
//------------------------------------------
// Описание функций
const printMessage = (message) => {
    console.log(message);
};
printMessage("Bla!");
const mult = (a, b) => {
    return a * b;
};
mult(2, 4);
let value;
value = 5;
value = false;
const obj2 = {
    propA: 'ffd',
    propB: 4
};
