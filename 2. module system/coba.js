function cetakNama(nama) {
    return `Hallo nama saya ${nama} `;
}

const PI = 3.4;


const mahasiswa = {
    nama: 'Kiki Agustin',
    umur: 23,
    cetakMhs() {
        return `Hallo nama saya ${this.nama} dan umur saya adalah ${this.umur} tahun`;
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;

// cara lebih mudah
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa
// }


// pake es6
module.exports = { cetakNama, PI, mahasiswa };

