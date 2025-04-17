// # Constructor Inheritance
// Dalam Constructor, kita biasanya membuat property baik itu berisi value ataupun function seperti yang sebelumnya sudah kita bahas
// Di dalam Constructor, kita bisa memanggil Constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di Constructor lain tersebut
// Untuk memanggil Constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)

// Implementasi
function Person(firstName, lastName, age) {
  // deklarasi properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // deklarasi property dengan method sebagai value
  this.sayHello = function (name) {
    const fullName = `${firstName} ${lastName}`;
    return `Hello ${name}, My name is ${fullName}`;
  };
}

function Mahasiswa(firstName, lastName, age, npm, email, jurusan) {
  // Memanggil constructor Person dan mewarisi properti dari sana
  Person.call(this, firstName, lastName, age);

  // Menambahkan properti khusus untuk Mahasiswa
  this.npm = npm;
  this.email = email;
  this.jurusan = jurusan;

  // Method untuk menampilkan profil lengkap
  this.profile = function () {
    const fullName = `${firstName} ${lastName}`;
    return `Nama : ${fullName} (${npm}), ${age} tahun,
Jurusan : ${jurusan},
Email : ${email}`;
  };
}

// Instansiasi object Person
const person1 = new Person("Muhamad", "Ridwan", 21);
console.info(person1);
console.info(person1.sayHello("Eria"));

// Instansiasi Object Mahasiswa
const mahasiswa1 = new Mahasiswa(
  "Dwight", // firstName
  "Schrute", // lastName
  32, // age
  "623220012", // npm
  "schrute@email.com", // email
  "Pertanian" // jurusan
);
console.info(mahasiswa1);
console.info(mahasiswa1.sayHello("Eko"));   // karena semua property yang ada di Person sudah kita copy, kita juga bisa memanggil property sayHello yang sudah kita deklarasikan di Person
console.info(mahasiswa1.profile());
