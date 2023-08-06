// ambil elemen video

const video = Array.from(document.querySelectorAll('[data-duration]'));

let hakari = video.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    .map(item => item.dataset.duration)

    .map(waktu => {
        const time = waktu.split(':').map(part => parseFloat(part));
        return (time[0] * 60) + time[1];

    })


    .reduce((total, detik) => total + detik);

const jam = Math.floor(hakari / 3600);
const menit = Math.floor(hakari % 3600 / 60)
const detik = hakari % 60;

const Totalsemua = video.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

let hasil = () => { return `${jam} jam ${menit} menit ${detik} detik` };
let konten = () => { return `${Totalsemua} Video` };


let videototal = document.querySelector('.total-durasi');
videototal.textContent = hasil();
let jumlahvideo = document.querySelector('.jumlah-video');
jumlahvideo.textContent = konten();

