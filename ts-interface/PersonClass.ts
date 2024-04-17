class PersonClass implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
    toJSON(): string {
        return JSON.stringify(
            { firstName: this.firstName, lastName: this.lastName }
        );
    }


}
// D:\typescript\ts-tutorial\ts-interface>npx tsc ClassTypeInterface.ts PersonClass.ts
// D:\typescript\ts-tutorial\ts-interface>node PersonClass.js

let personClass = new PersonClass('John', 'Doe');
console.log(personClass.toJSON());//{"firstName":"John","lastName":"Doe"}