const hamburguesa_icon = document.getElementById("hamburguesa-icon");
const menu_desplegado = document.getElementById("menu-desplegado");

hamburguesa_icon.addEventListener("click", (e) => {
    menu_desplegado.classList.toggle("ocultar-menu-desplegado");
})

const en_platos = document.getElementById("en-platos");
const platos1 = document.getElementById("platos1");
const flecha_abajo_platos = document.getElementById("flecha-abajo-platos");
const flecha_arriba_platos = document.getElementById("flecha-arriba-platos");

en_platos.addEventListener("click", (e) => {
    platos1.classList.toggle("ocultar-platos1");
    flecha_abajo_platos.classList.toggle("ocultar-flecha-platos");
    flecha_arriba_platos.classList.toggle("ocultar-flecha-platos");
})

const en_cocktails = document.getElementById("en-cocktails");
const platos2 = document.getElementById("platos2");
const flecha_abajo_cocktails = document.getElementById("flecha-abajo-cocktails");
const flecha_arriba_cocktails = document.getElementById("flecha-arriba-cocktails");

en_cocktails.addEventListener("click", (e) => {
    platos2.classList.toggle("ocultar-platos2");
    flecha_abajo_cocktails.classList.toggle("ocultar-flecha-cocktails");
    flecha_arriba_cocktails.classList.toggle("ocultar-flecha-cocktails");
})