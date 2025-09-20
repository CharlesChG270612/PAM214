const personas = [
    {nombre: "Ana",edad: 22},
    {nombre: "Luis",edad: 35},
    {nombre: "María",edad: 28}
];
//Funcion find
const NombreLuis = personas.find(PersonaNombre => PersonaNombre.nombre ==="Luis")
console.log(NombreLuis);

//Función forEach
personas.forEach(Persona =>{
    console.log(Persona.nombre,Persona.edad);
});

//Función reduce
const TodasEdades = personas.reduce((acumuladorEdades,edadPersona)=>{
    return acumuladorEdades + edadPersona.edad;
},0);
console.log("Total de la suma: "+ TodasEdades);