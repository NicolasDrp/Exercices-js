document.addEventListener('DOMContentLoaded', async function () {

    await fetch("https://icanhazdadjoke.com/j/R7UfaahVfFd", "GET", jokeByID)

    jokeImage("https://icanhazdadjoke.com/j/R7UfaahVfFd.png");

    function fetch(url, method, fun) {
        //Initialisation de XHR
        const request = new XMLHttpRequest();
        request.addEventListener("load", fun)
        //Spécifier le type d'appelle [ GET, POST, PUT, PATCH, DELETE ] et l'URL
        request.open(method, url);
        //Spécification que je veux du JSON en type de retour
        request.setRequestHeader('Accept', "application/json")
        //Permet d'envoyer la requêtes
        request.send()
    }

    function jokeByID() {
        let result = JSON.parse(this.response);
        document.getElementById('randomJoke').append(result.joke)
    }

    function jokeImage(url) {
        document.getElementById("image").src = url;    
    }






})