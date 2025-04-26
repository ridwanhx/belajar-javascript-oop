
// # Error
// Saat membuat aplikasi, sudah tentu kita tidak akan terhindar dari yang namanya error
// Di JavaScript, Error merupakan sesuatu yang sudah standar
// Banyak sekali class error di JavaScript, namun semua class error di JavaScript selalu berujugn di class Error, artinya class Error adalah superclass untuk semua jenis error di JavaScript
// Contoh class error yang terdapat di JavaScript contohnya SyntaxError, TypeError, EvalError, dan masih banyak lagi


// Throw Error
// Saat kita membuat instance object dari class Error, tidak lantar otomatis terjadi error
// Kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error terjadi, atau istilahnya adalah melempar error (throw error)
// Untuk melempar error, kita bisa gunakan kata kunci throw, diikuti dengan instance object error nya
// Jika terjadi error maka otomatis kode program akan terhenti, dan kita bisa melihat detail error nya di console di aplikasi browser kita

// Implementasi
class MathUtil
{
    static sum(...numbers) {
        let total = 0;
        if (numbers.length === 0) {
            throw new Error('Total parameter yang dikirimkan harus lebih dari 0!');
        }
        for (const number of numbers) {
            total += number;
        }
        return total;
    }

    static factorial(value) {
        if (value == 0) {
            return 1;
        } else {
            return value * this.factorial(value - 1);
        }
    }
}

console.info(MathUtil.factorial(5));    // 120
console.info(MathUtil.factorial(6));    // 720

// Implementasi sesungguhnya
console.info(MathUtil.sum());   // Error: Total parameter yang dikirimkan harus lebih dari 0! ... dan dibawah pesan ini kita bisa melihat di baris mana error terjadi dengan mengklik pesan yang biasanya berawalan at, seperti berikut:
// at MathUtil.sum (d:\Pemograman\PZN\JavaScript\belajar-javascript-oop\materi-error\error\script.js:21:19)

console.info(MathUtil.sum(...[1, 2, 3, 4, 5])); // harusnya outputnya bernilai 15, namun karena kode diatas menjalankan error, maka output ini tidak akan di eksekusi / di jalankan.