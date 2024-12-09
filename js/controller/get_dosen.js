// get.js
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelDosen } from "../temp/table_dosen.js";

export function getalldosen(results) {
    console.log("Processing dosen data:", results); // Debug
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = isiTabelDosen
        .replace("#ID#", value._id)
        .replace("#Nama#", value.nama)
        .replace("#KodeDosen#", value.kode_dosen)
        .replace("#PhoneNumber#", value.phone_number)
        .replace("#Matkul#", value.matkul)
        .replace("#Email#", value.email)
        .replace("#IDHAPUS#", value._id)
        .replace("#IDEDIT#", value._id)
        .replace("#WARNA#", getRandomColor())
        .replace(/#WARNALOGO#/g, getRandomColorName());

    console.log("Adding row:", content); // Debug
    addInner("iniTabelDosen", content);
}
