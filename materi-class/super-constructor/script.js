// # Super Constructor
// Class Inheritance sifatnya seperti Prototype Inheritance
// Bagaimana dengan Constructor Inheritance? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi Constructor lain dengan tujuan agar property di Constructor lain bisa ditambahkan ke instance object ini
// Dalam kasus ini, jika kita ingin mencapai hasil yang sama (memanggil constructor lain menggunakan call), kita bisa menggunakan kata kunci super di dalam constructor
// Kata kunci super digunakan untuk memanggil Constructor dari super class
// Jika di child class kita membuat constructor, maka wajib memanggil parent constructor, walaupun di parent tidak ada Constructor

// Implementasi
// inisiasi Class Person
class Person {
  // deklarasi constructor untuk Class Person (parent)
  constructor(firstName, lastName) {
    // inisiasi properties
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // deklarasi method
  sayHello(name) {
    //   inisiasi variabel
    const fullName = `${this.firstName} ${this.lastName}`;
    // kembalikan nilai
    return `Hello ${name}, my name is ${fullName}`;
  }
}

// inisiasi Class Mahasiswa yang merupakan turunan dari Class Person (akan mewarisi semua karakteristik Person (constructor, method, properties, dll..))
class Mahasiswa extends Person {
  // deklarasi method
  profileMhs(npm, jurusan) {
    //   kembalikan nilai
    return `Name : ${this.firstName} ${this.lastName}
NPM : ${npm}
Jurusan : ${jurusan}`;
  }
}

// instansiasi object Person
const Person1 = new Person("Muhamad", "Ridwan");
console.info(Person1.sayHello("Schwertz"));

// instansiasi object Mahasiswa
const Mahasiswa1 = new Mahasiswa("Jesse", "Pinkman");
console.info(Mahasiswa1.sayHello("Walter White"));
console.info(Mahasiswa1.profileMhs("623220024", "Manajemen Informatika"));


// Saat kita mendefinisikan constructor di Class turunannya / child class nya, nantinya kita wajib memanggil Constructor yang berada di parent class nya.
// Artinya, jika kita tidak melakukan hal tersebut, maka akan terjadi error
// Seperti yang sudah dijelaskan sebelumnya, cara memanggil nya cukup dengan kata kunci super
// Kita hanya boleh memanggil / mendefinisikan super didalam bagian Constructor nya saja. Selain daripada itu tidak diperbolehkan.

// Implementasi
// inisiasi Class Employee yang merupakan turunan/extends dari Class Person
class Employee extends Person
{
    // deklarasi constructor untuk Class Employee
    constructor(firstName, lastName, salary)
    {
        // pemanggilan constructor di kelas parent nya, yang didalamnya terdapat parameter yaitu parameter2 yang dipakai di constructor parent nya.
        super(firstName, lastName);
        // deklarasi property biasa / property lokal di kelas ini
        this.salary = salary;
    }
    // deklarasi method
    showSalary() {
        // nilai yang dikembalikan
        return `Name : ${this.firstName} ${this.lastName}, Your Salary is ${this.salary}`;
    }
}

const Employee1 = new Employee('Tyler', 'Durden', 5500000);
console.info(Employee1.showSalary());