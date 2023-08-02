var angkot = [];

var tambahpenumpang = function (nama, angkot) {
    if (angkot.length === 0) {
        angkot.push(nama);
        alert(nama + ' Sudah join ke angkot');
        return angkot;


    } else {
        for (var i = 0; i < angkot.length; i++) {
            if (angkot[i] == undefined) {
                angkot[i] = nama;
                return angkot;
            } else if (angkot[i] === nama) {
                console.log('nama sudah ada di angkot');
                return angkot;
            } else if (i == angkot.length - 1) {
                angkot.push(nama);
                alert(nama + ' Sudah Berhasil Ditambahkan');
                return angkot;
            }
        }
    }
}
var hapuspenumpang = function (nama, angkot) {
    if (angkot.length == 0) {
        console.log('angkot kosong')
        alert('angkot kosong')
        return angkot;
    } else {
        for (var i = 0; i < angkot.length; i++) {
            if (angkot[i] == nama) {
                angkot[i] = undefined;
                console.log('penumpang sudah diturunkan dari kursi no ' + i);
                alert('penumpang sudah diturunkan dari kursi no ' + i);
                return angkot;
            } else if (i == angkot.length - 1) {
                console.log('penumpang tidak ada di angkot ini');
                alert('penumpang tidak ada di angkot ini');
                return angkot;
            }
        }
    }
    return angkot;

}
