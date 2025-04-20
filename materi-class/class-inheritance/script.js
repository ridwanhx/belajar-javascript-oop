// # Class Inheritance
// Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
// Untunya, hal tersebut sudah diperbaiki di ES6 dengan fitur Class nya
// Sebuah Class bisa melakukan pewarisan dari Class lainnya dengan menggunakan kata kunci extends
// Di JavaScript, class inheritance sama seperti Prototype Inheritance, hanya bisa memiliki satu parent Class saja.

// Implementasi
// Pembuatan Class Employee
class Employee {
    // Pembuatan Constructor
    constructor(firstName, lastName) {
        // deklarasi properties
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // deklarasi method
    sayHello(name) {
        const fullName = `${this.firstName} ${this.lastName}`;
        return `Hello ${name}, My name is Employee ${fullName}`;
    }
}
// Pembuatan Class Manager yang merupakan extends / turunan dari Class Employee
class Manager extends Employee {
    // deklarasi method
    sayHello(name) {
        return `Hello ${name}, My name is Manager ${this.firstName} ${this.lastName}`;
    }
}
// instansiasi object
const employee1 = new Employee('Muhamad', 'Ridwan');
const manager1 = new Manager('Eko', 'Khannedy');
// output
console.info(employee1.sayHello('Lorem'));
console.info(manager1.sayHello('Ipsum'));