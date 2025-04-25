// # Private Method
// Sama seperti field, terdapat proposal juga untuk menambahkan fitur private method di EcmaScript
// Dengan demikian, Access Modifier private juga bisa digunakan di method
// Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut sifatnya adalah private
// Namun perlu diingat, fitur ini masih dalam tahapan, belum benar-benar menjadi standard EcmaScript, jadi mungkin tidak semua browser mendukung fitur ini

// Implementasi
// deklarasi kelas Person
class Person
{
    // deklarasi method say yang menerima parameter bernama name
    say(name) {
        // jika nama tersedia (tidak bernilai null atau undefined)
        if (name) {
            // kembalikan nilai yang dikembalikan oleh private method sayWithName
            return this.#sayWithName(name);
        // jika nama tidak tersedia (bernilai null atau undefined)
        } else {
            // kembalikan nilai yang dikembalikan oleh private method sayWithoutName
            return this.#sayWithoutName();
        }
    }

    // deklarasi private method sayWithName
    #sayWithName(name) {
        // kembalikan string berikut
        return `Welcome Back, ${name}`;
    }

    // deklarasi private method sayWithoutName
    #sayWithoutName() {
        // kembalikan string berikut
        return `Welcome Back!`
    }
}

// instansiasi object kelas Person
const person1 = new Person();
// jika yang dikirim adalah string berisi nama
console.info(person1.say('Muhamad Ridwan'));    // Welcome Back, Muhamad Ridwan
// jika yang dikirim adalah null
console.info(person1.say(null));    // Welcome Back!
// jika yang dikirim adalah undefined
console.info(person1.say(undefined));   // Welcome Back!
// jika tidak ada argument yang dikirimkan
console.info(person1.say());    // Welcome Back!