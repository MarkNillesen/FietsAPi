const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

// Laad kleuren, soorten, geslachten, en merken bij het openen van de pagina
loadKleuren();
loadSoorten();
loadGeslachten();
loadMerken();

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

// Event listener voor het toevoegen van een fiets
document.getElementById('addFietsForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Voorkom standaard formulieractie
    const naam = document.getElementById('naam').value; // Gebruik 'naam' in plaats van 'fietsMerk'
    const fietsKleur = document.getElementById('fietsKleur').value;
    const fietsSoort = document.getElementById('fietsSoort').value;
    const fietsGeslacht = document.getElementById('fietsGeslacht').value;
    const merk = document.getElementById('merk').value; // Gebruik 'merk' in plaats van 'fietsMerkID'

    try {
        await axios.post(`${apiUrl}/fietsen`, {
            naam: naam, // Gebruik 'naam' voor het merk
            kleur_id: fietsKleur,
            soort_id: fietsSoort,
            geslacht_id: fietsGeslacht,
            merk_id: merk // Gebruik 'merk' voor merk_id
        });

        // Redirect naar index na succesvol toevoegen van fiets
        alert('De fiets is succesvol toegevoegd!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Fout bij het toevoegen van fiets. Controleer de console voor details.', error);
    }
});