import { postData } from "https://bukulapak.github.io/api/process.js";
import { getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post_dosen.js";

// Fungsi validasi email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Fungsi validasi huruf saja
function isAlphabetic(str) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(str);
}

// Fungsi validasi huruf dan angka
function isAlphaNumeric(str) {
    const re = /^[A-Za-z0-9\s]+$/;
    return re.test(str);
}

// Fungsi validasi nomor telepon
function isValidPhoneNumber(phone_number) {
    const re = /^[0-9]{10,15}$/; // Menggunakan format nomor telepon standar
    return re.test(phone_number);
}

function pushData() {
    let nama = getValue("nama");
    let kode_dosen = parseInt(getValue("kode_dosen"), 10); // Mengonversi string ke int
    let phone_number = getValue("phone_number");
    let matkul = getValue("matkul");
    let email = getValue("email");

    // Validasi semua kolom harus diisi
    if (!nama || !kode_dosen || !email || !matkul || !phone_number) {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Validasi format nama
    if (!isAlphabetic(nama)) {
        alert("Nama hanya boleh berisi huruf dan spasi!");
        return;
    }

    // Validasi format email
    if (!isValidEmail(email)) {
        alert("Format email tidak valid!");
        return;
    }

    // Validasi format jurusan
    if (!isAlphabetic(matkul)) {
        alert("Jurusan hanya boleh berisi huruf dan spasi!");
        return;
    }

    // Validasi nomor telepon
    if (!isValidPhoneNumber(phone_number)) {
        alert("Nomor telepon tidak valid!");
        return;
    }

    // Data untuk dikirim ke server
    const data = {
        nama: nama,
        kode_dosen: kode_dosen,
        phone_number: phone_number,
        matkul: matkul,
        email: email,
    };

    // Kirim data ke server
    postData(urlPOST, data, AmbilResponse);
}

// Event listener untuk tombol
document.getElementById("button").addEventListener("click", pushData);
