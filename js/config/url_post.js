export let urlPOST = "http://ws-deviwlndr-59b3a0157dd7.herokuapp.com/insertmahasiswa"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}