// # Public Class Field
// Biasanya, saat kita ingin menambahkan field (property yang berisi value), kita biasanya tambahkan di Constructor
// Namun, ada proposal di EcmaScript yang mengajukan pembuatan public class field ditempatkan diluar constructor, selevel dengan penempatan method
// Proposal ini masih belum final, namun beberapa browser sudah mendukung nya
// https://github.com/tc39/proposal-class-fields


// Public Class Field
// Dalam proposal tersebut juga disebutkan bahwa EcmaScript akan mendukung access modifier / visibility public dan private
// Public artinya bisa diakses dari luar Class, dan private hanya bisa diakses dari dalam Class saja
// Private class field akan kita bahas di chapter selanjutnya
// Untuk membuat public class field, kita bisa langsung buat nama field dengan value nya selevel dengan method
// Jika kita tidak memasukkan value ke dalam field tersebut, artinya field tersebut memiliki value undefined

// Implementasi
// inisiasi Class User
class User
{
    // deklarasi properties dengan access modifier / visibility nya adalah public (default)
    username;
    password;
    role = 'member';
    // deklarasi constructor
    constructor(username, password, role)
    {
        // deklarasi properties value
        this.username = username;
        this.password = password;
        this.role = role;
    }
    // deklarasi method
    auth() {
        // jika role adalah admin
        if (this.role === 'admin')
            {
                // lakukan pengecekan username & password, tampilkan pesan
                return (this.username === 'admin' && this.password === 'rahasia') ? `Welcome Back, Admin` : 'Username / Password is incorrect';
        // jika role adalah member
    } else if (this.role === 'member') {
        // lakukan pengecekan username & password, tampilkan pesan
        return (this.username === 'ridwan' && this.password === '123456') ? `Welcome Back, ${this.username}` : 'Username / Password is incorrect';
        // jika role tidak diisi / tidak diketahui / tidak terdaftar
        } else {
            return `User not found please register first or activate.`;
        }
    }
}

// instansiasi object
const user1 = new User('ridwan', '123456', 'member');
console.info(user1.auth());