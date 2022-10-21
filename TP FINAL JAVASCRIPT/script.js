const baseDeDatos = [
  {
    id: 1,
    modelo: "S10",
    marca: "SAMSUNG",
    precio: 46358,
    imagen: "samsungS10.png",
    oferta: true
  },
  {
    id: 2,
    modelo: "A32",
    marca: "SAMSUNG",
    precio: 68320,
    imagen: "samsungA32.png",
    oferta: false
  },
  {
    id: 3,
    modelo: "E40",
    marca: "MOTOROLA",
    precio: 41000,
    imagen: "motoE40.png",
    oferta: true
  },
  {
    id: 4,
    modelo: "G52",
    marca: "MOTOROLA",
    precio: 60320,
    imagen: "motoG52.png",
    oferta: false
  },
  {
    id: 5,
    modelo: "A33",
    marca: "SAMSUNG",
    precio: 80000,
    imagen: "samsungA33.png",
    oferta: false
  },
  {
    id: 6,
    modelo: "G51",
    marca: "MOTOROLA",
    precio: 54000,
    imagen: "motoG51.png",
    oferta: true
  },
  {
    id: 7,
    modelo: "E20",
    marca: "MOTOROLA",
    precio: 35000,
    imagen: "motoE20.png",
    oferta: false
  },
  {
    id: 8,
    modelo: "K22",
    marca: "LG",
    precio: 99899,
    imagen: "lgK22.png",
    oferta: false
  },
  {
    id: 9,
    modelo: "K10",
    marca: "LG",
    precio: 38980,
    imagen: "lgK10.png",
    oferta: true
  },
  {
    id: 10,
    modelo: "L90",
    marca: "LG",
    precio: 36289,
    imagen: "lgL90.png",
    oferta: false
  },
  {
    id: 11,
    modelo: "K92",
    marca: "LG",
    precio: 140000,
    imagen: "lgK92.png",
    oferta: false
  }
];

let carrito = [];
let contenedor = document.getElementById('contenedor');
let formulario = document.getElementById('formulario1');
let inputPrecio = document.getElementById('precio');
let carritoDeCompras = document.getElementById('carroDeCompras');
let linkMoto = document.getElementById("MOTOROLA");
let linkSam = document.getElementById("SAMSUNG");
let linkLG = document.getElementById("LG");
let mostrarCarro = document.getElementById("mostrarCarrito");
let mostrarProductos = document.getElementById("mostrarTodos");
let mostrarContacto = document.getElementById("mostrarContacto");

let carritoTemp = localStorage.getItem("carrito");
carritoTemp = JSON.parse(carritoTemp);
carrito = carritoTemp;

function getPopUpCarrito(){
  let contenedorCarrito = document.createElement('div');
  let producto = baseDeDatos.filter((item) => carrito.indexOf(item.id) > -1);
  producto.forEach((item) => {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="center_prod_box">
        <div class="product_title"><a>${item.marca}-${item.modelo}</a></div>
        <div class="product_img"><a><img src="./images/${item.imagen}" alt="" border="0" width="70" height="90" /></a></div>
        <div class="prod_price"><span class="price">$${item.precio}</span></div>
        <button onclick="btnQuitar(${item.id})" class="prod_details2">Quitar</button>
    </div>
    `;
    contenedorCarrito.append(div);
  });
  return contenedorCarrito;
}

function mostrarCarrito(){
  Swal.fire({
    title: '<strong>Carrito de compras</strong>',
    html: getPopUpCarrito(),
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Salir',
  });
};

function btnQuitar(idItem){
  let carritoTemp = localStorage.getItem("carrito");
  carritoTemp = JSON.parse(carritoTemp);
  carritoTemp.splice(carritoTemp.indexOf(idItem), 1);
  carrito.splice(carrito.indexOf(idItem), 1);
  localStorage.setItem("carrito", JSON.stringify(carritoTemp));
  mostrarInfoCarrito();
  totalSumaCarrito();
  Swal.close();
  mostrarCarrito();
};

function totalSumaCarrito(){
  let carritoTemp = localStorage.getItem("carrito");
  carritoTemp = JSON.parse(carritoTemp);
  let resultado = 0;
  let productos = baseDeDatos.filter((item) => carritoTemp.indexOf(item.id) > -1);
  productos.forEach((item) => resultado += item.precio);
  return resultado;
};

function agregarAlCarrito(itemId){

  carrito.push(itemId);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarInfoCarrito();
  Swal.fire(
    'Genial!',
    'Agregaste al carrito!',
    'success'
  )
};

function mostrarInfoCarrito(){
  let carritoTemp = localStorage.getItem("carrito");
  carritoTemp = JSON.parse(carritoTemp);
  carritoDeCompras.innerHTML = "";
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="cart_details"> Cantidad: ${carritoTemp.length} <br />
    <span class="border_cart"></span> Total: <span class="price">$${totalSumaCarrito()}</span> </div>
    `;
  carritoDeCompras.append(div);
};

function filtrarProductos(e){
  let target;  
  if(e){
    e.preventDefault();
    target = e.target.id
  }
  contenedor.innerHTML = "";
  let producto = target ? baseDeDatos.filter((item) => item.marca === target) : baseDeDatos;
  producto.forEach((item) => {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="center_prod_box">
        <div class="product_title"><a>${item.marca}-${item.modelo}</a></div>
        <div class="product_img"><a><img src="./images/${item.imagen}" alt="" border="0" width="70" height="90" /></a></div>
        <div class="prod_price"><span class="price">$${item.precio}</span></div>
        <a onclick="agregarAlCarrito(${item.id})" title="agregar"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
    </div>
    `;
    contenedor.append(div);
  });
};

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.precio < inputPrecio.value);
    producto = producto.sort((A,B) => {
      if(A.precio<B.precio){
        return 1;
      }
      return -1;
    });
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a>${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a><img src="./images/${item.imagen}" alt="" border="0" width="70" height="100" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a onclick="agregarAlCarrito(${item.id})" title="agregar"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });
});

async function getJSONPlaceholderResponse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const json = await response.json();

  return json;

  //   ---------- Respuesta de la API --------------
  // {
  //   address: {
  //     city: "Gwenborough",
  //     geo: { ... },
  //     street: "Kulas Light",
  //     suite: "Apt. 556",
  //     zipcode: "92998-3874"
  //   },
  //   company: {
  //     bs: "harness real-time e-markets",
  //     catchPhrase: "Multi-layered client-server neural-net",
  //     name: "Romaguera-Crona"
  //   },
  //   email: "Sincere@april.biz",
  //   id: 1,
  //   name: "Leanne Graham",
  //   phone: "1-770-736-8031 x56442",
  //   username: "Bret",
  //   website: "hildegard.org"
  // }
}

async function getContactoPage(e){
  let target;  
  if(e){
    e.preventDefault();
    target = e.target.id
  }
  const empresa = await getJSONPlaceholderResponse();

  contenedor.innerHTML = "";
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="center_prod_box">
        <p>Nombre: ${empresa.company.name}</p>
        <p>${empresa.company.bs}</p>
        <p>Direccion: ${empresa.address.street} ${empresa.address.suite}</p>
        <p>Codigo postal: ${empresa.address.zipcode}</p>
    </div>
    `;
    contenedor.append(div);
};

mostrarInfoCarrito();

mostrarProductos.addEventListener("click", filtrarProductos);

mostrarContacto.addEventListener("click", getContactoPage);

linkMoto.addEventListener("click", filtrarProductos);

linkSam.addEventListener("click", filtrarProductos);

linkLG.addEventListener("click", filtrarProductos);

mostrarCarro.addEventListener("click", mostrarCarrito);








