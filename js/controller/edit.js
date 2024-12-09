export function isiData(results) {
    const inputMapping = [
        { id: 'nama', path: 'mahasiswa.nama' },
        { id: 'npm', path: 'mahasiswa.npm' },
        { id: 'phone_number', path: 'mahasiswa.phone_number' },
        { id: 'jurusan', path: 'mahasiswa.jurusan' },
        { id: 'alamat', path: 'mahasiswa.alamat' },
        { id: 'email', path: 'mahasiswa.email' },
        { id: 'poin', path: 'mahasiswa.poin' }
    ];

    // Mengisi form dengan data mahasiswa
    inputMapping.forEach(({ id, path }) => {
        const inputElement = document.getElementById(id);
        const value = getNestedValue(results, path);
        console.log(`Setting value for #${id}: ${value}`); // Debugging
        if (inputElement) {
            inputElement.value = value || ''; // Isi nilai, default ke string kosong
        } else {
            console.warn(`Element with ID #${id} not found in DOM`);
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((value, key) => {
        if (value && key in value) {
            return value[key];
        }
        return undefined; // Jika tidak ditemukan, kembalikan undefined
    }, obj);
}
