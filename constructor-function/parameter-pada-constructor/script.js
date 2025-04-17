// # Parameter di Constructor Function
// Karena dalam Javascript, Class adalah berbentuk function, jadi secara default, function tersebut tentunya bisa memiliki parameter
// Constructor Function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat ketika kita membuat Object, kita bisa mengirim langsung data lewat parameter di Constructor Function tersebut

// Implementasi
function Person( firstName, lastName )
{
    // deklarasi properties
    this.firstName = firstName;
    this.lastName = lastName;
    // deklarasi properties dengan value method/function
    this.sayHello = function (name) {
        const fullName = `${this.firstName} ${this.lastName}`;
        return `Hello ${name}, My name is ${fullName}`;
    }
}
// Instansiasi Object Person
const person1 = new Person('Muhamad', 'Ridwan');    // mengirimkan nilai untuk parameter
console.info(person1.sayHello('Eria'));