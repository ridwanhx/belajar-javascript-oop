// # Pengenalan Object Oriented Programming
// Apa itu Object Oriented Programming?
// Object Oriented Programming adalah sudut pandang bahasa pemograman yang berkonsep "object"
// Ada banyak sudut pandang bahasa pemograman, namun OOP adalah yang sangat populer saat ini
// Ada beberapa istilah yang perlu dimengerti dalam OOP, yaitu: Object dan Class


// Apa itu Object?
// Object adalah data yang berisi field / properties / attributes dan method / function / behavior


// Apa itu Class?
// Class adalah blueprint, prototype atau cetakan untuk membuat Object
// Sebelumnya pada Javascript Dasar, kita pernah mendeklarasikan Object, namun Object tersebut di deklarasikan secara langsung begitu saja selayaknya kita mendeklarasikan Array, String, dan lainnya
// Sedangkan dalam konsep OOP, sebelum kita mendeklarasikan suatu Object, kita perlu membuat Class nya terlebih dahulu
// Class berisikan deklarasi semua properties dan function yang dimiliki oleh Object
// Setiap Object selalu dibuat dari Class
// Dan sebuah Class bisa membuat Object tanpa batas


// Contoh ilustrasi penggambaran Class dan Object
// Class dan Object: Person
/* 
Class Person {
    // properties
    String firstName,
    String lastName
    
    // method / function
    String sayHello(String name)
    String sayGoodBye(String name)
}
*/

/*
Create -> Object 1:
firstName = "Muhamad",
lastName = "Ridwan"
*/

/*
Create -> Object 2:
firstName = "John",
lastName = "Doe"
*/

/*
Create -> Object 3:
firstName = "Ignasya",
lastName = "Claravelya"
*/

/* dan seterusnya... */

// Untuk gambaran ilustrasi lebih detail, bisa kamu lihat di file gambar di folder ini.


// OOP di JavaScript
// JavaScript sendiri sebenarnya sejak awal dibuat sebagai bahasa prosedural, bukan bahasa pemograman berorientasi objek
// Oleh karena, implementasi OOP di Javascript memang tidak sedetail bahasa pemograman lain yang memang dari awal merupakan bahasa pemograman OOP seperti Java atau C++