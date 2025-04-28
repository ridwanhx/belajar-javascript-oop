// # Iterable dan Iterator
// Salah satu fitur terbaru di ES6 adalah iterable
// Iterable adalah spesial object yang memiliki standarisasi
// Dengan mengikuti standarisasi Iterable, secara otomatis kita bisa melakukan iterasi terhadap data tersebut dengan menggunakan perulangan for..of
// Jadi apapun yang ada dalam spesifikasi ES6, apapun yang bisa dilakukan iterasi menggunakan perulangan for..of, harus mengikuti standar iterable
// Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain lain


// Pertanyaannya, bagaimana spesifikasi iterable dan bagaimana cara kita membuat sebuah object yang mengikuti standarisasi Iterable ini?


// Kontak Iterable (dalam TypeScript)
/*
    // Mendefinisikan interface Iterable dengan generic type T
    interface Iterable<T> {
    // Harus memiliki method [Symbol.iterator] yang mengembalikan Iterator<T>
    [Symbol.iterator](): Iterator<T>;
    }

    // Mendefinisikan interface Iterator dengan generic type T
    interface Iterator<T> {
    // Harus memiliki method next() yang mengembalikan IteratorResult<T>
    next(): IteratorResult<T>;
    }

    // Mendefinisikan interface IteratorResult dengan generic type T
    interface IteratorResult<T> {
    // value berisi nilai hasil iterasi (bisa tipe apa pun T)
    value: T;
    // done adalah boolean yang menandakan apakah iterasi sudah selesai
    done: boolean;
    }
*/


// Cara kerja Iterable dan Iterator
// Jika kita mengikuti kontrak Iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan perulangan for..of
// Setiap kita melakukan perulangan, object Iterator akan dibuat
// Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena iterator baru akan dibuat terus menerus

// Implementasi
// inisiasi kelas CounterIteratorResult
class CounterIteratorResult
{
    // inisiasi constructor
    constructor(value, done) {
        // inisiasi properties
        this.value = value;
        this.done = done;
    }
}

// inisiasi kelas CounterIterator
class CounterIterator
{
    // deklarasi constructor, menerima 2 parameter yaitu value dan max
    constructor(value, max) {
        // deklarasi properties
        this.value = value;
        this.max = max;
    }

    // deklarasi method next()
    // ilustrasi konsep pembuatan kontrak Iterable dan Iterator pada TypeScript, disederhanakan dalam JavaScript
    next()
    {
        // memulai blok try-finally
        try {
            // jika value lebih besar dari max, maka iterasi selesai
            if (this.value > this.max) {
                // kembalikan object CounterIteratorResult dengan done: true
                return new CounterIteratorResult(this.value, true);
            } else {
                // jika belum selesai, kembalikan object CounterIteratorResult dengan done: false
                return new CounterIteratorResult(this.value, false);
            }
        } finally {
            // setelah next() dipanggil, naikkan nilai value sebanyak 1
            this.value++;
        }
    }
}


// Mendefinisikan class Counter sebagai sebuah Iterable
class Counter
{
    // Constructor menerima 2 parameter: nilai awal (value) dan batas maksimum (max)
    constructor(value, max)
    {
        // Menyimpan nilai awal ke dalam properti instance
        this.value = value;
        // Menyimpan nilai maksimum ke dalam properti instance
        this.max = max;
    }

    // Mendefinisikan method khusus [Symbol.iterator] untuk membuat Counter / kelas ini menjadi iterable
    [Symbol.iterator]() {
        // Setiap kali iterasi dimulai, kembalikan instance baru dari CounterIterator
        return new CounterIterator(this.value, this.max);
    }
}


// Menggunakan counter iterable
// instansiasi object Counter
const counter = new Counter(1, 10);
// jalankan perulangan for..of
for (const element of counter) {
    // tampilkan nilai element ke layar
    console.info(element);
}