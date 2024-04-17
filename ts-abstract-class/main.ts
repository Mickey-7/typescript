import { Contractor } from "./Contractor";
import { FullTimeEmployee } from "./FullTimeEmployee";

let jane = new Contractor('Jane', 'Doe', 100, 160);
let john = new FullTimeEmployee('John', 'Doe', 12000);

// D:\typescript\ts-tutorial\ts-abstract-class>npx tsc Employee.ts Contractor.ts FullTimeEmployee.ts main.ts

// D:\typescript\ts-tutorial\ts-abstract-class>node main.js

console.log(john.compensationStatement());//John Doe makes 12000 a month
console.log(jane.compensationStatement());//Jane Doe makes 16000 a month