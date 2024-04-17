function getFullName(person: PersonInterface) {
    if (person.middleName) {
        return `${person.ssn} - ${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`
}

let person3 = {
    ssn: '171-28-0926',
    firstName: 'John',
    middleName: 'K.',
    lastName: 'Doe'
}

// D:\typescript\ts-tutorial\ts-interface>npx tsc Person3.ts PersonInterface.ts
// D:\typescript\ts-tutorial\ts-interface>node Person3.js

console.log(getFullName(person3))//171-28-0926 - John K. Doe