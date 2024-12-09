function deleteData(IDHAPUS) {
    var dosenkode_dosen = IDHAPUS;
    var target_url = "http://ws-deviwlndr-59b3a0157dd7.herokuapp.com/dosen/delete/" + dosenkode_dosen;
    
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}

// Ekspos fungsi ke window agar dapat diakses dari HTML
function confirmDelete(IDHAPUS) {
    if (confirm("Apakah ingin menghapus data dengan Kode " + IDHAPUS  + "?")) {
        deleteData(IDHAPUS);
    }
}
