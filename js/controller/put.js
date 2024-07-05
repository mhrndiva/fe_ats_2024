import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";


function pushData(){

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
    postData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);