// # Error Handling
// Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti
// Di JavaScript, kita bisa menangkap jika terjadi error
// Kita bisa menggunakan try catch statement untuk menangkap error
// Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
// Jika tidak terjadi error, block catch tidak akan dieksekusi

// penjelasan konsep / cara kerja try catch
/*
- Di dalam block try, kita masukkan kode yang mungkin menyebabkan error.
- Kalau ada error, program langsung lompat ke block catch.
- Kode setelah error di dalam try tidak dijalankan.
- Error yang terjadi ditangkap oleh catch dan disimpan dalam variabel.
- Di block catch, kita bisa menentukan apa yang mau dilakukan saat error terjadi.
*/

// Implementasi
class MathUtil
{
    static sum(...numbers) {
        let total = 0;

        if (numbers.length === 0) {
            throw Error('Total parameter yang dikirimkan tidak boleh 0');
        }

        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

// menjalankan statement trycatch
// block try
try {
    // memasukkan baris program yang berkemungkinan akan menghasilkan error
    console.info(MathUtil.sum());
    // jika baris program diatas menghasilkan error, baris program berikut tidak akan di eksekusi
    // baris kode program berikut hanya akan di eksekusi bila mana tidak terbukti baris program diatasnya menghasilkan error
    console.info('Kode program ini tidak akan dieksekusi');
    // block catch
    // menangkap error yang diterima dari block try, kemudian menyimpannya kedalam variabel bernama error (tentu namanya boleh bebas sesuai selera)
    // singkatnya, block catch ini tidak akan dieksekusi jika pada block try nya tidak menghasilkan error
} catch (error) {
    // baris kode program ini akan mengembalikan pesan errornya
    console.error(`Pesan kesalahan: ${error.message}`);
} finally {
    console.info('Ini adalah pesan dari block finally');
}

console.info('Baris kode program ini masih tetap akan dieksekusi');


// Kata kunci finally
// Kadang kita ingin melakukan sesuatu entah itu ketika terjadi error ataupun tidak
// Dalam block try catch, kita bisa menambahkan block finally
// Block finally ini akan selalu dieksekusi setelah try catch selesai, entah terjadi error ataupun tidak, block finally akan selalu di eksekusi
// implementasinya bisa dilihat diatas


// Try Finally
// Kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch
// Biasanya ini digunakan dalam kasus tertentu

// Implementasi
// deklarasi kelas Counter
class Counter
{
    // inisiasi private field/attr
    #counter = 1;
    // deklarasi method
    next() {
        // menjalankan block try-finally
        try {
            // mengembalikan nilai counter saat ini
            return this.#counter;
        } finally {
            // baris kode program ini akan selalu dijalankan, sebanyak pemanggilan yang dilakukan pada instance object nya
            this.#counter++;
        }
    }
}

// instansiasi object
const counter = new Counter();
console.info(counter.next());   // 1, hasil dari block finally yang di eksekusi
console.info(counter.next());   // 2, hasil dari block finally yang di eksekusi
console.info(counter.next());   // 3, hasil dari block finally yang di eksekusi