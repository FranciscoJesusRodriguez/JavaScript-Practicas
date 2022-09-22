const baseDeDatos = [
  {
      id: 1,
      modelo: "S10",
      marca: "SAMSUNG",
      precio: 46358,
      imagen: "samsungS10.jpg"
  },
  {
      id: 2,
      modelo: "A32",
      marca: "SAMSUNG",
      precio: 68320,
      imagen: "samsungA32.jpg"
  },
  {
      id: 3,
      modelo: "E40",
      marca: "MOTOROLA",
      precio: 41000,
      imagen: "motoE40.jpg"
  },
  {
      id: 4,
      modelo: "G52",
      marca: "MOTOROLA",
      precio: 60320,
      imagen: "motoG52.jpg"
  },
  {
    id: 5,
    modelo: "A33",
    marca: "SAMSUNG",
    precio: 80000,
    imagen: "samsungA33.jpg"
  },
  {
    id: 6,
    modelo: "G51",
    marca: "MOTOROLA",
    precio: 54000,
    imagen: "motoG51.jpg"
  },
  {
    id: 7,
    modelo: "E20",
    marca: "MOTOROLA",
    precio: 35000,
    imagen: "motoE20.jpg"
  }
];

function cuotas12(precio){
  return (precio*(1.15));
}
let ingreso = parseInt(prompt("Ingrese numero según criterio de búsqueda: \nMarca --> Presione 1\nPrecio --> Presione 2"));

if(ingreso === 1){
  let marcaCel = prompt("Ingrese marca de celular:");
  let filtrado = baseDeDatos.filter(index => index.marca === marcaCel.toUpperCase());
  filtrado.forEach((item) => {
    let salida = `
      Marca: ${item.marca}
      Modelo: ${item.modelo}
      $${item.precio}
    `; 
    alert(salida);
  });
};

if(ingreso === 2){
  let precio = parseInt(prompt("Ingrese el precio máximo:"));
  let filtrado = baseDeDatos.filter(index => index.precio < precio);
  filtrado.forEach((item) => {
    let salida = `
      Marca: ${item.marca}
      Modelo: ${item.modelo}
      Precio: $${item.precio}
      Precio en 12 cuotas: $${(cuotas12(item.precio)).toFixed(2)}
      Cuotas de: $${(cuotas12(item.precio)/12).toFixed(2)}
    `; 
    alert(salida);
  });
};
