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

let contenedor = document.getElementById('contenedor');
let formulario = document.getElementById('formulario1');
let inputMarca = document.getElementById('marca');
let inputBuscarMarca = document.getElementById('buscarMarca');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
  let marca = inputMarca.value.toUpperCase()
	let producto = baseDeDatos.filter((item) => item.marca === marca);
  console.log(producto);
 
  console.log(marca);
  if ((marca == "MOTOROLA") || (marca == "SAMSUNG" )) {
    producto.forEach((item) => {
      let div = document.createElement('div');
      div.innerHTML = `
      <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.marca}</p>
      <p><b>$${item.precio}</b></p>
      `;
      contenedor.append(div);
    });
  }
  else {
		alert('La marca para el producto que desea no existe, por favor vuelva a introducir la marca.');
	};
  
});


