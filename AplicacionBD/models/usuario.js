export class Usuario {
    constructor(id, nombre, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fecha_creacion = fechaCreacion || new Date().toISOString(); // Cambié a fecha_creacion para coincidir
        console.log('Modelo Usuario creado:', { id, nombre, fecha_creacion: this.fecha_creacion });
    }
    
    // Validaciones del modelo
    static validar = (nombre) => {
        if (!nombre || nombre.trim().length === 0) {
            throw new Error('El nombre no puede estar vacío');
        }
        if (nombre.length > 50) {
            throw new Error('El nombre no puede tener más de 50 caracteres');
        }
        return true;
    }
}