import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";



function pushData(){

    let data = {
        matkul : {
            namamatkul : getValue("namamatkul"),
            sks : parseInt(getValue("sks"), 10),
            dosen : getValue("dosen"),
            jadwal : getValue("jadwal")
        },
        biodata : {
            nama : getValue("nama"),
            npm: parseInt(getValue("npm"), 10),
            email: getValue("email"),
            jurusan : getValue("jurusan")
        },
        checkin : getValue("checkin"),
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);