// string type
let firstName: string = 'John';
// number type
let age: number = 25;
// boolean type
let active: boolean = true;
// arrays type
let names: string[] = ['ed', 'sheeran', 'pete', 'david'];
// objects type
let person: {
    name: string,
    age: number
}
// valid
person = {
    name: 'John',
    age: 25
}
// function argument & return types
let greeting: (name: string) => string;
greeting = function (name: string) {
    return `hi ${name}`;
}

// D:\typescript\ts-tutorial\ts-type-annotations>npx tsc type-annotation-examples.ts
// D:\typescript\ts-tutorial\ts-type-annotations>node type-annotation-examples.js

console.log(firstName)// John
console.log(age)// 25
console.log(active)// true
console.log(names)// [ 'ed', 'sheeran', 'pete', 'david' ]
console.log(person)// { name: 'John', age: 25 }
console.log(greeting('typescript'))//hi typescript
