const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

// Functie om fietsen en kleuren op te halen
function loadData() {
    loadFietsen();
}

// Laad kleuren en toon ze in de tabel


// Laad fietsen en toon ze in de tabel
const loadFietsen = async () => {
    try {
        const response = await axios.get(`${apiUrl}/fietsen`);
        const fietsen = response.data;
        let fietsTabel = '';
        fietsen.forEach(fiets => {
            fietsTabel += `<tr>
                        <td>${fiets.id}</td>
                        <td>${fiets.merk}</td>
                        <td>${typeof fiets.kleur === 'object' ? (fiets.kleur?.naam || 'Geen kleur') : fiets.kleur}</td>
                        <td>
                            <button onclick="window.location.href='edit.html?type=fiets&id=${fiets.id}'">Bewerken</button>
                            <button onclick="deleteFiets(${fiets.id})">Verwijder</button>
                        </td>
                    </tr>`;
        });
        document.getElementById('fietsTabel').innerHTML = fietsTabel;
    } catch (error) {
        console.error('Er ging iets mis met het ophalen van fietsen:', error);
    }
}

// Verwijder fiets
const deleteFiets = async (id) => {
    if (confirm('Weet je zeker dat je deze fiets wilt verwijderen?')) {
        try {
            const response = await axios.delete(`${apiUrl}/fietsen/${id}`);
            alert(response.data.message); // Laat het succesbericht zien
            loadFietsen(); // Herlaad de fietsen
        } catch (error) {
            console.error('Er ging iets mis met het verwijderen van fiets:', error);
        }
    }
}