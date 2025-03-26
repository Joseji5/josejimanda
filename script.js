document.getElementById("btnSi").addEventListener("click", function() {
    mostrarConfirmacion();
});

document.getElementById("btnNo").addEventListener("click", function() {
    mostrarGifEnfado();
});

function mostrarConfirmacion() {
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h1 class="titulo">¿Estás segura?</h1>
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

    let velocidad = 5;
    let destinoX = personaje.offsetLeft;
    let destinoY = personaje.offsetTop;
    let moviendo = false;

    // Detectar clic para mover el personaje
    document.addEventListener("click", function(event) {
        destinoX = event.clientX - personaje.width / 2;
        destinoY = event.clientY - personaje.height / 2;
        moviendo = true;
    });

    function moverPersonaje() {
        if (moviendo) {
            let dx = destinoX - personaje.offsetLeft;
            let dy = destinoY - personaje.offsetTop;
            let distancia = Math.sqrt(dx * dx + dy * dy);

            if (distancia > 2) { // Sigue moviéndose si no ha llegado al punto exacto
                let angulo = Math.atan2(dy, dx);
                personaje.style.left = personaje.offsetLeft + Math.cos(angulo) * velocidad + "px";
                personaje.style.top = personaje.offsetTop + Math.sin(angulo) * velocidad + "px";
            } else {
                moviendo = false; // Detener el movimiento al llegar
            }
        }
        requestAnimationFrame(moverPersonaje);
    }

    moverPersonaje(); // Iniciar animación de movimiento
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
