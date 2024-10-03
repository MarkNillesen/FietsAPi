const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const type = urlParams.get('type');

if (type === 'kleur') {
    document.getElementById('editKleurSection').style.display = 'block';
    loadKleur();
} else if (type === 'fiets') {
    document.getElementById('editFietsSection').style.display = 'block';
    loadFiets();
    loadKleuren();
}

// Laad fiets voor bewerken
async function loadFiets() {
    try {
        const response = await axios.get(`${apiUrl}/fietsen/${id}`);
        const fiets = response.data;
        document.getElementById('fietsMerk').value = fiets.merk;
        document.getElementById('fietsKleur').value = fiets.kleur_id;
    } catch (error) {
        console.error('Er ging iets mis bij het laden van de fiets:', error);
    }
}

// Opslaan van bewerkte fiets
document.getElementById('editFietsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fietsMerk = document.getElementById('fietsMerk').value;
    const fietsKleur = document.getElementById('fietsKleur').value;

    try {
        const response = await axios.put(`${apiUrl}/fietsen/${id}`, {
            merk: fietsMerk,
            kleur_id: fietsKleur
        });
        alert('Fiets succesvol bijgewerkt');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Er ging iets mis bij het updaten van de fiets:', error);
    }
});