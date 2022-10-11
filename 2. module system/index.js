// pemanggilan module system di node js

// const fs = require('fs'); //core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); // third party module / npm module


const coba = require('./coba');
console.log(coba.cetakNama('Kiki Agustin'), coba.PI, coba.mahasiswa.cetakMhs());