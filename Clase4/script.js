let contador = 0;
let promedioNotas = 0;
let notaAnterior = 0;
let nota = 0;
let sumaNotas = 0;
let terminar = true;
let condicion = 0;

function promedio(nota){
  contador = ++contador;
  sumaNotas = (nota + notaAnterior);
  notaAnterior = sumaNotas;
  promedioNotas = sumaNotas / contador;
  return(promedioNotas);
}

while(terminar){

  resultado = Number(prompt("Ingrese resultado de la nota Nº" + (contador + 1)));
  let salida = promedio(resultado);
  if(contador > 1){
    condicion = parseInt(prompt("Para ingresar otra nota presione 1 \nPara ver el promedio presione 0"));
    if(condicion === true){
      alert("El promedio de las notas es: " + salida.toFixed(1));
      terminar = parseInt(prompt("Para ingresar otra nota presione 1 \nPara salir presione 0"));
    }
  }
}
