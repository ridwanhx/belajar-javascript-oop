// # Kata Kunci Class
// Sejak EcmaScript versi 6, diperkenalkan kata kunci baru, yaitu class, ini merupakan kata kunci yang digunakan untuk membuat class di JavaScript
// Dengan kata kunci class, kita tidak perlu lagi menggunakan constructor function seperti yang kita lakukan sebelumnya untuk membuat Class

// Implementasi
// pembuatan class Person menggunakan kata kunci class
class Person {

}

// menambahkan property baru kedalam prototype Object Class Person
Person.prototype.sayMyName = function (name) {
    return (name !== 'Heisenberg') ? 'Wrong, My name is Heisenberg.' : 'You god damn right!';
}

// instansiasi object Person
const person1 = new Person();
console.info(person1);
console.info(person1.sayMyName('Heisenberg'));
