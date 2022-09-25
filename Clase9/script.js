function respuesta(nombre){
    console.log("Click", nombre);
}

let boton = document.getElementById("boton");
// boton.onclick = respuesta;
boton.addEventListener("click", () => respuesta("andres"));

