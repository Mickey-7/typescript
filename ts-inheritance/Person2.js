"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person2 = void 0;
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person2.prototype.describe = function () {
        return "this is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person2;
}());
exports.Person2 = Person2;
