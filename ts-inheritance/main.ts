// https://www.typescripttutorial.net/typescript-tutorial/typescript-inheritance/

import { Employee2 } from "./Employee2";

let employee = new Employee2('John', 'Doe', 'Web Developer');

//D:\typescript\ts-tutorial\ts-inheritance>npx tsc Employee2.ts Person2.ts main.ts
// D:\typescript\ts-tutorial\ts-inheritance>node main.js

console.log(employee.getFullName());//John Doe
//before adding describe method on Employee2
console.log(employee.describe());//this is John Doe
// overriding
console.log(employee.describe());//this is John DoeI'am a Web Developer
