import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, {Component, useState} from 'react';

export default function TextScreen() {
const [nombre,setNombre] = useState('');
const [contraseña,setContraseña] = useState('');
const [multilinea,setMultilinea] = useState('');

const MostrarAlerta = () => {
  if([nombre.trim(),contraseña.trim(),multilinea.trim()].includes('')){
    alert('Error, Por favor rellena todos los campos.');
    Alert.alert('Error','Por favor rellena todos los campos.');
  }else{
    alert(`Hola,${nombre}!, Tu nombre ha sido registrado con éxito. Tu contraseña es ${contraseña}`);
    Alert.alert(`Hola,${nombre}!, Tu nombre ha sido registrado con éxito. Tu contraseña es ${contraseña}`);
    setNombre('');
  }
  
};
    return (
      <View style={styles.container} >
        <Text style={styles.label}>Ingresa tu nombre:</Text>
        <TextInput
        style={styles.input}
        placeholder='Ej. Carlos'
        value={nombre}
        onChangeText={setNombre}
        keyboardType='default'
        autoCapitalize='words'
        />

        <TextInput
        style={styles.input}
        placeholder='Ej. Password'
        value={contraseña}
        onChangeText={setContraseña}
        keyboardType='numeric'
        secureTextEntry = {true}
        />

        <TextInput
        style={styles.input} 
        multiline={true}
        value={multilinea}
        onChangeText={setMultilinea}
        numberOfLines={4}
        />

        <Button
        title='Saludar'
        onPress={MostrarAlerta}
        color= "pink"
        />

      </View>
    )
}

// 4. Estilos para nuestros componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});