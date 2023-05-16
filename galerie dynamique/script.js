let liste = document.getElementById("sectionMiniature").childNodes;

Array.from(liste).forEach(function (element) {

    element.addEventListener("click", function () {
        document.getElementById("image").src = element.src;

        let images = document.getElementById("sectionMiniature").querySelectorAll("img");
        images.forEach(function (img) {
            img.style.border = "solid white 10px";
        });

        if (element.src == document.getElementById("image").src) {
            element.style.border = "solid green 10px"
        }
    });
});



// request.setRequest("accept","application/json")


