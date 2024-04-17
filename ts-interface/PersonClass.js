var PersonClass = /** @class */ (function () {
    function PersonClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonClass.prototype.toJSON = function () {
        return JSON.stringify({ firstName: this.firstName, lastName: this.lastName });
    };
    return PersonClass;
}());
// D:\typescript\ts-tutorial\ts-interface>npx tsc ClassTypeInterface.ts PersonClass.ts
var personClass = new PersonClass('John', 'Doe');
console.log(personClass.toJSON());
