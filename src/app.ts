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

const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}

//////////////////////////////
// Primitive Types: Any Type

/*
let coupon: any; // no value assigned. value can be 'any' type

coupon = 23;

coupon = '23';

coupon = true;
*/

//////////////////////////////
// Primitive Types: Implicit v. Explicit Types

/*
let implicitCoupon = 'pizza25';

let explicitCoupon: string = 'pizza25';

function testFunction (parameter:string) {
  return parameter;

}
*/
