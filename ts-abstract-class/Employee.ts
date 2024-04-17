export abstract class Employee {
    constructor(private firstName: string, private lastName: string) {

    }

    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month`
    }
}
