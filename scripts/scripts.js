const boton = document.getElementById("DpModel");
const toggle = document.getElementById("Modal");
const equis = document.getElementById("equis");
console.log(boton);
console.log(toggle);
console.log(equis);

function agregar() {
  toggle.classList.toggle("opacity-0");
  toggle.classList.toggle("opacity-1");
  toggle.classList.toggle("pointer-events-none");
  toggle.classList.toggle("pointer-events-auto");
}
boton.addEventListener("click", agregar);
equis.addEventListener("click", agregar);
