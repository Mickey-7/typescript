"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee2_1 = require("./Employee2");
var employee = new Employee2_1.Employee2('John', 'Doe', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
// overriding
console.log(employee.describe());
