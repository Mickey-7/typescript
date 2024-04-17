var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error("The age is invalid");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (!value) {
                throw new Error('Invalid first name.');
            }
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            if (!value) {
                throw new Error('Invalid last name.');
            }
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Person1.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    Object.defineProperty(Person1.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        set: function (name) {
            var parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error("Invalid name format: first last ");
            }
            this.firstName = parts[0];
            this.lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
// D:\typescript\ts-tutorial\ts-getters-setters>npx tsc Person1.ts
// D:\typescript\ts-tutorial\ts-getters-setters>node Person1.js
var person1 = new Person1();
person1.age = 10;
console.log(person1.age); //10
person1.fullName = 'john doe';
console.log(person1.fullName);
person1.age = 0;
console.log(person1.age); //Error: The age is invalid
