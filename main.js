/*class producto {
    constructor (pnombre, pprecio, pstock){
        this.nombre = pnombre;
        this.precio = pprecio;
        this.stock = pstock;
        this.IVA = 0.19;
    }

    calcularprecioconIVA () {
        return this.precio * (1 + this.IVA) ;
    } 
        
    mostrarinformacion () { 
        return nombre: ${this.nombre}, precio: ${this.precio}, cantidad: ${this.stock}
    }
    
    vender(cantidad){
        if (cantidad <=this.stock){
            this.stock -=cantidad;
            return se vendieron ${cantidad} zapatos ${this.nombre}, quedan ${this.stock};
        }else{
            return no hay suficientes unidades para la venta, quedan ${this.stock} unidades de ${this.nombre}.;
        }
    }

    comprar(cantidad){
        if (cantidad <=this.stock){
            this.stock +=cantidad;
            return comprar  ${cantidad} zapatos ${this.nombre};
        }
    }

    
    comprobarInventario() {
        if (this.stock === 0) {
          console.log(No tienes "${this.nombre}" en el inventario.);
        } else if (this.stock <= 3) {
          console.log(Quedan pocas unidades de "${this.nombre}": ${this.stock} unidad(es).);
        } else {
          console.log(Estamos bien de inventario para "${this.nombre}": ${this.stock} unidad(es).);
        }
      }
    
    ffffcfvfg dwedcedc deweefv

    
}*/

/*
const colores = ["rojo","azul"];
console.log(colores)
    colores.push("verde")
*/

const productos = [
{id: 1, nombre: "camisa", precio: 40000, categoria: "moda" },
{id: 2, nombre: "cafe de origen", precio: 20000, categoria: "alimentos" },
{id: 3, nombre: "laptop gamer", precio: 4500000, categoria: "tecnologia" },
{id: 4, nombre: "mouse inalambrico", precio: 80000, categoria: "tecnologia" },
{id: 5, nombre: "libro de javascript", precio: 50000, categoria: "libros" },
{id: 6, nombre: "miel pura", precio: 25000, categoria: "alimentos" },

/*Ejercicios con .forEach()*/

];
productos.forEach(productos => {
    console.log(`producto: ${productos.nombre}`)
})
productos.forEach(productos => {
    console.log(`el producto ${productos.nombre}tiene un precio de $${productos.precio}`);
});
let preciototal = 0;
productos.forEach(productos => {
     preciototal += productos.precio;
});
console.log(`el precio total de todos los productos es: $${preciototal}`); 

productos.forEach(productos => {
    if (productos.categoria === "tecnologia")
        console.log(productos.nombre);
});
productos.forEach(productos => {
    console.log(`ID: ${productos.id} - ${productos.nombre}`);
});
productos.forEach(productos =>{
    console.log(productos.nombre.toUpperCase());

/*Ejercicios con .map()*/

});
const precios = productos.map(productos => productos.precio);
console.log(precios);

const nombreYcategoria = productos.map(productos => {
    return {
        nombre: productos.nombre,
        categoria: productos.categoria
    };
});
console.log(nombreYcategoria);

const preciosconiva = productos.map(productos => {
    return +(productos.precio * 1.19).toFixed(2);
});
console.log(preciosconiva);

const nuevoarreglo = productos.map(productos => `${productos.nombre} (${productos.categoria})`);
console.log(nuevoarreglo);

const tasacambio = 4000;
const productosEnDolares = productos.map(productos => {
    return{
        id: productos.id,
        precioEnDolares: +(productos.precio / tasacambio).toFixed(2)
    };
});
console.log(productosEnDolares);

/*Ejercicios con .push()*/

const nuevasilla = {
    id:7,
    nombre: "silla de oficina ",
    precio: 350000
};
productos.push(nuevasilla);
console.log(productos);

let nuevoNombre = prompt("ingrese el nombre del producto:");
let nuevoPrecio = parseFloat(prompt("ingrese el precio del producto:"));

let nuevoid = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;

let nuevoproducto = {
    id:nuevoid,
    nombre: nuevoNombre,
    precio: nuevoPrecio,
    categoria: "general"
};

productos.push(nuevoproducto);

console.log("lista actualizada de productos:");
console.log(productos);

const nuevosProductos = [
  { id: 7, nombre: "teclado mecánico", precio: 120000, categoria: "tecnología" },
  { id: 8, nombre: "cuaderno", precio: 15000, categoria: "papelería" }
];


nuevosProductos.forEach(producto => {
  productos.push(producto);
});


console.log("Lista actualizada de productos:");
console.log(productos);

productos.push(100);
console.log(productos);

function agregarProducto(nombre, precio, categoria) {
  const nuevoId = productos.length > 0
    ? productos[productos.length - 1].id + 1
    : 1;

  const nuevoProducto = {
    id: nuevoId,
    nombre: nombre,
    precio: precio,
    categoria: categoria
  };

  productos.push(nuevoProducto);
  console.log("Producto agregado:", nuevoProducto);
}

/*Ejercicios con .fill()*/

let arreglo = new Array(5).fill(0);
console.log(arreglo); 

let copiaProductos = [...productos]; 


copiaProductos.fill("Oferta Especial", 0, 2);


console.log(copiaProductos);


const pendientes = new Array(10).fill("Pendiente");

console.log(pendientes);


const CopiaProductos = [...productos];

CopiaProductos[3] = null;

console.log(CopiaProductos);

const vacantes = new Array(3).fill({ nombre: "Vacante", estado: "Libre" });
console.log(vacantes);
//SI MODIFICO EL ESTADO DE UNO DE LOS ELEMENTOS DEL ARREGLO
/*vacantes[0].estado = "Ocupado";
console.log(vacantes); */
