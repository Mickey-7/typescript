export class Person2 {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    describe(): string {
        return `this is ${this.firstName} ${this.lastName}`
    }
}