export async function getallpresensi() {
    try {
        const response = await fetch('/api/presensi');  // Sesuaikan URL dengan endpoint API presensi Anda
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch presensi:', error);
        throw error;
    }
}
