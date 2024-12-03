import { postData } from "https://bukulapak.github.io/api/process.js";
import { getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

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
    let npm = getValue("npm");
    let email = getValue("email");
    let jurusan = getValue("jurusan");
    let phone_number = getValue("phone_number");
    let alamat = getValue("alamat");
    let poin = getValue("poin");

    // Validasi semua kolom harus diisi
    if (!nama || !npm || !email || !jurusan || !phone_number || !alamat) {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Validasi format nama
    if (!isAlphabetic(nama)) {
        alert("Nama hanya boleh berisi huruf dan spasi!");
        return;
    }

    // Validasi NPM harus berupa angka
    npm = parseInt(npm);
    if (isNaN(npm)) {
        alert("NPM harus berupa angka!");
        return;
    }

    // Validasi format email
    if (!isValidEmail(email)) {
        alert("Format email tidak valid!");
        return;
    }

    // Validasi format jurusan
    if (!isAlphabetic(jurusan)) {
        alert("Jurusan hanya boleh berisi huruf dan spasi!");
        return;
    }

    // Validasi nomor telepon
    if (!isValidPhoneNumber(phone_number)) {
        alert("Nomor telepon tidak valid!");
        return;
    }

    poin = parseInt(poin);
    if (isNaN(poin)) {
        alert("Poin harus berupa angka!");
        return;
    }

    // Data untuk dikirim ke server
    const data = {
        nama: nama,
        npm: npm,
        email: email,
        jurusan: jurusan,
        phone_number: phone_number,
        alamat: alamat,
        poin: poin
    };

    // Kirim data ke server
    postData(urlPOST, data, AmbilResponse);
}

// Event listener untuk tombol
document.getElementById("button").addEventListener("click", pushData);
