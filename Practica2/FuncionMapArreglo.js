const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];

const NombreProductos = productos.filter(Producto =>Producto.precio > 1000).map(productos=>productos.nombre);
console.log(NombreProductos);


/*Otra manera sin función filter
const NombreProductos = productos.map(Producto =>{
if(Producto.precio > 1000){
    return Producto.nombre;
}
});
console.log(NombreProductos); */