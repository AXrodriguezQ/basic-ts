
//? 2.0

import { filteringNumbers, mappingNumbers, reducingNumbers } from "./helpers/arrayOperations";
import lodash from "lodash";
import welcome from "./helpers/helloUser";
import { sumFourNumbres, sumThreeNumbres, sumTwoNumbres } from "./helpers/sumsNumbres";

const sum = (a: number, b:number): Number => a + b;

console.log(sum(2,3));
console.log(sum(43,211212));
console.log(sum(21,0));

//? 2.1

interface Car {
    make: string;
    model: string;
    year: number;
}

const showFeaturesCar = (car: Car): String => {
    return `The make of the car is: ${car.make}, the model is: ${car.model} and the year is ${car.year}`
}

console.log(showFeaturesCar({ make: 'honda', model: 'civic', year: 2006 }));

//? 3.0

function showFirstElement<T>(array: T[]): T | null {
    return array.length > 0 ? array[0] : null;
}

console.log(showFirstElement([1, 2, 3]));
console.log(showFirstElement([1, 2, 3, 4, 5]));

//? 3.1

enum DaysWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function showDayOff(dayOfWeek: DaysWeek): boolean {
    if (dayOfWeek === DaysWeek.Saturday || dayOfWeek === DaysWeek.Sunday) {
        return true;
    }
    return false;
}

console.log(showDayOff(DaysWeek.Saturday));
console.log(showDayOff(DaysWeek.Monday));
console.log(showDayOff(DaysWeek.Friday));

//? 4.0 and 4.1

console.log(welcome('Alex'));
console.log(welcome('Juan'));
console.log(welcome('Maria'));

console.log(sumTwoNumbres(1,2));
console.log(sumTwoNumbres(2,4));

console.log(sumThreeNumbres(1,2,3));
console.log(sumThreeNumbres(13,221,30));

console.log(sumFourNumbres(1,2,3,4));
console.log(sumFourNumbres(-100,-32,21,432));

//? 5.0

console.log(mappingNumbers([1,2,3,4]));

console.log(filteringNumbers([1,2,3,4]));

console.log(reducingNumbers([1,2,3,4]));

//? 5.1

class Cart {

    private name: string
    private price: number
    private quantity: number

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal(): number {
        return this.price * this.quantity;
    }

    getQuantity(): number {
        return this.quantity;
    }

    addQuantity(quantity: number): void {
        this.quantity += quantity;
    }

    removeQuantity(quantity: number): void {
        this.quantity === 0 && 'This cart is empty'
        this.quantity -= quantity;
    }

}

const productOne = new Cart('arroz', 1000, 10)
const productTwo = new Cart('maiz', 2000, 2)

console.log(productOne.getTotal());
productOne.addQuantity(10);
productOne.removeQuantity(5);
console.log(productOne.getQuantity());

console.log(productTwo.getTotal());
productTwo.addQuantity(5)
productTwo.removeQuantity(10)
console.log(productTwo.getQuantity());

const objectExample: {} = {
    name: 'Alex',
    age: 25
}

//? 6.0

const toString = JSON.stringify(objectExample)

console.log(toString);

const toObject = JSON.parse(toString)

console.log(toObject);

//? 6.1

const exampleOneLodash = lodash.defaults({ 'a':1, 'd':3 }, { 'a': 3, 'b': 4, 'c': 5 });

// The first part of the return is the true part and the second part is the false part
const exampleTwoLodash = lodash.partition([1,2,3,4,5,6], n => n > 2)

console.log(exampleOneLodash);
console.log(exampleTwoLodash);

function removeNumbesrFrom (from: number[], until: number): number[] {
    
    const result: number[] = [];

    const res = lodash.partition(from, n => n > until)

    res[0].forEach(n => result.push(n));

    return result

}

console.log(removeNumbesrFrom([1,2,3,4,5,6,7], 3));
