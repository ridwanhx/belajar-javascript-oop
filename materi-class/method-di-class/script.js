// # Method di Class
// Membuat method di Class sebenarnya bisa dilakukan dengan seperti hal nya cara kita sebelumnya menambahkan method di constructor function
// Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
// Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
// Untungnya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype

// Implementasi
class Person {
    // pembuatan constructor
    constructor(firstName, lastName) {
        // deklarasi properties
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // pembuatan method untuk Class Person
    sayHello() {
        const fullName = `${this.firstName} ${this.lastName}`;
        return `Hello, My name is ${fullName}`;
    }
}
// instansiasi object
const person1 = new Person('Muhamad', 'Ridwan');
const person2 = new Person('Eko', 'Khannedy');
console.info(person1.sayHello());
console.info(person2.sayHello());