let tache;


document.getElementById("form").addEventListener("submit", ajouter);


function ajouter(event) {
    event.preventDefault();

    let message = document.createElement("li");

    let check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");

    tache = document.getElementById("tache").value;
  
    
    document.getElementById("liste").appendChild(message);
    message.append(check);
    message.append(tache);
    

    document.getElementById("tache").value = ""

}

if (document.querySelector(input).checked == true){
    alert("kjhcdiuhqeu")
}
