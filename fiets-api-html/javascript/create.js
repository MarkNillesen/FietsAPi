const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie


loadKleuren(); // Laad de kleuren bij het openen van de pagina

// Event listener voor het toevoegen van een fiets
document.getElementById('addFietsForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Voorkom standaard formulieractie
    const fietsMerk = document.getElementById('fietsMerk').value;
    const fietsKleur = document.getElementById('fietsKleur').value;

    try {
        await axios.post(`${apiUrl}/fietsen`, {
            merk: fietsMerk,
            kleur_id: fietsKleur
        });

        // Redirect naar index na succesvol toevoegen van fiets
        alert('De fiets is succesvol toegevoegd!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Fout bij het toevoegen van fiets. Controleer de console voor details.', error);
    }
});

// Event listener voor het toevoegen van een kleur
document.getElementById('addKleurForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Voorkom standaard formulieractie
    const kleurNaam = document.getElementById('kleurNaam').value;

    try {
        await axios.post(`${apiUrl}/kleuren`, { naam: kleurNaam });
        alert('De kleur is succesvol toegevoegd!');
        // Redirect naar index na succesvol toevoegen van kleur
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Fout bij het toevoegen van kleur. Controleer de console voor details.', error);
    }
});