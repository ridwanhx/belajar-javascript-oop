// # Property di Class
// Sama seperti pada constructor function, dalam class pun kita bisa menambahkan property
// Karena hasil akhirnya adalah sebuah object, jadi menambahkan property di class bisa juga dilakukan di instance object nya

// Implementasi
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('Muhamad', 'Ridwan');
console.info(person1);