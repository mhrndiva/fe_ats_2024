import { postData } from "https://bukulapak.github.io/api/process.js";
import { getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isAlphabetic(str) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(str);
}

function isAlphaNumeric(str) {
    const re = /^[A-Za-z0-9\s]+$/;
    return re.test(str);
}

function pushData() {
    let nama = getValue("nama");
    let npm = getValue("npm");
    let email = getValue("email");
    let jurusan = getValue("jurusan");
    let namamatkul = getValue("namamatkul");
    let sks = getValue("sks");
    let dosen = getValue("dosen");
    let jadwal = getValue("jadwal");
    let checkin = getValue("checkin");

    // Validasi semua kolom harus diisi
    if (!nama || !npm || !email || !jurusan || !namamatkul || !sks || !dosen || !jadwal || !checkin) {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Validasi format nama
    if (!isAlphabetic(nama)) {
        alert("Nama hanya boleh berisi huruf dan spasi!");
        return;
    }

    // Validasi NPM harus berupa angka
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

    // Validasi format nama mata kuliah
    if (!isAlphaNumeric(namamatkul)) {
        alert("Nama Mata Kuliah hanya boleh berisi huruf, angka, dan spasi!");
        return;
    }

    // Validasi SKS harus berupa angka
    if (isNaN(sks)) {
        alert("SKS harus berupa angka!");
        return;
    }

    // Validasi format dosen
    if (!isAlphabetic(dosen)) {
        alert("Nama Dosen hanya boleh berisi huruf dan spasi!");
        return;
    }

    // Validasi format jadwal (disesuaikan dengan format yang diinginkan)
    if (!isAlphaNumeric(jadwal)) {
        alert("Jadwal hanya boleh berisi huruf, angka, dan spasi!");
        return;
    }

    let data = {
        matkul: {
            namamatkul: namamatkul,
            sks: parseInt(sks, 10),
            dosen: dosen,
            jadwal: jadwal
        },
        biodata: {
            nama: nama,
            npm: parseInt(npm, 10),
            jurusan: jurusan,
            email: email
        },
        checkin: checkin
    };

    postData(urlPOST, data, AmbilResponse);
}

document.getElementById("button").addEventListener("click", pushData);
