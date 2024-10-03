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

// Laad kleur voor bewerken
async function loadKleur() {
    try {
        const response = await axios.get(`${apiUrl}/kleuren/${id}`);
        const kleur = response.data;
        document.getElementById('kleurNaam').value = kleur.naam;
    } catch (error) {
        console.error('Er ging iets mis bij het laden van de kleur:', error);
    }
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

// Laad kleuren voor de select-optie in de fietsform
async function loadKleuren() {
    try {
        const response = await axios.get(`${apiUrl}/kleuren`);
        const kleuren = response.data;
        let kleurSelect = '';
        kleuren.forEach(kleur => {
            kleurSelect += `<option value="${kleur.id}">${kleur.naam}</option>`;
        });
        document.getElementById('fietsKleur').innerHTML = kleurSelect;
    } catch (error) {
        console.error('Er ging iets mis bij het laden van de kleuren:', error);
    }
}

// Opslaan van bewerkte kleur
document.getElementById('editKleurForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const kleurNaam = document.getElementById('kleurNaam').value;

    try {
        const response = await axios.put(`${apiUrl}/kleuren/${id}`, { naam: kleurNaam });
        alert('Kleur succesvol bijgewerkt');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Er ging iets mis bij het updaten van de kleur:', error);
    }
});

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