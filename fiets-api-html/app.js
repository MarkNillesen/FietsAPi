// ----- Endpoint 1: Beheer van Kleuren -----

// Voeg een nieuwe kleur toe aan localStorage
function addKleur() {
    const kleurNaam = document.getElementById('kleurNaam').value;
    if (kleurNaam) {
        let kleuren = JSON.parse(localStorage.getItem('kleuren')) || [];
        kleuren.push({ naam: kleurNaam });
        localStorage.setItem('kleuren', JSON.stringify(kleuren));
        document.getElementById('kleurNaam').value = ''; // Reset het invoerveld
        loadKleuren(); // Herlaad de kleuren in de dropdown en tabel
    }
}

// Laad alle beschikbare kleuren uit localStorage
function loadKleuren() {
    const kleuren = JSON.parse(localStorage.getItem('kleuren')) || [];
    const kleurSelect = document.getElementById('kleurSelect');
    const kleurenTable = document.getElementById('kleurenTable').querySelector('tbody');

    // Reset inhoud
    kleurSelect.innerHTML = '';
    kleurenTable.innerHTML = '';

    kleuren.forEach((kleur, index) => {
        // Voeg kleur toe aan dropdown
        const option = document.createElement('option');
        option.value = kleur.naam;
        option.textContent = kleur.naam;
        kleurSelect.appendChild(option);

        // Voeg kleur toe aan de tabel
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${kleur.naam}</td>
            <td class="border px-4 py-2">
                <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteKleur(${index})">Verwijder</button>
            </td>
        `;
        kleurenTable.appendChild(row);
    });
}

// Verwijder een kleur uit localStorage
function deleteKleur(index) {
    let kleuren = JSON.parse(localStorage.getItem('kleuren')) || [];
    kleuren.splice(index, 1); // Verwijder kleur op basis van de index
    localStorage.setItem('kleuren', JSON.stringify(kleuren));
    loadKleuren(); // Herlaad de kleuren
}

// ----- Endpoint 2: Beheer van Fietsen -----

// Voeg een nieuwe fiets toe aan localStorage
function addFiets() {
    const fietsMerk = document.getElementById('fietsMerk').value;
    const kleurSelect = document.getElementById('kleurSelect').value;

    if (fietsMerk && kleurSelect) {
        let fietsen = JSON.parse(localStorage.getItem('fietsen')) || [];
        fietsen.push({ merk: fietsMerk, kleur: kleurSelect });
        localStorage.setItem('fietsen', JSON.stringify(fietsen));
        document.getElementById('fietsMerk').value = ''; // Reset het invoerveld
        loadFietsen(); // Herlaad de fietsen in de tabel
    }
}

// Laad alle beschikbare fietsen uit localStorage
function loadFietsen() {
    const fietsen = JSON.parse(localStorage.getItem('fietsen')) || [];
    const fietsenTable = document.getElementById('fietsenTable').querySelector('tbody');

    // Reset inhoud
    fietsenTable.innerHTML = '';

    fietsen.forEach((fiets, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${fiets.merk}</td>
            <td class="border px-4 py-2">${fiets.kleur}</td>
            <td class="border px-4 py-2">
                <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteFiets(${index})">Verwijder</button>
            </td>
        `;
        fietsenTable.appendChild(row);
    });
}

// Verwijder een fiets uit localStorage
function deleteFiets(index) {
    let fietsen = JSON.parse(localStorage.getItem('fietsen')) || [];
    fietsen.splice(index, 1); // Verwijder fiets op basis van de index
    localStorage.setItem('fietsen', JSON.stringify(fietsen));
    loadFietsen(); // Herlaad de fietsen
}

// Roep deze functies aan wanneer de pagina laadt om de opgeslagen data te tonen
document.addEventListener('DOMContentLoaded', () => {
    loadKleuren();
    loadFietsen();
});
