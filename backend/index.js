import express from 'express';

const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
app.get("/productos", (rec, res) => {
    res.send([{
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
            oferta: true
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
            oferta: true
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
    ]);
})
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Express puerto ${process.env.PORT || server.address().port}`);
});