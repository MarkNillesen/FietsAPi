const loadMerkDetails = async () => {
    // Haal de merknaam op uit de URL
    const urlParams = new URLSearchParams(window.location.search);
    const merk = encodeURIComponent(urlParams.get('merk')); // Voeg encodeURIComponent toe om problemen met speciale karakters te voorkomen
    
    if (merk) {
        try {
            // Roep de API aan om de merkdetails op te halen
            const response = await axios.get(`${apiUrl}/merken/${merk}`);
            const merkDetails = response.data;

            // Vul de pagina met de opgehaalde merkgegevens
            document.getElementById('merkDetails').innerHTML = `
                <h2 class="text-2xl font-bold mb-4">Merk: ${merkDetails.naam}</h2>
                <p><strong>Oorsprong:</strong> ${merkDetails.oorsprong}</p>
                <p><strong>Geschiedenis:</strong> ${merkDetails.geschiedenis}</p>
            `;
        } catch (error) {
            console.error('Er ging iets mis met het ophalen van de merkdetails:', error);
            document.getElementById('merkDetails').innerHTML = `
                <p>Er is een fout opgetreden bij het laden van de merkdetails. Controleer of de merknaam correct is.</p>
            `;
        }
    } else {
        document.getElementById('merkDetails').innerHTML = '<p>Geen merk gespecificeerd.</p>';
    }
};

// Laad de merkdetails zodra de pagina is geladen
window.onload = loadMerkDetails;