const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

// Functie om fietsen en kleuren op te halen
function loadData() {
    loadFietsen();
}

// Laad fietsen en toon ze in de tabel
const loadFietsen = async () => {
    try {
        const response = await axios.get(`${apiUrl}/fietsen`);
        const fietsen = response.data;
        let fietsTabel = '';
        fietsen.forEach(fiets => {
            fietsTabel += `<tr>
                        <td>
                            <a href="fietsinfo.html?merk=${fiets.merk}" class="text-blue-500 hover:underline">${fiets.naam}</a>
                        </td>
                        <td>${fiets.soort ? fiets.soort.naam : 'Geen soort'}</td>
                        <td>
                            <button onclick="window.location.href='edit.html?type=fiets&id=${fiets.id}'" class="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded">Bewerken</button>
                            <button onclick="deleteFiets(${fiets.id})" class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">Verwijder</button>
                        </td>
                    </tr>`;
        });
        document.getElementById('fietsTabel').innerHTML = fietsTabel;
    } catch (error) {
        console.error('Er ging iets mis met het ophalen van fietsen:', error);
    }
};

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