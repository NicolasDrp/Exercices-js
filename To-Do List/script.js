let tache;


document.getElementById("form").addEventListener("submit", ajouter);


function ajouter(event) {
    event.preventDefault();

    let message = document.createElement("li");

    let check = document.createElement("INPUT");
    check.className = "checkbox"
    check.setAttribute("type", "checkbox");


    let supprimer = document.createElement("button");
    supprimer.className = "supprimer"
    supprimer.innerText = "Supprimer la tâche"

    let modifier = document.createElement("button");
    modifier.className = "modifier"
    modifier.innerText = "Modifier"

    tache = document.getElementById("tache").value;


    document.getElementById("liste").appendChild(message);
    message.append(check);
    message.append(tache);
    message.append(supprimer);
    message.append(modifier);



    document.getElementById("tache").value = "";


}

// au clic d'une checkbox
document.addEventListener("click", function (event) {
    if (event.target.className === "checkbox") {
        let listCheck = document.getElementsByClassName("checkbox");
        for (let i = 0; i < listCheck.length; i++) {
            let element = listCheck[i];
            if (element.checked == true) {
                element.parentElement.style.backgroundColor = "green";
                element.parentElement.style.color = "white";


            } else {
                element.parentElement.style.color = "black";
                element.parentElement.style.backgroundColor = "white";
            }
        }
    }
});


//action bouton supprimer
document.addEventListener("click", function (event) {
        let listSuppr = document.getElementsByClassName("supprimer");
        for (let i = 0; i < listSuppr.length; i++) {
            let element = listSuppr[i];
            element.addEventListener("click", function() {
                element.parentElement.remove();
             });
        }
});


//à l'appuie du bouton supprimer
