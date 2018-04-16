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
// Primitive Types: T Type

/*
let coupon: T; // no value assigned. value can be 'T' type

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

/////////////////////
// Exploring Enums: Numeric Enums and Reverse Mapping

/*
enum Sizes {
    Small,
    Medium,
    Large
}

enum Sizes {
    ExtraLarge = 3
}

const selectedSize = 2;

console.log('Kaiden wears a size: ' + Sizes[selectedSize]);
*/

/////////////////////
// Exploring Enums: String Enums and Inlining Members

/*
const enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
  selected = size;
}

updateSize(Sizes.Large);

console.log(selected);
*/

/////////////////////////
// Diving into Interfaces: Creating Interfaces
/*
interface Pizza  {
    name: string;
    sizes: string[];
};


let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza  {
    return {
        name,
        sizes,
    };
}

pizza = createPizza('pepperoni', ['small', 'medium']);
*/

//////////////////////
// Diving into Interfaces: Interfaces with Function Types

/*
interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
}

type getAvailableSizes = ()



function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
*/

////////////////////
// Diving into Interfaces: Extending Interfaces

/* 
interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  
  getAvailableSizes(): string[];
}


function createPizza(name: string, sizes: string[]): Pizza {
  return {
      name,
      sizes,
      getAvailableSizes() {
          return this.sizes;
      }
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
*/

///////////////////
//Understanding Classes and Constructors

//New Way
/*class Pizza {
  name: string;
  toppings: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
*/

// Old way
/*
function Pizza(name: string) {
    this.name = name;
    this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
    this.toppings.push(topping);
};
*/

/*
const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
*/

///////////////////////////
// Public and Private Members
/*
class Pizza {
    toppings: string[] = [];

    constructor(private name: string) {}

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');


pizza.addTopping('beef');

console.log(pizza);
*/

//////////////////////
// Read Only Members

/* 
class Pizza {
  toppings: string[] = [];

  constructor(readonly name: string) {}

  addTopping(topping: string) {
      this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');


pizza.addTopping('beef');

console.log(pizza.name);

console.log(pizza);
*/

///////////////////
// Setters and Getters

/*
class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

//create new instance of the class
const sizes = new Sizes(['small', 'medium']);

//invoke getter
console.log(`Getting the sizes: ${sizes.availableSizes}`);
//invoke setter
sizes.availableSizes = ['medium', 'large'];
console.log(`Setting new sizes: ${sizes.availableSizes}`);

class Pizza {
    toppings: string[] = [];

    constructor(readonly name: string) {}

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('beef');

console.log(pizza.name);

console.log(pizza);
*/

/////////////////////////
//Class Inheritance, Abstract Classes, Protected Members, Interface Contracts
/*
interface SizesInterface {
  availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes() {
        return this.sizes;
    }
}

interface PizzaInterface extends SizesInterface {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes  implements PizzaInterface {
    toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        //A super call is necessary to extend a class
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

//The arguments 'small' and 'medium' are possible because Pizza extends Sizes
const pizza = new Pizza('Pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes);
pizza.updateSizes('large');
console.log(pizza.availableSizes);
*/

///////////////////////////
// Static Properties and Methods

/*
class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
        return `PIZZA_RESTAURANT${percentage}`;
    }
}

console.log(Coupon.create(25));
*/

/////////////////////////
//Generics and Overloads: Function Generics
/*
class Pizza {
    constructor(private name: string, private price: number) {}
}

class List<T> {
    private list: T[];

    addItem(item: T): void {
        this.list.push(item);
    }

    getList(): T[] {
        return this.list;
    }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

const pizzas = list.getList();

class Coupon {
    constructor(private name: string) {}
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'));
*/

////////////////////////////
// Function Overload

//Example will reverses an array or a string. Not very practical, but

//creating overloads. arguments that can be passed in, as well as the return type. Don't compile out to JS
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];

//this is the primary array that will be overloaded
function reverse<T>(stringOrArray: string | T[]): string | T[] {
    if (typeof stringOrArray === 'string') {
        //if it is a string, we split it into an array, reverse it, then join it again
        return stringOrArray
            .split('')
            .reverse()
            .join('');
    }
    //if it's an array, we can simply call the reverse() method. Adding a slice() so that a copy is made, returns a new one, and then reversed. The direct array is not mutated.
    return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);

console.log(reverse);
