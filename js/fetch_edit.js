import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit.js";
import { urlFetch } from "./config/url_get_detail.js";  // Sesuaikan pathnya

get(urlFetch, isiData);