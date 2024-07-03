import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


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
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);