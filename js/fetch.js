// import { get } from "https://bukulapak.github.io/api/process.js"; 
// let urlAPI = "https://ws-ats-714220050-cc57ecdf5b73.herokuapp.com/mahasiswa";
// get(urlAPI,getallmahasiswa);
// function getallmahasiswa(results){
//     console.log(results);
//     results.forEach(isiRow);
// }
// function isiRow(value){
//     console.log(value)
// }

// import { get } from "https://bukulapak.github.io/api/process.js";
// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTabel } from "./table.js";
// let urlAPI = "https://ws-ats-714220050-cc57ecdf5b73.herokuapp.com/mahasiswa";
// get(urlAPI, getallmahasiswa);
// function getallmahasiswa(results) {
//     results.forEach(isiRow);
// }
// function isiRow(value) {
//     console.log("Value:", value); // Tampilkan nilai value di konsol
//     if (value && value.nama && value.phone_number && value.jabatan && value._id) {
//         let content = 
//             isiTabel.replace("#ID#", value._id)
//                     .replace("#Nama#", value.nama)
//                     .replace("#NomorHp#", value.phone_number)
//                     .replace("#Jurusan#", value.jabatan)
//                     .replace("#WARNA#", getRandomColor())
//                     .replace(/#WARNALOGO#/g, getRandomColorName());
//         addInner("iniTabel", content);
//     } else {
//         console.error("Data mahasiswa tidak lengkap:", value);
//     }
// }

import { get as getProcess } from "https://bukulapak.github.io/api/process.js";
import { getallmahasiswa } from "./controller/get.js";
import { urlAPI } from "./config/url.js";
import { urlAPI as urlPresensiAPI } from "./config/url_presensi.js";
function handleError(error) {
    console.error("Error occurred:", error);
}
getProcess(urlAPI, getallmahasiswa);



getProcessPresensi(urlPresensiAPI, getallpresensi);
