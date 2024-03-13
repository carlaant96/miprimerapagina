//alert("Hola este es mi Javascript");

//let nombre = "Carlota";

//var nombre1 = "Carlota";

//const nombre2 = "Carlota";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

let contenidoTitulo = "Acerca de mi"

let titulo = document.querySelector(".titulo")
console.log (titulo)

titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo=="Suju"){
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}

//FUNCIONES

let nombre = "Andrea"
let ciudad = "Huancayo"
let gusto = "verano"

let parrafo = document.querySelector(".parrafo1");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Hola! Mi nombre es ${nombre}, soy de ${ciudad}-Perú.
    Me gusta el ${gusto}, los girasoles y un buen café.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto)
