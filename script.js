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
        document.querySelector(".titulo").innerText = "Demuéstralo";
    });

    document.getElementById("btnNoConfirm").addEventListener("click", function() {
        mostrarGifEnfado();
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
        let valeBtn = document.createElement("button");
        valeBtn.innerText = "VALE";
        valeBtn.id = "vale";
        valeBtn.addEventListener("click", function() {
            location.reload();
        });

        container.appendChild(valeBtn);
    }, 2000);
}
