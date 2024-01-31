**01.- EVENTOS
    Cualquier interaccion que realiza el usuario con nuestra pagina
    click , scroll , escribir, hover , etc
    Tambien puede ser eventos del navegador, como cuando carga la pagina por primera vez

    // EVENTO O LISTENER

    // PARTES DE UN LISTENER
        elemento que emitira el evento
        tipo de evento a ejecutar
        callback o funcion para realizar el trabajo

        EJEMPLO:let documento = document;
                console.log(1);
                documento.addEventListener('DOMContentLoaded', () => {
                console.log(2);
                });
                console.log(3);

**02.-Mouse
        boton.addEventListener("click", function())

**03_Input
        miInput.addEventListener("input", function())

**04_Scroll
        window.addEventListener("scroll", function())

**05_EventBubblingipt
        event.stopPropagation()