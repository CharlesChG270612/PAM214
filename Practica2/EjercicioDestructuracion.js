const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

//Destructuración
const{nombre,edad,direccion: {ciudad: nombreciudad}} = persona;


console.log("Me llamo "+ nombre +" tengo "+ edad + " y vivo en "+ nombreciudad);
