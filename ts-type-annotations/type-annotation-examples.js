// string type
var firstName = 'John';
// number type
var age = 25;
// boolean type
var active = true;
// arrays type
var names = ['ed', 'sheeran', 'pete', 'david'];
// objects type
var person;
// valid
person = {
    name: 'John',
    age: 25
};
// function argument & return types
var greeting;
greeting = function (name) {
    return "hi ".concat(name);
};
console.log(firstName); // John
console.log(age); // 25
console.log(active); // true
console.log(names); // [ 'ed', 'sheeran', 'pete', 'david' ]
console.log(person); // { name: 'John', age: 25 }
console.log(greeting('typescript'));
