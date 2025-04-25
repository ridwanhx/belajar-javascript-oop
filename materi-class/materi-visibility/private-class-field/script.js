// # Private Class Field
// Secara default, saat menambahkan field, maka field tersebut bisa diakses dari manapun / public
// Jika kita ingin membuat field yang bersifat private (hanya bisa diakses di dalam class), kita bisa menggunakan tanda # sebelum nama field nya
// Ini dinamakan private class field, dan hanya bisa diakses dari dalam Class saja

// Implementasi
class Counter
{
    // deklarasi private attr
    #nilai = 0;
    // deklarasi method increment | melakukan penambahan nilai pada attr sebanyak 1
    increment() {
        // nilai = nilai + 1;
        return this.#nilai++;
    }
    // deklarasi method decrement | melakukan pengurangan nilai pada attr sebanyak 1
    decrement() {
        // nilai = nilai - 1;
        return this.#nilai--;
    }
    // deklarasi getter
    get() {
        return this.#nilai;
    }
}

const counter1 = new Counter();
counter1.increment();   // +1
counter1.increment();   // +1
counter1.increment();   // +1
counter1.decrement();   // -1
console.info(counter1.get());   // 2
