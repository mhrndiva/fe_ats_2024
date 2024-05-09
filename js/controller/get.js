import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js"
export function getallmahasiswa(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    console.log("Value:", value); // Tampilkan nilai value di konsol
    if (value && value.nama && value.phone_number && value.jabatan && value._id) {
        let content = 
            isiTabel.replace("#ID#", value._id)
                    .replace("#Nama#", value.nama)
                    .replace("#NomorHp#", value.phone_number)
                    .replace("#Jurusan#", value.jabatan)
                    .replace("#WARNA#", getRandomColor())
                    .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
    } else {
        console.error("Data mahasiswa tidak lengkap:", value);
    }
}