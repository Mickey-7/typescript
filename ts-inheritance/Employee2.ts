import { Person2 } from "./Person2";

export class Employee2 extends Person2 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {
        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'am a ${this.jobTitle}`
    }
}