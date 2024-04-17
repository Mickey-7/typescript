// reference : https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
class Person1 {
    private _age!: number;
    private _firstName!: string;
    private _lastName!: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error("The age is invalid");
        }
        this._age = theAge
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        if (!value) {
            throw new Error('Invalid first name.');
        }
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        if (!value) {
            throw new Error('Invalid last name.');
        }
        this._lastName = value;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error("Invalid name format: first last ");

        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// D:\typescript\ts-tutorial\ts-getters-setters>npx tsc Person1.ts
// D:\typescript\ts-tutorial\ts-getters-setters>node Person1.js

let person1 = new Person1();
person1.age = 10;
console.log(person1.age)//10

person1.fullName = 'john doe';
console.log(person1.fullName)//john doe

person1.age = 0;
console.log(person1.age)//Error: The age is invalid