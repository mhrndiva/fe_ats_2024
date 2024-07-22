import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/presensi.js";

export function getallpresensi(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    let content = isiTabel
        //.replace("#ID#", value._id)
        .replace("#Nama#", value.biodata.nama)
        .replace("#NPM#", value.biodata.npm)
        .replace("")
        .replace("#Jurusan#", value.biodata.jurusan)
        .replace("#Matkul#", value.matkul.namamatkul)
        .replace("#Dosen#", value.matkul.dosen)
        .replace("#Kehadiran#", value.checkin)
        .replace("#IDEDIT#", value._id)
        .replace("#IDHAPUS#", value._id)
        .replace("#WARNA#", getRandomColor())
        .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
