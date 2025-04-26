// # Static Method
// Kata kunci static juga tidak hanya bisa ditambahkan di field, tapi juga di method
// Jika kita tambahkan di method, artinya method tersebut jadi milik Class nya, bukan prototype
// Dan untuk mengakses method tersebut, kita juga bisa lakukan seperti cara kita mengakses static class field

// Implementasi
// deklarasi kelas dengan nama MathUtil
class MathUtil
{
    // deklarasi static method untuk melakukan penjumlahan berdasarkan nilai-nilai yang disimpan oleh numbers
    static sum(...numbers) {
        // deklarasi var total dengan default value yaitu adalah 0
        let total = 0;
        // deklarasi perulangan for-of | penjelasan ada pada pembahasan materi "Javascript Dasar" sebelumnya
        for (const number of numbers) {
            // jumlahkan nilai total saat ini dengan number
            total = total + number;
        }
        // kembalikan nilai total
        return total;
    }
}
// pemanggilan static method
console.info(MathUtil.sum(1,2,3,4,5));  // penulisan biasa
console.info(MathUtil.sum(...[1,2,3,4,5])); // penulisan dengan teknik spread operator