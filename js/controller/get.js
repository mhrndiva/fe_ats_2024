// get.js
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function getallmahasiswa(results) {
    console.log("Processing mahasiswa data:", results); // Debug
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = isiTabel
        .replace("#ID#", value._id)
        .replace("#Nama#", value.nama)
        .replace("#NPM#", value.npm)
        .replace("#Jurusan#", value.jurusan)
        .replace("#NomorHp#", value.phone_number)
        .replace("#Email#", value.email)
        .replace("#Alamat#", value.alamat)
        .replace("#Poin#", value.poin)
        .replace("#NPMHAPUS#", value.npm)
        .replace("#NPMEDIT#", value.npm)
        .replace("#WARNA#", getRandomColor())
        .replace(/#WARNALOGO#/g, getRandomColorName());

    console.log("Adding row:", content); // Debug
    addInner("iniTabel", content);
}
