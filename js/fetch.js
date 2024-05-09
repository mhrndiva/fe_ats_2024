import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-ats-714220050-cc57ecdf5b73.herokuapp.com/mahasiswa";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}