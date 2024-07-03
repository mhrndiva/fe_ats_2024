import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTabelMahasiswa(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
            let content =
                isiTabel.replace("#ID#", value._id)
                .replace("#Nama#", value.nama)
                .replace("#NPM#", value.npm)
                .replace("#Jurusan#", value.jurusan)
                .replace("#NomorHp#", value.phone_number)
                .replace("#Email#", value.email)
                .replace("#Alamat#", value.alamat)
                .replace("#WARNA#", getRandomColor())
                .replace(/#WARNALOGO#/g, getRandomColorName());
            addInner("iniTabel", content);
}
       