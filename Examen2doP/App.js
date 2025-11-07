import { Text, StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native'
import {useEffect, useState} from 'react';

export default function App() {
  const[showsplash,setshowsplash] = useState(true);
  useEffect (() =>{
    const timer = setTimeout (()=>{
      setshowsplash(false);
    },4000);
    return () => clearTimeout(timer);
  },[]);

  if(showsplash){
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido Usuario</Text>
      </View>
    );
  }
  return (
   <SafeAreaView style={{flex:1}}>
      <ImageBackground 
      source={{
        uri: 'https://e0.pxfuel.com/wallpapers/39/219/desktop-wallpaper-black-dark-abstract.jpg',
      }}//
      style={styles.background}
      >
      <View style={styles.overlay}>
        <Text style={styles.label}>Perfil personal</Text>
        <Text style={styles.label}>Nombre completo: Carlos Chávez García</Text>
        <Text style={styles.label}>Profesion/Título: Ingeniería en Tecnología de la Información e Innovación dígital</Text>
        <Text style={styles.label}>Breve biografía:</Text>
        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.label}>Número de teléfono:</Text>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
   overlay: {
    backgroundColor: 'rgba(43, 42, 42, 0.5)', 
    padding: 20, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
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
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});
