let array = [];

array.push(parseInt(prompt("Ingrese primer número")));
array.push(parseInt(prompt("Ingrese segundo número")));
array.push(parseInt(prompt("Ingrese tercer número")));

function calcular(){

  var mayor = -Infinity,
      menor = +Infinity,
      suma = 0,
      media = 0;

  for(i=0; i<array.length; i++){
    suma = parseInt(array[i]) + suma;
  }

  media = (suma/array.length).toFixed(1);

  for(i=0; i<array.length; i++){
    if(parseInt(array[i])<menor) menor = array[i];
  }

  for(i=0; i<array.length; i++){
    if(parseInt(array[i])>mayor) mayor = array[i];
  }

  alert("La media es: "+ media + "\nEl mayor es: " + mayor + "\nEl menor es: "+ menor);

}

calcular();