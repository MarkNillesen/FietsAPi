const apiLogin = 'http://localhost:8000/api/login'; // Pas deze URL aan indien nodig
const apiRegister = 'http://localhost:8000/api/register'; // Voor registratie
let access_token = '';

const login = async () => {
    const password = document.querySelector("#wachtwoord").value;
    const email = document.querySelector("#mail").value;
    const jsonstring = { "password": password, "email": email };

    try {
        const response = await axios.post(apiLogin, jsonstring, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Hier sla je de access token op in localStorage of sessionStorage
        const accessToken = response.data.access_token; // Controleer of dit overeenkomt met je backend
        localStorage.setItem('access_token', accessToken); // Of gebruik sessionStorage

        // Redirect naar de indexpagina
        window.location.href = 'index.html'; // Zorg ervoor dat dit het juiste pad is naar je indexpagina
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Er ging iets mis bij het inloggen. Controleer je gegevens.');
    }
};

const register = async () => {
    const name = document.querySelector("#naam").value;
    const email = document.querySelector("#regEmail").value;
    const password = document.querySelector("#regWachtwoord").value;
    const passwordConfirmation = document.querySelector("#regWachtwoordBevestigen").value;
    
    const jsonstring = { 
        "name": name, 
        "email": email, 
        "password": password, 
        "password_confirmation": passwordConfirmation 
    };

    try {
        const response = await axios.post(apiRegister, jsonstring, {
            headers: { 'Content-Type': 'application/json' }
        });
        
        alert('Registratie succesvol. Je kunt nu inloggen.');
        console.log(response.data);
    } catch (error) {
        console.error('Er ging iets mis bij het registreren:', error.response.data);
        alert('Er ging iets mis bij het registreren. Controleer je gegevens.');
    }
}