const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlPUT = "https://ws-ats-714220050-cc57ecdf5b73.herokuapp.com/update/" + presensiId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}