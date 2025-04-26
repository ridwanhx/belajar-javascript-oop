// # Operator instanceof
// Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari Class tertentu atau bukan
// Kita tidak bisa menggunakan operator typeof, karena object dari Class, jika kita gunakan operator typeof, maka hasilnya adalah "object"
// Operator instanceof akan menghasilkan nilai boolean, true jika benar object tersebut adalah instance object tersebut, atau false jika bukan

// Implementasi
// deklarasi kelas Dosen
class Dosen
{
    
}

// deklarasi kelas Mahasiswa
class Mahasiswa extends Dosen
{

}

// instansiasi object
const dosen1 = new Dosen();
const mahasiswa1 = new Mahasiswa();

// lihat output
console.info(dosen1 instanceof Dosen);  // true
console.info(dosen1 instanceof Mahasiswa);  // false
console.info(mahasiswa1 instanceof Mahasiswa);  // true
console.info(mahasiswa1 instanceof Dosen);  // sebelumnya false, karena kita lakukan extends ke kelas Dosen, hasilnya jadi true
// jika kita menggunakan type of untuk berharap menghasilkan nilai yang sama seperti diatas
console.info(typeof dosen1);    // object
console.info(typeof mahasiswa1);    // object


// Operator instanceof di Class Inheritance
// Operator instanceof juga mendukung Class Inheritance, artinya instanceof juga bisa digunakan untuk mengecek, apakah sebuah Object adalah instance dari class tertentu, atau turunan dari class tertentu?

// Implementasi: kita akan menambahkan extends dari kelas Mahasiswa ke kelas Dosen
console.info('---- instanceof class inheritance ----');
console.info(mahasiswa1 instanceof Mahasiswa);  // true
console.info(mahasiswa1 instanceof Dosen);  // true, karena kelas Mahasiswa adalah turunan dari Dosen
