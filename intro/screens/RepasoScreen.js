import { Text, StyleSheet, View, SafeAreaView, ImageBackground,TextInput,Button,Alert,Switch } from 'react-native'
import {useEffect, useState} from 'react';

export default function ImageScreen(){
const [nombre,setNombre] = useState('');
const [correo,setcorreo] = useState('');
const[aceptaTerminos,setAceptaTerminos] = useState(false);
  const[showsplash,setshowsplash] = useState(true);
  useEffect (() =>{
    const timer = setTimeout (()=>{
      setshowsplash(false);
    },2000);
    return () => clearTimeout(timer);
  },[]);

 const esCorreoValido = (correo) => {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.(com)$/;
  return regexCorreo.test(correo);
};

const MostrarAlerta = () => {
  const nombreVacio = nombre.trim() === '';
  const correoVacio = correo.trim() === '';
  const noAceptaTerminos = !aceptaTerminos;



  if (nombreVacio && correoVacio && noAceptaTerminos) {
    alert('Error, Por favor rellena todos los campos');
    Alert.alert('Error', 'Por favor rellena todos los campos');
  }

  else if (nombreVacio && correoVacio) {
    alert('Error, Por favor rellena los campos de nombre y correo');
    Alert.alert('Error', 'Por favor rellena los campos de nombre y correo');
    return;
  } else if (nombreVacio && noAceptaTerminos) {
    alert('Error, Por favor rellena el campo de nombre y acepta los términos y condiciones');
    Alert.alert('Error', 'Por favor rellena el campo de nombre y acepta los términos y condiciones');
    return;
  } else if (correoVacio && noAceptaTerminos) {
    alert('Error, Por favor rellena el campo de correo y acepta los términos y condiciones');
    Alert.alert('Error', 'Por favor rellena el campo de correo y acepta los términos y condiciones');
  return;
}
  else if (nombreVacio) {
    alert('Error, Por favor rellena el campo de nombre');
    Alert.alert('Error', 'Por favor rellena el campo de nombre');
    return;
  } else if (correoVacio) {
    alert('Error, Por favor rellena el campo de correo');
    Alert.alert('Error', 'Por favor rellena el campo de correo');
    return;
  } else if (noAceptaTerminos) {
    alert('Error, Por favor acepta los términos y condiciones');
    Alert.alert('Error', 'Por favor acepta los términos y condiciones');
  return;
}
  else if (!esCorreoValido(correo)) {
  alert('Error, el correo debe tener un formato válido y terminar en .com');
  Alert.alert('Error', 'El correo debe tener un formato válido y terminar en .com');
  return;
}
    alert(`Registro exitoso,\nNombre: ${nombre},\nCorreo: ${correo}`);
    Alert.alert('Registro exitoso', `Nombre: ${nombre},\nCorreo: ${correo}`);
    setNombre('');
    setCorreo('');
    setAceptaTerminos(false);

};

  if(showsplash){
    return (
      <View style={styles.splashContainer}>
        <ImageBackground 
        source={{
        uri: 'https://cdn.dribbble.com/userupload/17064056/file/original-23909ae05b7ad399e60a61467cca821f.jpg?resize=400x0',
      }}
      style={styles.imagen}
      > </ImageBackground>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
      source={{
        uri: 'https://img.freepik.com/vector-gratis/hojas-tropicales-fondo-zoom_23-2148580778.jpg?semt=ais_hybrid&w=740&q=80',
      }}//
      style={styles.background}
      >
      <View style={styles.overlay}>
        <Text style={styles.label}>Registro de usuario</Text>
        <TextInput
        style={styles.input}
        placeholder='Ingresa tu nombre'
        value={nombre}
        onChangeText={setNombre}
        keyboardType='default'
        autoCapitalize='words'
        />

        <TextInput
        style={styles.input}
        placeholder='Ingresa tu correo'
        value={correo}
        onChangeText={setcorreo}
        keyboardType='email-address'
        />
        <Text style={styles.label}>Aceptar terminos y condiciones </Text>
        <Switch
        onValueChange={setAceptaTerminos}
        value={aceptaTerminos}
        />

        <Button
        title='Registrarse'
        onPress={MostrarAlerta}
        color= "green"
        />

      </View>
      </ImageBackground>
    </SafeAreaView>
  )

    
}

// Estilos
const styles = StyleSheet.create({
  

  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },
   imagen: {
    width: 200,
    height: 200,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
   input: {
    color: '#fff', 
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 80, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
     
  },
});