const urlParams = new URLSearchParams(window.location.search);
const npm = urlParams.get('npm');

export let urlPUT = `https://ws-deviwlndr-59b3a0157dd7.herokuapp.com/mahasiswa/update/` +  npm;
export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "component.html"; //reload halaman setelah klik ok pada alert
}