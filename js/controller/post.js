import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";

function pushData(){
    let nama = getValue("nama");
    let npm = getValue("npm");
    let jurusan = getValue("jurusan");
    let namamatkul = getValue("namamatkul");
    let dosen = getValue("dosen");
    let checkin = getValue("checkin");

    if (!nama || !npm || !jurusan || !namamatkul || !dosen || !checkin) {
        alert("Semua kolom harus diisi!");
        return;
    }


    let data = {
        matkul : {
            namamatkul : getValue("namamatkul"),
            dosen : getValue("dosen")
        },
        biodata : {
            nama : getValue("nama"),
            npm: parseInt(getValue("npm"), 10),
            jurusan : getValue("jurusan")
        },
        checkin : getValue("checkin"),
    }
    postData(urlPOST, data, AmbilResponse);

}

document.getElementById("button").addEventListener("click", pushData);

