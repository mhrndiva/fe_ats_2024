import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel as isiTabelMahasiswa } from "../temp/table.js";
import { isiTabel as isiTabelPresensi } from "../temp/presensi.js";

export function getallmahasiswa(results) {
    results.forEach(value => isiRow(value, "mahasiswa"));
}

export function getallpresensi(results) {
    results.forEach(value => isiRow(value, "presensi"));
}

function isiRow(value, type) {
    console.log("Value:", value); // Tampilkan nilai value di konsol

    if (type === "mahasiswa") {
        if (value && value.nama && value.phone_number && value._id) {
            let content = isiTabelMahasiswa
                .replace("#ID#", value._id)
                .replace("#Nama#", value.nama)
                .replace("#NPM#", value.npm)
                .replace("#Jurusan#", value.jurusan)
                .replace("#NomorHp#", value.phone_number)
                .replace("#Email#", value.email)
                .replace("#Alamat#", value.alamat)
                .replace("#WARNA#", getRandomColor())
                .replace(/#WARNALOGO#/g, getRandomColorName());
            addInner("iniTabel", content);
        } else {
            console.error("Data mahasiswa tidak lengkap:", value);
        }
    } else if (type === "presensi") {
        if (value && value.matkul && value.biodata && value._id) {
            let content = isiTabelPresensi
                .replace("#ID#", value._id)
                .replace("#Nama#", value.biodata.nama)
                .replace("#NPM#", value.biodata.npm)
                .replace("#Jurusan#", value.biodata.jurusan)
                .replace("#Matkul#", value.matkul.namamatkul)
                .replace("#Dosen#", value.matkul.dosen)
                .replace("#Kehadiran#", value.checkin)
                .replace("#WARNA#", getRandomColor())
                .replace(/#WARNALOGO#/g, getRandomColorName());
            addInner("iniTabel", content);
        } else {
            console.error("Data presensi tidak lengkap:", value);
        }
    }
}