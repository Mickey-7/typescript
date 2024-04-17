function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.ssn, " - ").concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person3 = {
    ssn: '171-28-0926',
    firstName: 'John',
    middleName: 'K.',
    lastName: 'Doe'
};
console.log(getFullName(person3));
