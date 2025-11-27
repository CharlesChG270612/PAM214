import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    async initialize() {
        await DatabaseService.initialize();
    }
    
    async obtenerUsuarios() {
        try {
            console.log('Controller: Obteniendo usuarios...');
            const data = await DatabaseService.getAll();
            console.log('Controller: Datos crudos recibidos:', data);
            
            const usuariosMapeados = data.map(u => {
                console.log('Controller: Mapeando usuario:', u);
                return new Usuario(u.id, u.nombre, u.fecha_creacion);
            });
            
            console.log('Controller: Usuarios mapeados:', usuariosMapeados);
            return usuariosMapeados;
        } catch (error) {
            console.error('Controller: Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }
    
    async crearUsuario(nombre) {
        try {
            console.log('Controller: Creando usuario:', nombre);
            Usuario.validar(nombre);
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            this.notifyListeners();

            const usuarioInstancia = new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
            
            console.log('Controller: Usuario creado:', usuarioInstancia);
            return usuarioInstancia;
        } catch (error) {
            console.error('Controller: Error al crear usuario:', error);
            throw error;
        }
    }

    async actualizarUsuario(id, nombre) {
        try {
            console.log('Controller: Actualizando usuario ID:', id, 'Nuevo nombre:', nombre);
            
            Usuario.validar(nombre);

            const usuarioActualizado = await DatabaseService.update(id, nombre.trim());

            this.notifyListeners();

            const usuarioInstancia = new Usuario(
                usuarioActualizado.id,
                usuarioActualizado.nombre,
                usuarioActualizado.fecha_creacion
            );
            
            console.log('Controller: Usuario actualizado:', usuarioInstancia);
            return usuarioInstancia;
        } catch (error) {
            console.error('Controller: Error al actualizar usuario:', error);
            throw error;
        }
    }

    async eliminarUsuario(id) {
        try {
            console.log('Controller: Eliminando usuario ID:', id);
            
            const usuarioEliminado = await DatabaseService.delete(id);

            this.notifyListeners();

            const usuarioInstancia = new Usuario(
                usuarioEliminado.id,
                usuarioEliminado.nombre,
                usuarioEliminado.fecha_creacion
            );
            
            console.log('Controller: Usuario eliminado:', usuarioInstancia);
            return usuarioInstancia;
        } catch (error) {
            console.error('Controller: Error al eliminar usuario:', error);
            throw error;
        }
    }
    
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}