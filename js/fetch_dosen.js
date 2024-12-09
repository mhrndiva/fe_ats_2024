import { get } from "https://bukulapak.github.io/api/process.js";
import { getalldosen} from "./controller/get_dosen.js";
import { urlAPI } from "./config/url_dosen.js";
get(urlAPI, getalldosen);