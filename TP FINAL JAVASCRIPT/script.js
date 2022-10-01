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
  },
  {
    id: 8,
    modelo: "K22",
    marca: "LG",
    precio: 99899,
    imagen: "lgK22.jpg"
  },
  {
    id: 9,
    modelo: "K10",
    marca: "LG",
    precio: 38980,
    imagen: "lgK10.jpg"
  },
  {
    id: 10,
    modelo: "L90",
    marca: "LG",
    precio: 36289,
    imagen: "lgL90.jpg"
  },
  {
    id: 11,
    modelo: "K92",
    marca: "LG",
    precio: 140000,
    imagen: "lgK92.jpg"
  }
];

let contenedor = document.getElementById('contenedor');
let formulario = document.getElementById('formulario1');
let inputPrecio = document.getElementById('precio');


let linkMoto = document.getElementById("linkMoto");
let linkSam = document.getElementById("linkSam");
let linkLG = document.getElementById("linkLG");

contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.marca === "LG");
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a href="details.html">${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a href="#" title="header=[Agregar al carrito] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });

linkMoto.addEventListener("click", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.marca === "MOTOROLA");
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a href="details.html">${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a href="#" title="header=[Agregar al carrito] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });
});

linkSam.addEventListener("click", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.marca === "SAMSUNG");
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a href="details.html">${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a href="#" title="header=[Agregar al carrito] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });
});

linkLG.addEventListener("click", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.marca === "LG");
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a href="details.html">${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a href="#" title="header=[Agregar al carrito] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });
});

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.precio < inputPrecio.value);
    console.log(inputPrecio.value);
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a href="details.html">${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a href="#" title="header=[Agregar al carrito] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });
});

mostrarTodos.addEventListener("click", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let producto = baseDeDatos.filter((item) => item.id);
    producto.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="center_prod_box">
            <div class="product_title"><a href="details.html">${item.marca}-${item.modelo}</a></div>
            <div class="product_img"><a href="details.html"><img src="images/p4.gif" alt="" border="0" /></a></div>
            <div class="prod_price"><span class="price">$${item.precio}</span></div>
            <a href="#" title="header=[Agregar al carrito] body=[&nbsp;] fade=[on]"><img src="images/cart.gif" alt="" border="0" class="left_bt" /></a> <a href="details.html" class="prod_details">detalles</a>
        </div>
        `;
        contenedor.append(div);
    });
});