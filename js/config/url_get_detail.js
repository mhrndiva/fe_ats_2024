// url_get_detail.js
const urlParams = new URLSearchParams(window.location.search);
const npm = urlParams.get("npm");

// Pastikan export urlFetch
export const urlFetch = `https://ws-deviwlndr-59b3a0157dd7.herokuapp.com/mahasiswa/npm/` +  npm;
