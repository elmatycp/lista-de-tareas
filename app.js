import checked from "./js/checked.js";
import dragDrop from "./js/drag-drop.js";
import logica from "./js/logica.js";
import ventana from "./js/ventana.js";

const d = document;

d.addEventListener('DOMContentLoaded', e=>{
    ventana()
    dragDrop()
})

logica()
checked()
