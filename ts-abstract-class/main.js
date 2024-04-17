"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contractor_1 = require("./Contractor");
var FullTimeEmployee_1 = require("./FullTimeEmployee");
var jane = new Contractor_1.Contractor('Jane', 'Doe', 100, 160);
var john = new FullTimeEmployee_1.FullTimeEmployee('John', 'Doe', 12000);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
