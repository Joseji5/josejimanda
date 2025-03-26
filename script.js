document.getElementById("btnSi").addEventListener("click", function() {
    mostrarGif("beso.gif");
});

document.getElementById("btnNo").addEventListener("click", function() {
    mostrarGif("enfado.gif");
});

function mostrarGif(gif) {
    let gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = `<img src="${gif}" id="gif">`;
    gifContainer.style.display = "block";

    let gifElement = document.getElementById("gif");

    setTimeout(() => {
        gifElement.classList.add("ampliado"); // Se agranda más
    }, 100);

    setTimeout(() => {
        let volverBtn = document.createElement("button");
        volverBtn.innerText = "Volver";
        volverBtn.id = "volver";
        volverBtn.addEventListener("click", function() {
            location.reload();
        });

        gifContainer.appendChild(volverBtn);
        volverBtn.style.display = "block";
    }, 4000);
}
