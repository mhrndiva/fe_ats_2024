export let urlPOST = "http://ws-deviwlndr-59b3a0157dd7.herokuapp.com/insertdosen"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "dosen.html"; //reload halaman setelah klik ok pada alert
}