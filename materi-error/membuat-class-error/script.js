// # Membuat Class Error Secara Manual
// Walaupun JavaScript sudah memiliki standar class Error
// Namun alangkah baiknya, kita membedakan tiap jenis error
// Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
// Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error

// Implementasi
// deklarasi kelas ValidationError yang extends / turunan dari class Error nya milik si JavaScript
class ValidationError extends Error
{
    // deklarasi constructor
    constructor(message, field) {
        // mengirimkan nilai yang disimpan di parameter message diatas, untuk kemudian dikirimkan ke parameter message di kelas parent nya (Error)
        super(message);
        // inisialisasi properties / attr / field
        this.field = field;
    }
}
// deklarasi kelas User
class User
{
    // deklarasi constructor
    constructor(username, password)
    {
        // deklarasi properties
        this.username = username;
        this.password = password;
    }
    // deklarasi method
    auth() {
        // deklarasi variabel lokal
        const username = 'ridwan';
        const password = 'rahasia';

        // jika salahsatu diantara username / password tidak sama dengan nilai yang ditetapkan pada masing-masing variabel diatas, maka
        if (this.username !== username || this.password !== password) {
            // lempar instance ValidationError, dengan mengirimkan message pada parameter petama, dan nama field yang mana yang terdapat error nya pada parameter kedua
            // penulisan parameter kedua menggunakan ternary operator, dimana akan menangkap salahsatu error, apakah di bagian username atau passwordnya
            throw new ValidationError('Username / Password salah!', (this.username !== username) ? 'username' : 'password');
        }
        // kembalikan string berikut jika kondisi diatas tidak terpenuhi
        return `Welcome Back, ${username}`;
    }
}

// instansiasi object
// const user1 = new User('ridwan', '123');
// try {
//     console.info(user1.auth());
//     console.info('Jalankan kode ini jika kode program diatas tidak error');
// } catch (error) {
//     console.info(`Pesan ${error}`);
// }


// Kelebihan dari pembuatan kelas Error secara manual ini salahsatu nya adalah kita bisa menyisipkan pesan khusus terkait dimana letak spesifik pesan error nya ini berada, misal

// Implementasi
// instansiasi object
const user1 = new User('ridwan', '123');
// jalankan block try
try {
    // masukkan block program yang berpotensi menghasilkan kesalahan / error
    console.info(user1.auth());
    // tangkap error oleh block catch, lalu simpan kedalam var error
} catch (error) {
    // lakukan pengecekan apakah variabel error diatas merupakan instansiasi dari kelas ValidationError
    if (error instanceof ValidationError) {
        // jika ya, cetak string berikut ke layar
        console.info(`Error terjadi pada field ${error.field}, dengan pesan error : ${error.message}`);
    } else {
        // jika tidak, cetak string berikut ke layar
        console.info(`Pesan ${error}`);
    }
}