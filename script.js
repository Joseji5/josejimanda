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
    let container = document.querySelector(".container");
    container.innerHTML = `
        <h1 class="titulo">Demuéstralo</h1>
        <button id="btnVale" class="boton">Vale</button>
    `;

    document.getElementById("btnVale").addEventListener("click", function() {
        alert("¡Ahora depende de ti demostrarlo! 💖");
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
