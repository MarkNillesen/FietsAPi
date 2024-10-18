const apiUrl = 'http://localhost:8000/api'; // Update deze naar jouw API locatie

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Voorkom standaard formulieractie

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirmation = document.getElementById('password_confirmation').value;

    try {
        const response = await axios.post(`${apiUrl}/register`, {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        });

        alert(response.data.message); // Toon een succesbericht
        window.location.href = 'login.html'; // Redirect naar de loginpagina
    } catch (error) {
        if (error.response) {
            // Als de API een foutstatus teruggeeft, toon de foutmelding
            alert(error.response.data.message || 'Er ging iets mis, probeer het opnieuw.');
        } else {
            console.error('Fout:', error);
            alert('Er ging iets mis, probeer het opnieuw.');
        }
    }
});