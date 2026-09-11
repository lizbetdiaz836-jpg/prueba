// =============================
// BUSCADOR DE COMANDOS
// =============================

const searchInput =
    document.getElementById("searchInput");

const cards =
    [...document.querySelectorAll(".card")];

const noResults =
    document.getElementById("noResults");


searchInput.addEventListener("input", () => {

    const query =
        searchInput.value
        .toLowerCase()
        .trim();


    let visible = 0;


    cards.forEach(card => {

        const text =
            `${card.dataset.search}
            ${card.innerText}`
            .toLowerCase();


        const match =
            text.includes(query);


        if (match) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";
        }

    });


    // Mostrar mensaje si no existen resultados

    if (visible === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";
    }

});



// =============================
// BOTONES COPIAR
// =============================

const copyButtons =
    document.querySelectorAll(".copy-btn");


copyButtons.forEach(button => {

    button.addEventListener("click", async () => {

        // Obtener el código de la tarjeta

        const command =
            button
            .parentElement
            .querySelector("code")
            .innerText;


        try {

            // Copiar comando

            await navigator.clipboard
                .writeText(command);


            // Mostrar mensaje

            showToast("¡Comando copiado!");

        } catch (error) {

            showToast(
                "No se pudo copiar automáticamente"
            );

        }

    });

});



// =============================
// MENSAJE TOAST
// =============================

const toast =
    document.getElementById("toast");


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}