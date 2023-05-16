let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexMotDePasse = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let emailValid = regexEmail.test(email);

    let motDePasse = document.getElementById("motDePasse").value;
    let motDePasseValide = regexMotDePasse.test(motDePasse);

    if (emailValid === false) {
        alert("Veuillez entrer une adresse email valide.");
    } else if (motDePasseValide === false) {
        alert("8 caractères, mininmum une lettre majuscule,une lettre minuscule et un chiffre.");
    } else {
        form.submit();
    }
});