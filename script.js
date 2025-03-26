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
    let velocidad = 5;
    let posX = window.innerWidth / 2 - 40;
    let posY = window.innerHeight / 2 - 40;
    let keys = {};

    // Guardar las teclas presionadas
    document.addEventListener("keydown", function(event) {
        keys[event.key] = true;
    });

    document.addEventListener("keyup", function(event) {
        keys[event.key] = false;
    });

    function moverPersonaje() {
        if (keys["w"] && posY > 0) posY -= velocidad;
        if (keys["s"] && posY < window.innerHeight - 80) posY += velocidad;
        if (keys["a"] && posX > 0) posX -= velocidad;
        if (keys["d"] && posX < window.innerWidth - 80) posX += velocidad;

        personaje.style.top = posY + "px";
        personaje.style.left = posX + "px";

        requestAnimationFrame(moverPersonaje);
    }

    moverPersonaje(); // Iniciar la animación de movimiento
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
