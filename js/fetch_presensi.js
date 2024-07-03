import { get } from "https://bukulapak.github.io/api/process.js";
import { getallpresensi } from "./controller/get_presensi.js";
import { urlAPI } from "./config/url_presensi.js";
get(urlAPI, getallpresensi);