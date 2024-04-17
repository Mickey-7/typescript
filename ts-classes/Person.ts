// reference : https://www.typescripttutorial.net/typescript-tutorial/typescript-class/

class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

let persona = new Person('abc', 'def', 'ghi')


// D:\typescript\ts-tutorial\ts-classes>npx tsc Person.ts
// D:\typescript\ts-tutorial\ts-classes>node Person.js
console.log(persona);// Person { ssn: 'abc', firstName: 'def', lastName: 'ghi' }
console.log(persona.getFullName())//def ghi