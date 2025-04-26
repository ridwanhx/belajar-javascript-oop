// # Static Class Field

// Kata kunci static
// Static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasanya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype
// Berbeda halnya jika kita tambahkan kata kunci static, maka hal tersebut tidak akan terjadi


// Static Class Field
// Jika kita tambahkan static dalam Class Field, secara otomatis Field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri
// Biasanya static field ini digunakan jika kita ingin membuat utility field atau utility function
// Cara mengakses static class field pun tidak lagi melalui object, melainkan lewat class nya
// Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan tetap sama

// Implementasi
class Configuration
{
    static judul = 'Belajar JavaScript OOP';
    static versi = 1.0;
    static author = 'Muhamad Ridwan';
}

const config = new Configuration();
console.info(config);   // Configuration {}
console.info(config.judul)  // undefined | karena field sudah didefinisikan sebagai static field, sehingga sesuai dengan apa yang sudah dijelaskan diatas, kita tidak bisa lagi mengakses field dengan melalui instance object nya.

// lalu, bagaimana cara mengakses field / attribute static nya kalau begitu?
// untuk mengaksesnya, kita cukup panggil langsung sebutkan nama Class nya titik nama field/attr nya | NamaKelas.namaField
console.info(Configuration.judul);
console.info(Configuration.versi);
console.info(Configuration.author);

// Dan perlu diingat, karena kita sudah membuat field diatas menjadi static, format pemanggilannya akan selalu seperti ini
// singkatnya, dengan konsep static ini, ibarat kata kita ingin mengakses field dari suatu kelas, cukup langsung panggil saja nama kelas beserta nama field nya karena sifatnya sudah menjadi global