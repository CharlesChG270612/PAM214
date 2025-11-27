import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }
    
    async initialize() {
        if (Platform.OS == 'web') {
            console.log('Usando LocalStorage para web');
        } else {
            console.log('Usando SQLite para móvil');
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(
                `CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                );`
            );
        }
    }
    
    // Función auxiliar para convertir a formato ISO
    ensureISODate(dateString) {
        console.log('Convirtiendo fecha a ISO:', dateString); // DEBUG
        if (!dateString) {
            console.log('Fecha vacía, usando fecha actual');
            return new Date().toISOString();
        }
        
        // Si ya es formato ISO, retornar tal cual
        if (dateString.includes('T')) {
            console.log('Ya es formato ISO');
            return dateString;
        }
        
        // Si es formato SQLite (YYYY-MM-DD HH:MM:SS), convertirlo
        if (dateString.includes(' ')) {
            const isoDate = dateString.replace(' ', 'T') + 'Z';
            console.log('Convertido a ISO:', isoDate);
            return isoDate;
        }
        
        // Si no se reconoce el formato, usar fecha actual
        console.log('Formato no reconocido, usando fecha actual');
        return new Date().toISOString();
    }
    
    async getAll() {
        try {
            console.log('Obteniendo todos los usuarios...');
            if (Platform.OS === 'web') {
                const data = localStorage.getItem(this.storageKey);
                const usuarios = data ? JSON.parse(data) : [];
                console.log('Usuarios desde localStorage:', usuarios);
                return usuarios;
            } else {
                // Asegurar que la fecha tenga formato ISO
                const usuarios = await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
                console.log('Usuarios desde SQLite (crudos):', usuarios);
                
                const usuariosConFechaISO = usuarios.map(usuario => ({
                    ...usuario,
                    fecha_creacion: this.ensureISODate(usuario.fecha_creacion)
                }));
                
                console.log('Usuarios con fechas ISO:', usuariosConFechaISO);
                return usuariosConFechaISO;
            }
        } catch (error) {
            console.error('Error en getAll:', error);
            throw error;
        }
    }
    
    async add(nombre) {
        try {
            console.log('Agregando usuario:', nombre);
            const fechaISO = new Date().toISOString();
            console.log('Fecha ISO generada:', fechaISO);
            
            if (Platform.OS == 'web') {
                const usuarios = await this.getAll();
                const nuevoUsuario = {
                    id: Date.now(),
                    nombre,
                    fecha_creacion: fechaISO
                };
                usuarios.unshift(nuevoUsuario);
                localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
                console.log('Usuario agregado a localStorage:', nuevoUsuario);
                return nuevoUsuario;
            } else {
                // Para SQLite, usamos CURRENT_TIMESTAMP que maneja SQLite automáticamente
                const result = await this.db.runAsync(
                    'INSERT INTO usuarios(nombre) VALUES (?)',
                    [nombre]
                );
                const nuevoUsuario = {
                    id: result.lastInsertRowId,
                    nombre,
                    fecha_creacion: fechaISO
                };
                console.log('Usuario agregado a SQLite:', nuevoUsuario);
                return nuevoUsuario;
            }
        } catch (error) {
            console.error('Error en add:', error);
            throw error;
        }
    }
}

// Exportar instancia de la clase
export default new DatabaseService();