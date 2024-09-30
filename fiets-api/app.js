const apiUrl = 'http://localhost:8000/api'; // Update de URL naar je API endpoint

// Laad kleuren en fietsen bij het laden van de pagina
window.onload = function() {
    loadKleuren();
    loadFietsen();
};

function loadKleuren() {
    fetch(`${apiUrl}/kleuren`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#kleurenTable tbody');
            tableBody.innerHTML = ''; // Clear table body

            data.forEach(kleur => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${kleur.naam}</td>`;
                tableBody.appendChild(row);
            });

            const kleurSelect = document.getElementById('kleurSelect');
            kleurSelect.innerHTML = ''; // Clear select options
            data.forEach(kleur => {
                const option = document.createElement('option');
                option.value = kleur.id;
                option.textContent = kleur.naam;
                kleurSelect.appendChild(option);
            });
        });
}

function loadFietsen() {
    fetch(`${apiUrl}/fietsen`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#fietsenTable tbody');
            tableBody.innerHTML = '';

            data.forEach(fiets => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${fiets.merk}</td><td>${fiets.kleur ? fiets.kleur.naam : 'Onbekend'}</td>`;
                tableBody.appendChild(row);
            });
        });
}

function addKleur() {
    const naam = document.getElementById('kleurNaam').value;
    fetch(`${apiUrl}/kleuren`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ naam }),
    })
    .then(response => response.json())
    .then(() => {
        loadKleuren();
    });
}

function addFiets() {
    const merk = document.getElementById('fietsMerk').value;
    const kleurId = document.getElementById('kleurSelect').value;
    fetch(`${apiUrl}/fietsen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ merk, kleur_id: kleurId }),
    })
    .then(response => response.json())
    .then(() => {
        loadFietsen();
    });
}