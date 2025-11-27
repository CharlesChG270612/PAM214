import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,
    StyleSheet, Alert, ActivityIndicator, Platform, Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);
    const [guardando, setGuardando] = useState(false);
    const [editando, setEditando] = useState(false);
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [nombreEditado, setNombreEditado] = useState('');

    // SELECT - Cargar usuarios desde la BD
    const cargarUsuarios = useCallback(async () => {
        try {
            setLoading(true);
            const data = await controller.obtenerUsuarios();
            console.log('Datos recibidos de la BD:', data);
            setUsuarios(data);
            console.log(`${data.length} usuarios cargados`);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initializen y cargan datos
    useEffect(() => {
        const init = async () => {
            await controller.initialize();
            await cargarUsuarios();
        };

        init();
        controller.addListener(cargarUsuarios);

        return () => {
            controller.removeListener(cargarUsuarios);
        };
    }, [cargarUsuarios]);

    // INSERT - Agregar nuevo usuario
    const handleAgregar = async () => {
        if (guardando) return;
        try {
            setGuardando(true);
            const usuarioCreado = await controller.crearUsuario(nombre);
            alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
            Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
            setNombre('');
        } catch (error) {
            alert('Error', error.message);
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    };

    // UPDATE - Abrir modal para editar
    const handleEditar = (usuario) => {
        setUsuarioEditando(usuario);
        setNombreEditado(usuario.nombre);
        setModalVisible(true);
    };

    // UPDATE - Confirmar edición
    const handleConfirmarEdicion = async () => {
        if (editando || !usuarioEditando) return;
        
        try {
            setEditando(true);
            const usuarioActualizado = await controller.actualizarUsuario(
                usuarioEditando.id, 
                nombreEditado
            );
            alert('Usuario Actualizado', `"${usuarioActualizado.nombre}" actualizado correctamente`);
            Alert.alert('Usuario Actualizado', `"${usuarioActualizado.nombre}" actualizado correctamente`);
            setModalVisible(false);
            setUsuarioEditando(null);
            setNombreEditado('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setEditando(false);
        }
    };

    // DELETE - Eliminar usuario con confirmación
    const handleEliminar = (usuario) => {
         Alert.alert(
            'Confirmar Eliminación',
            `¿Estás seguro de que quieres eliminar a "${usuario.nombre}"?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { 
                    text: 'Eliminar', 
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const usuarioEliminado = await controller.eliminarUsuario(usuario.id);
                            alert('Usuario Eliminado', `"${usuarioEliminado.nombre}" fue eliminado correctamente`);
                            Alert.alert('Usuario Eliminado', `"${usuarioEliminado.nombre}" fue eliminado correctamente`);
                        } catch (error) {
                            Alert.alert('Error', error.message);
                        }
                    }
                }
            ]
        );
        Alert.alert(
            'Confirmar Eliminación',
            `¿Estás seguro de que quieres eliminar a "${usuario.nombre}"?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { 
                    text: 'Eliminar', 
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            const usuarioEliminado = await controller.eliminarUsuario(usuario.id);
                            alert('Usuario Eliminado', `"${usuarioEliminado.nombre}" fue eliminado correctamente`);
                            Alert.alert('Usuario Eliminado', `"${usuarioEliminado.nombre}" fue eliminado correctamente`);
                        } catch (error) {
                            Alert.alert('Error', error.message);
                        }
                    }
                }
            ]
        );
    };

    // Función para formatear la fecha de forma segura
    const formatDate = (dateString) => {
        if (!dateString) return 'Fecha no disponible';
        
        try {
            const date = new Date(dateString);
            
            if (isNaN(date.getTime())) {
                return 'Fecha inválida';
            }
            
            return date.toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            console.error('Error formateando fecha:', error);
            return 'Error en fecha';
        }
    };

    // Renderizan cada usuario con botones de editar y eliminar
    const renderUsuario = ({ item, index }) => (
        <View style={styles.userItem}> 
            <View style={styles.userNumber}> 
                <Text style={styles.userNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.userInfo}> 
                <Text style={styles.userName}>{item.nombre}</Text>
                <Text style={styles.userId}>ID: {item.id}</Text>
                <Text style={styles.userDate}> 
                    {formatDate(item.fecha_creacion)}
                </Text>
            </View>
            <View style={styles.userActions}>
                <TouchableOpacity 
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => handleEditar(item)}
                >
                    <Text style={styles.actionButtonText}>Actualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => handleEliminar(item)}
                >
                    <Text style={styles.actionButtonText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            {/* Zona del encabezado */}
            <Text style={styles.title}>CRUD COMPLETO - USUARIOS</Text>
            <Text style={styles.subtitle}>
                {Platform.OS === 'web' ? 'WEB (LocalStorage)' : `${Platform.OS.toUpperCase()} (SQLite)`}
            </Text>
            
            {/* Zona del INSERT */}
            <View style={styles.insertSection}>
                <Text style={styles.sectionTitle}>Insertar Usuario</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Escribe el nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                    editable={!guardando}
                />

                <TouchableOpacity 
                    style={[styles.button, guardando && styles.buttonDisabled]} 
                    onPress={handleAgregar}
                    disabled={guardando} 
                >
                    <Text style={styles.buttonText}>
                        {guardando ? 'Guardando...' : 'Agregar Usuario'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Zona del SELECT */}
            <View style={styles.selectSection}>
                <View style={styles.selectHeader}>
                    <Text style={styles.sectionTitle}>Lista de Usuarios</Text>
                    <TouchableOpacity 
                        style={styles.refreshButton}
                        onPress={cargarUsuarios} 
                    >
                        <Text style={styles.refreshText}>Recargar</Text>
                    </TouchableOpacity>
                </View>

                {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#007AFF" />
                        <Text style={styles.loadingText}>Cargando usuarios...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={usuarios}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderUsuario}
                        ListEmptyComponent={
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No hay usuarios</Text>
                                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
                            </View>
                        }
                        contentContainerStyle={usuarios.length === 0 && styles.emptyList}
                    />
                )}
            </View>

            {/* Modal para editar usuario */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar Usuario</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Nuevo nombre del usuario"
                            value={nombreEditado}
                            onChangeText={setNombreEditado}
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.modalButton, styles.confirmButton, editando && styles.buttonDisabled]}
                                onPress={handleConfirmarEdicion}
                                disabled={editando}
                            >
                                <Text style={styles.modalButtonText}>
                                    {editando ? 'Guardando...' : 'Guardar'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    insertSection: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectSection: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    selectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    refreshButton: {
        padding: 8,
    },
    refreshText: {
        color: '#007AFF',
        fontSize: 14,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
        fontSize: 14,
    },
    userItem: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
        alignItems: 'center',
    },
    userNumber: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    userNumberText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    userId: {
        fontSize: 12,
        color: '#007AFF',
        marginBottom: 2,
    },
    userDate: {
        fontSize: 12,
        color: '#666',
    },
    userActions: {
        flexDirection: 'row',
    },
    actionButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginLeft: 8,
    },
    editButton: {
        backgroundColor: '#528401ff',
    },
    deleteButton: {
        backgroundColor: '#b90900ff',
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
    emptyContainer: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#bbb',
    },
    // Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#8E8E93',
    },
    confirmButton: {
        backgroundColor: '#007AFF',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});