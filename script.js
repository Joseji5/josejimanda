document.getElementById("btnSi").addEventListener("click", function() {
    mostrarConfirmacion();
});

document.getElementById("btnNo").addEventListener("click", function() {
    mostrarGifEnfado();
});

function mostrarConfirmacion() {
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h1 class="titulo">¿Estás seguro?</h1>
        <div class="botones">
            <button id="btnSiConfirm" class="boton">Sí</button>
            <button id="btnNoConfirm" class="boton">No</button>
        </div>
    `;

    document.getElementById("btnSiConfirm").addEventListener("click", function() {
        mostrarDemuestra();
    });

    document.getElementById("btnNoConfirm").addEventListener("click", function() {
        mostrarGifEnfado();
    });
}

function mostrarDemuestra() {
    document.body.innerHTML = ""; // Limpia la pantalla

    // Crear el personaje
    let personaje = document.createElement("img");
    personaje.src = "olaya.png";
    personaje.id = "personaje";
    document.body.appendChild(personaje);
    personaje.style.display = "block";

    // Variables de movimiento
    let velocidad = 10;
    let posX = window.innerWidth / 2 - 40; // Posición inicial en el centro
    let posY = window.innerHeight / 2 - 40;

    // Evento de teclado para mover el personaje
    document.addEventListener("keydown", function(event) {
        if (event.key === "w" && posY > 0) posY -= velocidad;
        if (event.key === "s" && posY < window.innerHeight - 80) posY += velocidad;
        if (event.key === "a" && posX > 0) posX -= velocidad;
        if (event.key === "d" && posX < window.innerWidth - 80) posX += velocidad;

        personaje.style.top = posY + "px";
        personaje.style.left = posX + "px";
    });
}

function mostrarGifEnfado() {
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h1 class="titulo">No tienes ni idea...</h1>
        <div id="gifContainer">
            <img src="enfado.gif" id="gif">
        </div>
    `;

    let gifContainer = document.getElementById("gifContainer");
    gifContainer.style.display = "block";

    setTimeout(() => {
        let volverBtn = document.createElement("button");
        volverBtn.innerText = "Vuelve a intentarlo...";
        volverBtn.id = "volver";
        volverBtn.addEventListener("click", function() {
            location.reload();
        });

        document.body.appendChild(volverBtn);
        volverBtn.style.display = "block";
    }, 4000);
}
