import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";

function pushData() {
    // Retrieve values from form fields
    let nama = getValue("nama");
    let npm = getValue("npm");
    let phone_number = getValue("phone_number");
    let jurusan = getValue("jurusan");
    let alamat = getValue("alamat");
    let email = getValue("email");
    let poin = getValue("poin");

    // Construct the data object to send
    let data = {
        mahasiswa: {
            nama: nama,
            npm: parseInt(npm, 10),
            phone_number: phone_number,
            jurusan: jurusan,
            alamat: alamat,
            email: email,
            poin: parseInt(poin, 10),
        },
    };

    // Log the entire data object to check its structure
    console.log("Data yang dikirim:", data);

    // Verify the data structure
    if (typeof data !== 'object' || !data.mahasiswa) {
        console.error("Data yang dikirim tidak valid");
        return;
    }

    // Send data using PUT request
    putData(urlPUT, data, AmbilResponse);
}

// Attach the pushData function to the button click
onClick("button", pushData);
