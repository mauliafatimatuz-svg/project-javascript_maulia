const inputNama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombol-sapa");
const pesanSapa = document.getElementById("pesan");



tombolSapa.addEventListener("click", function () {
    const nilaiNama = inputNama.value;
    if (nilaiNama === "") {
        pesanSapa.textContent = "Nama belum diisi.";
    } else {
        pesanSapa.textContent = "Selamat belajar, " + nilaiNama + "!";
    }
});