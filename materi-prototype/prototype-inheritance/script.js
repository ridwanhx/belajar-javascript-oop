// # Prototype Inheritance
// Sekarang kita sudah tahu, bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah Object prototype
// Pertanyaannya sekarang adalah bagaimana jika kita ingin melakukan inheritance ke Prototype lain?
// Hal ini juga bisa dilakukan, namun agak sedikit tricky, karena hal ini sebenarnya untuk JavaScript modern, tidak direkomendasikan lagi praktek OOP menggunakan Prototype, karena di ES6 sudah dikenalkan kata kunci class yang akan nanti dibahas di chapter tersendiri

// Implementasi
// Penulisan Inheritance yang salah !
function Student(name) {
    // deklarasi properties
    this.name = name;
}

function Lecture(name) {
    // deklarasi properties
    this.name = name;
}

// melakukan Inheritance pada prototype
Lecture.prototype = Student.prototype;  // sesuai pada judul diatas, ini merupakan contoh penulisan Inheritance / pewarisan Prototype yang salah

// melakukan pemanggilan prototype
Lecture.prototype.sayHello = function (name) {
    return `Hello ${name}, my name is Lecture ${this.name}`;
}

Student.prototype.sayHello = function (name) {
    return `Hello ${name}, My name is Student ${this.name}`
}

// Instansiasi object
console.info(`------------ cara salah -----------------`);
const student1 = new Student('Hanny');
console.info(student1.sayHello('Ridwan'));  // Hello Ridwan, my name is Student Hanny

const lecture1 = new Lecture('Sandhika');
console.info(lecture1.sayHello('Walter'));  // Hello Walter, my name is Student Sandhika; harusnya (Hello Walter, my name is Lecture Sandhika)

// Kenapa penulisan perawisan prototype salah?
// Lecture.prototype = Student.prototype;
// karena dari penulisan diatas, yang kita lakukan adalah seakan-akan me replace Lecture prototype menjadi Student prototype. Maka dari itu, karena Lecture prototype kita ubah menjadi Student prototype, pada hasil output yang seharusnya Lecture Sandhika, malah menjadi Student Sandhika, itu karena kita seolah me-replace bulat-bulat Lecture.prototype dengan Student.prototype, begitupun sebaliknya / kode nya kita balik kan.


// Lalu bagaimana cara penulisan pewarisan prototype yang benar?
// Implementasi
function Employee(name) {
    this.name = name;
}
function Manager(name) {
    this.name = name;
}

// penulisan pewarisan prototype yang seharusnya
Manager.prototype = Object.create(Employee.prototype);

// inisiasi property baru untuk masing-masing object
Manager.prototype.sayHello = function (name) {
    return `Hello ${name}, my name is Manager ${this.name}`;
}
Employee.prototype.sayHello = function (name) {
    return `Hello ${name}, my name is Employee ${this.name}`;
}

// Instansiasi Object
const manager1 = new Manager('Eko');
const employee1 = new Employee('Sandhika');

// cetak hasil
console.info();
console.info(`------------ cara benar -----------------`);
console.info(manager1.sayHello('Muhamad'));
console.info(employee1.sayHello('Ridwan'));