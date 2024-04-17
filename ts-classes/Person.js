var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var persona = new Person('abc', 'def', 'ghi');
// D:\typescript\ts-tutorial\ts-classes>npx tsc Person.ts
// D:\typescript\ts-tutorial\ts-classes>node Person.js
console.log(persona); // Person { ssn: 'abc', firstName: 'def', lastName: 'ghi' }
console.log(persona.getFullName());
