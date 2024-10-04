const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let fiets; // Variabele om fietsgegevens op te slaan

// Laad fietsgegevens en vul het formulier in
loadFiets();

// Laad opties voor kleuren, soorten, geslachten en merken
Promise.all([loadKleuren(), loadSoorten(), loadGeslachten(), loadMerken()]).then(() => {
    // Na het laden van alle opties, de fietsgegevens instellen
    if (fiets) {
        document.getElementById('naam').value = fiets.naam;
        document.getElementById('fietsKleur').value = fiets.kleur_id;
        document.getElementById('fietsSoort').value = fiets.soort_id;
        document.getElementById('fietsGeslacht').value = fiets.geslacht_id;
        document.getElementById('merk').value = fiets.merk_id;
    }
});

// Functie om de fietsgegevens te laden voor bewerking
async function loadFiets() {
    try {
        const response = await axios.get(`${apiUrl}/fietsen/${id}`);
        fiets = response.data;
    } catch (error) {
        console.error('Er ging iets mis bij het laden van de fiets:', error);
    }
}

// Functie om kleuren op te halen en de selectopties te vullen
async function loadKleuren() {
    try {
        const response = await axios.get(`${apiUrl}/kleuren`);
        const kleuren = response.data;
        const kleurSelect = document.getElementById('fietsKleur');

        kleuren.forEach(kleur => {
            const option = document.createElement('option');
            option.value = kleur.id;
            option.textContent = kleur.naam;
            kleurSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Fout bij het ophalen van kleuren:', error);
    }
}

// Functie om soorten op te halen en de selectopties te vullen
async function loadSoorten() {
    try {
        const response = await axios.get(`${apiUrl}/soorten`);
        const soorten = response.data;
        const soortSelect = document.getElementById('fietsSoort');

        soorten.forEach(soort => {
            const option = document.createElement('option');
            option.value = soort.id;
            option.textContent = soort.naam;
            soortSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Fout bij het ophalen van soorten:', error);
    }
}

// Functie om geslachten op te halen en de selectopties te vullen
async function loadGeslachten() {
    try {
        const response = await axios.get(`${apiUrl}/geslachten`);
        const geslachten = response.data;
        const geslachtSelect = document.getElementById('fietsGeslacht');

        geslachten.forEach(geslacht => {
            const option = document.createElement('option');
            option.value = geslacht.id;
            option.textContent = geslacht.naam;
            geslachtSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Fout bij het ophalen van geslachten:', error);
    }
}

// Functie om merken op te halen en de selectopties te vullen
async function loadMerken() {
    try {
        const response = await axios.get(`${apiUrl}/merken`);
        const merken = response.data;
        const merkSelect = document.getElementById('merk');

        merken.forEach(merk => {
            const option = document.createElement('option');
            option.value = merk.id;
            option.textContent = merk.naam;
            merkSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Fout bij het ophalen van merken:', error);
    }
}

// Opslaan van de bewerkte fiets
document.getElementById('editFietsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const naam = document.getElementById('naam').value;
    const fietsKleur = document.getElementById('fietsKleur').value;
    const fietsSoort = document.getElementById('fietsSoort').value;
    const fietsGeslacht = document.getElementById('fietsGeslacht').value;
    const merk = document.getElementById('merk').value;

    try {
        await axios.put(`${apiUrl}/fietsen/${id}`, {
            naam: naam,
            kleur_id: fietsKleur,
            soort_id: fietsSoort,
            geslacht_id: fietsGeslacht,
            merk_id: merk
        });

        alert('Fiets succesvol bijgewerkt');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Er ging iets mis bij het updaten van de fiets:', error);
    }
});