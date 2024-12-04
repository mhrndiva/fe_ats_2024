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
      const inputElement = document.getElementById(id);  // Pastikan id sesuai dengan ID form
      const value = getNestedValue(results, path);  // Ambil nilai berdasarkan path
      if (inputElement && value !== undefined) {
          inputElement.value = value;  // Set value ke input form
      }
  });
}

function getNestedValue(obj, path) {
  const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
  return value;
}
