// # Setter dan Getter di Class
// Class juga mendukung pembuatan setter dan getter
// Perlu diingat, setter dan getter ini akan berada di prototype, bukan di instance object

// Implementasi
// inisiasi class Person
class Person
{
    // deklarasi constructor
    constructor(firstName, lastName) {
        // deklarasi properties
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // deklarasi setter
    set fullName(value) {
        // deklarasi var untuk menyimpan nilai yang disimpan oleh value, kemudian memecahnya menjadi array dengan delimiternya yaitu adalah spasi
        const result = value.split(" ");
        // inisiasi nilai baru kedalam properties
        this.firstName = result[0];
        this.lastName = result[1];
    }
    // deklarasi getter
    get fullName() {
        // aksi
        const fullName = `${this.firstName} ${this.lastName}`;
        return `${fullName}`;
    }
}

// instansiasi object
const person1 = new Person('Muhamad', 'Ridwan');
console.info(person1.fullName); // memanggil getter

person1.fullName = 'Gustavo Fring'; // memanggil setter
console.info(person1.fullName);