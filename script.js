function mostrarContacto() {
    document.getElementById("contacto")
        .scrollIntoView({
            behavior: "smooth"
        });
}

// Crear estrellas animadas

function crearEstrella() {

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    estrella.innerHTML = "✦";

    estrella.style.left = Math.random() * window.innerWidth + "px";

    estrella.style.fontSize =
        Math.random() * 15 + 10 + "px";

    estrella.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    document.body.appendChild(estrella);

    setTimeout(() => {
        estrella.remove();
    }, 5000);
}

setInterval(crearEstrella, 200);