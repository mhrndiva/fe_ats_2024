export function deleteData(IDHAPUS) {
    var presensiId = IDHAPUS;
    var target_url = "http://ws-deviwlndr-59b3a0157dd7.herokuapp.com/delete/" + presensiId;
    
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
