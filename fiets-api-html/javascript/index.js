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
                            <a href="fietsinfo.html?id=${fiets.id}" class="text-blue-500 hover:underline">${fiets.naam}</a>
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
};

// Controleer de inlogstatus
function checkLoginStatus() {
    // Controleer of de gebruiker is ingelogd via localStorage
    const accessToken = localStorage.getItem('access_token');
    const userMenu = document.getElementById('userMenu');

    if (accessToken) {
        // Haal de gebruikersnaam op als de gebruiker is ingelogd
        const username = localStorage.getItem('username') || 'Gebruiker'; // Vervang 'Gebruiker' door je default waarde

        // Toon de gebruikersnaam en uitlogknop
        userMenu.innerHTML = `
            <span class="text-white mr-4">Welkom, ${username}</span>
            <button class="bg-red-500 text-white py-2 px-4 rounded-lg" onclick="logout()">Uitloggen</button>
        `;
    } else {
        // Toon de login- en registratietoetsen als de gebruiker niet is ingelogd
        userMenu.innerHTML = `
            <button class="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg"
                onclick="window.location.href='login.html'">
                Login
            </button>
            <button class="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg ml-2"
                onclick="window.location.href='register.html'">
                Registreren
            </button>
        `;
    }
}

function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    location.reload();
}