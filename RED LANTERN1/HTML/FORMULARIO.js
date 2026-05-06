const formIdeia = document.getElementById("formIdeia");

formIdeia.addEventListener("submit", function(event) {
    event.preventDefault();

    if (formIdeia.checkValidity()) {
        alert("Ideia enviada com sucesso!");
        formIdeia.reset();
    } else {
        formIdeia.reportValidity();
    }
});