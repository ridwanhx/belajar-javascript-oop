// # Method di Constructor Function
// Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam Constructor Function
// Jika kita tambahkan method di Constructor Function, secara otomatis Object yang dibuat akan memiliki method tersebut

// Implementasi
function Person()
{
    // deklarasi properties
    this.firstName = '';
    this.lastName = '';

    // deklarasi property dengan method sebagai value nya
    // deklarasi method menggunakan penulisan anonymous function
    this.sayHello = function (name) {
        const fullName = `${this.firstName} ${this.lastName}`;
        return `Hello ${name}, My name is ${fullName}`;
    }
}
// instansiasi object Person
const person1 = new Person();
person1.firstName = 'Muhamad';
person1.lastName = 'Ridwan';
console.info(person1.sayHello('Eria'));