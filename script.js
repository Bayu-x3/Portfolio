// Ambil elemen tombol dan pesan berhasil
const sendButton = document.getElementById("sendButton");
const successMessage = document.getElementById("successMessage");

// Tambahkan event listener ke tombol Send
sendButton.addEventListener("click", function () {
  // Simpan logika pengiriman pesan di sini
  // Misalnya, Anda bisa memeriksa apakah formulir diisi dengan benar, lalu mengirim pesan

  // Setelah pengiriman pesan berhasil, tampilkan pesan berhasil
  successMessage.style.display = "block";

  // Sembunyikan pesan berhasil setelah 3 detik (jika diperlukan)
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 10000); // 3000 ms (3 detik)
});

// Fungsi untuk mengatur teks yang berulang
function animateText() {
  const textElement = document.getElementById("typewriter");
  const texts = ["My Portofolio", "Cowo Cool", "No Anime No Life", "Marsha Cantik 💓"];
  let index = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[index].length) {
      textElement.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Kecepatan ketik (ms)
    } else {
      setTimeout(erase, 5000); // Tunggu sebelum menghapus
    }
  }

  function erase() {
    if (charIndex > 0) {
      textElement.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Kecepatan penghapusan (ms)
    } else {
      index = (index + 1) % texts.length; // Pindah ke teks berikutnya
      setTimeout(type, 500); // Tunggu sebelum mengetik kembali
    }
  }

  type(); // Mulai animasi ketik
}

// Panggil fungsi animasi teks
animateText();

const goToTop = () => {
  return location.href="#home";
}
