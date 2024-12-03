//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "fetchhttps://ws-deviwlndr-59b3a0157dd7.herokuapp.com/mahasiswa" + presensiId;