exports.biodata = function(){
    const data = {
        nama: 'Muhammad Goldvin Wijayakusuma',
        tempatLahir: 'Bekasi',
        tanggalLahir: '31 Maret 2003',
        alamat: 'Jl. MT. Haryono RT 03/06 Kec. Setu Kab. Bekasi',
      };
      console.log("Nama : " + data.nama)
      console.log("Tempat Lahir : " + data.tempatLahir)
      console.log("Tanggal Lahir : " + data.tanggalLahir)
      console.log("Alamat : " + data.alamat)
}
const data = require("./moduleBiodata")
data.biodata();