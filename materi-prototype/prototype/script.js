// # Prototype
// JavaScript sebelumnya dikenal dengan pemograman berbasis prototype
// Memang agak sedikit membingunkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di JavaScript
// Pada chapter ini, kita akan bahas tentang konsep prototype


// Prototype Inheritance
// Saat kita membuat object dari Constructor Function, Object tersebut disebut instance, semua property (baik itu value ataupun method), akan berada di dalam instance Object nya
// Setiap kita membuat sebuah Constructor Function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat Constructor Function bernama Person, maka akan ada Person.prototype
// Saat kita membuat sebuah Object Instance, secara otomatis Object tersebut adalah turunan dari Constructor.prototype nya
// Untuk mengakses prototype milik sebuah instance yang sudah kita buat, kita bisa menggunakan __proto__

// Implementasi
function Person(firstName, lastName) {
    // deklarasi properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function () {
        const fullName = `${firstName} ${lastName}`;
        return `Hello, ${fullName}`;
    }
}

// instansiasi object
const person1 = new Person('Muhamad', 'Ridwan');
const person2 = new Person('Eko', 'Khannedy');

console.info(person1);
console.info(person2);


// Diagram Prototype
// Saat kita membuat sebuah Object Instance (pada implementasi diatas adalah person1 dan person2) dari sebuah Constructor Function (pada implementasi diatas adalah Person), maka secara otomatis akan menjadi turunan dari prototype si Constructor Function nya.


// Menambah Property ke Prototype
// Property mirip seperti hal nya Object biasanya / tipe data object, dimana kita bisa menambah Property baik itu value ataupun method
// Saat kita menambah sebuah property ke Prototype, secara otomatis, semua Object Instance yang merupakan turunan dari prototype tersebut akan memiliki prototype tersebut

// Implementasi
// menambahkan property baru kedalam instance object person1
person1.sayAdios = function () {
    return `Adios, ${this.lastName}`;
}

// ini hanya berlaku untuk instance Object person1
console.info(person1.sayAdios());


// Nah, lalu bagaimana caranya agar hal yang kita implementasikan diatas juga bisa berlaku untuk instance object lainnya ?

// Implementasi
// membuat property baru untuk semua instance object menggunakan prototype
Person.prototype.sayGoodBye = function () {
    return `Good Bye, ${this.lastName}`;
}
// kita juga bisa menambahkan lebih dari satu kali
Person.prototype.sayMyName = function ( name ) {
    return (name !== 'heisenberg') ? `You're not Heisenberg` : `You God Damn Right!`;
}

console.info(person1.sayGoodBye());
console.info(person2.sayGoodBye());
console.info(person1.sayMyName('heisenberg'));
console.info(person2.sayMyName('jimmy'));


// yang kita lakukan pada implementasi diatas, itu bukan untuk menambahkan property kedalam instance object nya, melainkan kedalam prototype nya (bisa dilihat dalam console browser untuk lebih lanjut)


// Cara Kerja Prototype Inheritance
// Bagaimana bisa property di prototype ini dapat diakses dari object instance ?
// Ketika kita mengakses property di object instance, pertama akan di cek apakah instance object tersebut terdapat property tersebut atau tidak, jika tidak maka akan di cek di __proto__ (prototype) nya, jika masih tidak ada, akan di cek lagi di __proto__ (prototype) yang lebih tinggi, begitu juga seterusnya, sampai berakhir di Object Prototype
// lalu apa yang terjadi jika property yang dimaksud sudah ada di instance object nya terlebih dahulu / duplicate
// maka secara otomatis / default JavaScript akan tetap memprioritaskan property yang ada di instance object terlebih dahulu

// Implementasi
// misal disini kita akan menambahkan property baru kedalam instance object, yang dimana nama dari property ini sebelumnya sudah kita deklarasikan didalam property prototype pada implementasi diatas
person1.sayGoodBye = function () {
    return `Sampai Jumpa, ${this.lastName}`;
}

console.info(person1.sayGoodBye()); // Sampai Jumpa, Ridwan