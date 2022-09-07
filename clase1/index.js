let terminar = 1;

while(terminar){

    let montoInversion = Number(prompt("Ingrese monto a invertir en pesos (sin punto, ni coma)"));
    let interesAnual = Number(prompt("Ingrese interes anual (sin %)"));
    let interesMensual = (interesAnual / 12) / 100;
    let montoFinal = montoInversion + (montoInversion * interesMensual);
    alert("Su plazo fijo mensual es de: $" + montoFinal);
    terminar = parseInt(prompt("Para volver a simular ingrese 1, para salir ingrese 0"));
}