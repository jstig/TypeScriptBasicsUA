// JUST A TEST OF GIT PUSH INTO JSTIG

////////////////////////
// Object Literal Improvemenst in E6/7

/*const pizza = {
  name: "Pepperoni",
  price: 15
};

const toppings = ["pepperoni"];

/*
This can change to . . .
const order = {
  pizza: pizza,
  toppings: toppings
};

... this
*/

//shorthand way of making a property based on the values of another property
//const order = { pizza, toppings };
//console.log(order);

// As a function. Returns the same thing as the property above.

/*function createOrder(pizza, toppings) {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
*/

////////////////////////
// Rest Parameters in E6/7

/*function sumAll(message, ...arr) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll("Hello!", 1, 2, 3, 4, 5, 6);

console.log(sum);
*/

//////////////////////////
// Array and Spread Parameters ES6/7

/*const toppings = ['bacon', 'chilli'];

const newToppings = ['pepperoni'];

//Combines toppings and newToppings
const allToppings = [...toppings, ...newToppings];

console.log(allToppings);
*/

////////////////////////////////
// Destructuring Objects: Not a lot here. Need to revist later.

/*const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};

function order(pizza) {

}

order(pizza);
*/

//////////////////////////////
// Primitive Types: Number Type

/*const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log("Pizza costs: " + cost);
*/

//////////////////////////////
// Primitive Types: String Type

/*const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = 'Final coupon is ' + normalizeCoupon(coupon);

console.log(couponMessage);
*/

//////////////////////////////
// Primitive Types: String Type
/*
const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}
*/

//////////////////////////////
// Primitive Types: Any Type

/*
let coupon: any; // no value assigned. value can be 'any' type

coupon = 23;

coupon = '23';

coupon = true;
*/

//////////////////////////////
// Special Types: Implicit v. Explicit Types

/*
let implicitCoupon = 'pizza25';

let explicitCoupon: string = 'pizza25';

function testFunction (parameter:string) {
  return parameter;

}
*/

////////////////////////
// Special Types: Null, Undefined, Strict Null checks

/*
let coupon | null = 'pizza25';

function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);
removeCoupon();
console.log(coupon);
*/

/////////////////////////
// Special Types: Union and Literal Types

/*
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('large');

console.log(`Pizza Size: ${pizzaSize}`);
*/

////////////////////////
// Special Types: Function Types

/*function sumOrder(price: number, quantity: number): number {
     return price * quantity;
 }
 */

// Arrow function version of above
// In this we declare a variable, make it a type Function complete with parameters, set the arrow to indicate that it returns a number.

//let sumOrder: (price: number, quantity: number) => number;

// Calling the function that was defined above. Using x and y as the parameters, which correspond to price and quantity, as well as their data types
/*
sumOrder = (x, y) => {
    return x * y;
};
*/

//This is an even more shortened version of the above
// sumOrder = (x,y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total Sum: ${sum}`);

///////////////////////////////
// Special Types: Functions and Optional Arguments

/*
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
  if (y) {
    return x * y;
  } 
  return x;
}

let sum = sumOrder(25, 67);

console.log(`Order price: ${sum}`);
*/

///////////////////////////////
// Special Types: Typed Functions and Default Parameters

/*
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => x * y;

let sum = sumOrder(25);

console.log(`Order price: ${sum}`);
*/

/////////////////////////////
// Special Types: Object Types

//I think the benefit of adding types at this point before the object is created is because types can't be specified in the object instself. That is I can't write the type like `name: string: 'Plain old pepperoni'`

/*
let pizza: { name: string; price: number; getName(): string };

pizza = {
    name: 'Plain old pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    }
};

console.log(pizza.getName());
*/

////////////////
// Special Types: Array Types and Generics

/*
let sizes: string[];

sizes = ['small', 'medium', 'large'];

let toppings: string[];

toppings = ['pepperoni', 'tomato', 'bacon'];
*/

//////////////////
// Special Types: Tuple Types for Arrays

/*
let pizza: [string, number, boolean];

pizza = ['Pepperoni', 20, true];
*/

////////////////////
// Type Alisases and Assertions

/*
type Size = 'small' | 'medium' | 'large';

type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = x => {
    pizzaSize = x;
};

selectSize('medium');
*/

///////////////////////
// Type Assertions

/*
type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);
*/
