const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

const loadFietsDetails = async () => {
    // Haal de fiets ID op uit de URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');  // Gebruik 'id' in plaats van 'merk'

    if (id) {
        try {
            // Roep de API aan om de fietsdetails op te halen
            const response = await axios.get(`${apiUrl}/fietsen/${id}`);
            const fietsDetails = response.data;

            // Vul de pagina met de opgehaalde fietsgegevens
            document.getElementById('fietsdetails').innerHTML = `
                <h2 class="text-2xl font-bold mb-4">Fiets: ${fietsDetails.naam}</h2>
                <p><strong>Soort:</strong> ${fietsDetails.soort ? fietsDetails.soort.naam : 'Onbekend'}</p>
                <p><strong>Kleur:</strong> ${fietsDetails.kleur ? fietsDetails.kleur.naam : 'Onbekend'}</p>
                <p><strong>Geslacht:</strong> ${fietsDetails.geslacht ? fietsDetails.geslacht.naam : 'Onbekend'}</p>
                <p><strong>Merk:</strong> ${fietsDetails.merk ? fietsDetails.merk.naam : 'Onbekend'}</p>
            `;
        } catch (error) {
            console.error('Er ging iets mis met het ophalen van de fietsdetails:', error);
            document.getElementById('fietsdetails').innerHTML = `
                <p>Er is een fout opgetreden bij het laden van de fietsdetails. Controleer of het fiets ID correct is.</p>
            `;
        }
    } else {
        document.getElementById('fietsdetails').innerHTML = '<p>Geen fiets gespecificeerd.</p>';
    }
};

// Laad de fietsdetails zodra de pagina is geladen
window.onload = loadFietsDetails;