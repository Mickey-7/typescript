import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName)
    }
    getSalary(): number {
        // throw new Error("Method not implemented.");
        return this.salary
    }

}


// D:\typescript\ts-tutorial\ts-abstract-class>npx tsc Employee.ts Contractor.ts FullTimeEmployee.ts
