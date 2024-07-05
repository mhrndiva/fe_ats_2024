//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-ats-714220050-cc57ecdf5b73.herokuapp.com/presensi/" + presensiId;