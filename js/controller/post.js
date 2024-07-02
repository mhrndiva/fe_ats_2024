import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    var presensi = getValue("presensi");

    let data = {
        npm : getValue("npm"),
        matkul : {
            namamatkul : getValue("namamatkul"),
            jadwal : getValue("jadwal"),
            sks : getValue("sks"),
            dosen : getValue("dosen")
        },
        biodata : {
            nama : getValue("nama"),
            npm : getValue("npm"),
            phone_number : getValue("phone_number"),
            jurusan : getValue("jurusan"),
            alamat : getValue("alamat"),
            email : getValue("email"),
        },
        checkin : getValue("checkin"),
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);