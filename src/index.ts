const sayHi = () => console.log('Hi!');

sayHi();


const sum = (a: number, b: number) => {
    let c: number = a + b
    console.log(c);
}

sum(2,4);

const date = new Date();
console.log(date.getHours());

//-------------------------------------------
// Описание объектов

type Obj = {
    name: string;
    age: number;
    isAdmin: boolean
}
const obj:Obj = {
    name: "John",
    age: 22,
    isAdmin: true
};

//------------------------------------------
// Описание массивов

const arr: number[] = [1,2,3];

const arr2: (number|string)[] = [1,2,3,"bla"]; // - called union type 
let t:[number, string] = [1, "message"];

//------------------------------------------
// Описание функций

const printMessage = (message: string): void => {  // when a function return nothing - use VOID
    console.log(message);
    
};
printMessage("Bla!");

const mult = (a: number, b: number): number => {
    return a * b;
}

mult(2,4);

//------------------------------------------
// Type ALIASES

type NumberOrBoolean = number | boolean;
let value: NumberOrBoolean;
value = 5;
value = false;


// Types Intersection
type A = {
    propA: string
};
type B = {
    propB: number
};
type C = A & B;

const obj2: C = {
    propA: 'ffd',
    propB: 4
};














