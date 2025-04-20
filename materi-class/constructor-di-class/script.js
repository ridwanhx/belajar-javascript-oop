// # Constructor di Class
// Karena bentuk constructor function mirip dengan function, jadi kita bisa menambahkan parameter pada constructor function, lantas bagaimana dengan class ?
// Di class juga kita bisa menambahkan constructor, dimana dengan menggunakan constructor, kita juga bisa menambahkan parameter saat pertama kali membuatnya
// Untuk membuat constructor di class, kita bisa menggunakan kata kunci constructor

// Implementasi
class Person {
    // implementasi pembuatan constructor pada Class Person yang di deklarasikan menggunakan kata kunci class
    constructor(firstName, lastName) {
        // contoh kode yang akan dijalankan di constructor
        const fullName = `${firstName} ${lastName}`;
        console.info(`${fullName}`);
    }
}

const person1 = new Person('Muhamad', 'Ridwan');
console.info(person1);
const person2 = new Person('Rika', 'Desiani');