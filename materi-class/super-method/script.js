// # Super Method
// Selain digunakan untuk memanggil Constructor milik parent class nya, kata kunci super juga bisa digunakan untuk mengakses method parent classnya
// Caranya bisa menggunakan super titik nama function nya / super.namaFunction()
// dengan kata lain, super sebenarnya adalah reference ke parent prototype, mirip seperti __proto__

// Implementasi
// inisiasi Class Mobil (parent class)
class Mobil
{
    // deklarasi constructor
    constructor(machinePower = false) {
        // deklarasi properties
        this.machinePower = machinePower;
    }
    // deklarasi method
    nyalakanMesin()
    {
        // aksi
        this.machinePower = true;
        return "Mesin dinyalakan";
    }
    // deklarasi method
    matikanMesin() {
        // aksi
        this.machinePower = false;
        return "Mesin dimatikan";
    }
}

// inisiasi class Lamborghini yang merupakan kelas turunan dari Mobil
class Lamborghini extends Mobil
{
    // deklarasi constructor
    constructor(machinePower, turbo = false)
    {
        // pemanggilan constructor parent
        super(machinePower);
        // deklarasi properties lokal
        this.turbo = turbo;
    }
    // deklarasi method
    aktifkanTurbo() {
        // aksi
        const statusMesin = super.nyalakanMesin();
        // jika kedua kondisi bernilai true
        if (this.machinePower && this.turbo) {
            return `${statusMesin}, Turbo diaktifkan`;
        // jika property turbo tidak tersedia di kelas ini | false
        } else if (this.turbo === false) {
            return `${statusMesin}, Fitur turbo tidak tersedia`;
        // jika property turbo tersedia di kelas ini, tapi nilainya null | null
        } else {
            return `${statusMesin}, Turbo belum siap untuk diaktifkan`;
        }
    }
}

class Avanza extends Mobil
{
    constructor(machinePower) {
        super(machinePower);
        this.tipe = 'mobil keluarga';
    }

    deskripsi() {
        const kondisi = (this.machinePower) ? "menyala" : "mati";
        return `Ini adalah Avanza, tipe ${this.tipe}, kondisi mesin saat ini ${kondisi}`;
    }
}

const lamborghini1 = new Lamborghini(true, true);   // nilai true pada param ke-1 tidak terlalu berpengaruh dikarenakan pada saat pemanggilan method aktifkanTurbo() pada akhirnya nilainya akan true juga.
// dalam artian mau didefinisikan sebagai true/false, hasilnya sama saja.
console.info(lamborghini1.aktifkanTurbo());

const lamborghini2 = new Lamborghini(true, false);  // nilai true pada param ke-1 tidak terlalu berpengaruh dikarenakan pada saat pemanggilan method aktifkanTurbo() pada akhirnya nilainya akan true juga.
// dalam artian mau didefinisikan sebagai true/false, hasilnya sama saja.
console.info(lamborghini2.aktifkanTurbo());

const lamborghini3 = new Lamborghini(false, null);
console.info(lamborghini3.aktifkanTurbo());

const avanza1 = new Avanza(true);
console.info(avanza1.deskripsi());

const avanza2 = new Avanza(false);
console.info(avanza2.deskripsi());