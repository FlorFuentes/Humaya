window.onscroll = function () {
    var scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// comportamiento de desplazamiento suave al hacer clic en el botón
document.getElementById("scrollButton").addEventListener("click", function () {
    document.body.scrollTop = 0; // Para navegadores que no sean Chrome ni Firefox
    document.documentElement.scrollTop = 0; // Para Chrome y Firefox
});
