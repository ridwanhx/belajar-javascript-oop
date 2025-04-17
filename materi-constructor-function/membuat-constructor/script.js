// # Membuat Constructor Function
// Membuat Object
// Sebenarnya kita sudah belajar tipe data object pada materi Javascript Dasar sebelumnya, dengan cara membuat variabel dengan tipe data object
// Namun pembuatan object menggunakan tipe data object, akan membuat object yang selalu unik, sedangkan dalam OOP, biasanya kita akan membuat class sebagai cetakan, sehingga kita bisa membuat object dengan karakteristik yang sama berkali kali, tanpa harus mendeklarasikan object berkali-kali seperti menggunakan tipe data object


// Membuat Object dengan tipe data object
// const person1 = {
//     firstName: 'Muhamad',
//     lastName: 'Ridwan',
//     age: 21,    // misal disini kita deklarasikan property age / umur untuk person1
// }

// const person2 = {
//     firstName: 'Meysha',
//     lastName: 'Berliana',
//     hobby: 'streaming', // sedangkan disini kita deklarasikan property hobby untuk person1
// }

// dst..

// Berdasarkan pada ilustrasi pembuatan Object menggunakan tipe data object diatas, seharusnya sudah bisa dilihat bahwa pendeklarasian Object dari masing masing object diatas akan bersifat unik, karena baik person1 ataupun person2 tidak mempunyai standarisasi apapun mengenai property didalamnya itu harus seperti apa


// Membuat Constructor Function
// Sebelum EcmaScript versi 6, pembuatan class, biasanya menggunakan function. Hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa pemograman yang fokus ke OOP, melainkan memang ditujukan untuk menjadi bahasa pemograman prosedural / berbasis function
// Untuk membuat class di JavaScript lama, kita bisa membuat function
// Function ini kita sebut dengan Constructor function

// Implementasi
// Pembuatan Constructor Function cara lama
function Person() { // untuk mengindikasikan bahwa deklarasi function ini ditujukan untuk mendeklarasikan sebuah Class, penulisannya harus di awali karakter uppercase 

}


// Membuat Object dari Constructor Function
// Setelah kita membuat Class, jika kita ingin membuat Object dari Class tersebut, kita bisa menggunakan kata kunci new, lalu diikuti dengan nama Constructor Function nya
// Dikarenakan kita sebelumnya sudah mendeklarasikan Class Person, selanjutnya kita akan langsung mengimplementasikan pembuatan Object nya

// Implementasi
const person1 = new Person();
const person2 = new Person()