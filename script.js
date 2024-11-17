function showBirthdayMessage() {
    const messageSection = document.getElementById('birthday-message');
    messageSection.classList.add('show');
    messageSection.style.display = 'block';

    // Memainkan musik ulang tahun
    const audio = document.getElementById('birthday-audio');
    audio.play();

    // Memanggil fungsi efek kembang api
    createFireworks();
}

// Fungsi untuk membuat efek kembang api
function createFireworks() {
    // Menggunakan fireworks-js untuk membuat efek kembang api
    const fireworksContainer = document.getElementById('fireworks-container');
    const fireworks = new Fireworks(fireworksContainer, {
        sound: true, // Suara kembang api
        opacity: 0.9,
        width: fireworksContainer.clientWidth,
        height: fireworksContainer.clientHeight,
    });

    fireworks.start();

    // Menghentikan kembang api setelah 5 detik
    setTimeout(() => {
        fireworks.stop();
    }, 30000);
}

// Fungsi untuk membuka gambar dalam ukuran besar
function openImage(src) {
    const imgWindow = window.open("", "_blank");
    imgWindow.document.write(`
        <html>
            <head>
                <title>Gambar</title>
                <style>
                    body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #000; }
                    img { max-width: 100%; height: auto; }
                </style>
            </head>
            <body>
                <img src="${src}" />
            </body>
        </html>
    `);
}

// Fungsi untuk menghitung mundur
function startCountdown() {
    const countDownDate = new Date("2024-11-21T23:59:59").getTime(); // Ganti dengan tanggal yang diinginkan

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Menghitung hari, jam, menit, dan detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Menampilkan waktu hitung mundur
        document.getElementById("countdown").innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

        // Jika waktu habis
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Selamat Ulang Tahun!";
        }
    }, 1000);
}

// Mulai hitung mundur saat halaman dimuat
window.onload = startCountdown;