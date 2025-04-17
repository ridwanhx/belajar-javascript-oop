// # Property di Constructor Function
// Sebenarnya setelah kita membuat Object, kita bisa dengan mudah menambahkan property ke dalam Object tersebut hanya dengan menggunakan nama variabel nya, diikuti tanda titik (.) dan nama property nya
// Namun jika seperti itu, alhasil, constructor function yang sudah kita buat tidak terlalu berguna, karena property nya hanya ada di Object yang kita tambahkan property
// Untuk menambahkan property di dalam semua Object yang dibuat dari Constructor Function, kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya

// Implementasi
function Person()
{
    // deklarasi properties
    this.firstName = '';
    this.lastName = '';
}
// instansiasi Object person1
const person1 = new Person();
person1.firstName = 'Muhamad';  // menambahkan nilai pada property

// instansiasi Object person2
const person2 = new Person();
person2.lastName = 'Eria';  // menambahkan nilai pada property

console.info(person1);  // Person{ firstName: 'Muhamad', lastName: '' }
console.info(person2);  // Person { firstName: '', lastName: 'Eria' }