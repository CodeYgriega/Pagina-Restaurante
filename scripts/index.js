const hamburguesa_icon = document.getElementById("hamburguesa-icon");
const menu_desplegado = document.getElementById("menu-desplegado");

hamburguesa_icon.addEventListener("click", (e) => {
    menu_desplegado.classList.toggle("ocultar-menu-desplegado");
})