import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Initializen el controlador con el Service
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
            // 1. Validar datos
            Usuario.validar(nombre);

            // 2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores
            this.notifyListeners();

            // 4. Retornar usuario creado
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
    
    // Sistema de observadores para actualizar la vista automáticamente
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