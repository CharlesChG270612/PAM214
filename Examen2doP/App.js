import { Text, StyleSheet, View, SafeAreaView, ImageBackground,Button,Alert,ScrollView,RefreshControl } from 'react-native'
import {useEffect, useState} from 'react';

export default function App() {
  const[showsplash,setshowsplash] = useState(true);
  useEffect (() =>{
    const timer = setTimeout (()=>{
      setshowsplash(false);
    },4000);
    return () => clearTimeout(timer);
  },[]);

  const MostrarAlerta = () => {
    alert('Guardar',);
    Alert.alert();
    
};

  if(showsplash){
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido Usuario</Text>
      </View>
    );
  }


 
  return (
   <SafeAreaView style={{flex:1}}>
      <ScrollView
      >
      <ImageBackground 
      source={{
        uri: 'https://e0.pxfuel.com/wallpapers/39/219/desktop-wallpaper-black-dark-abstract.jpg',
      }}//
      style={styles.background}
      >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Perfil personal</Text>
        <Text style={styles.label}>Nombre completo:</Text>
        <Text style={styles.content}>Carlos Chávez García</Text>
        <Text style={styles.label}>Profesion/Título:</Text>
        <Text style={styles.content}>Ingeniería en Tecnología de la Información e Innovación dígital</Text>
        <Text style={styles.label}>Breve biografía:</Text>
        <Text style={styles.content}>Mi nombre es Carlos Chávez García, nací el 27 de Diciembre de 2006,</Text>
        <Text style={styles.content}>vivo en Querétaro y estudio la Ingeniería en Tecnologías de Información e Innovación</Text>
        <Text style={styles.content}>dígital en la Universidad Politecnica de Querétaro donde me encuentro cursando el</Text>
        <Text style={styles.content}>cuarto cuatrimestre de la carrera, me interesa el manejo de software y las</Text>
         <Text style={styles.content}>matemáticas donde principalmente destaco.</Text>
        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.content}>carlchavz43@gmail.com</Text>
        <Text style={styles.label}>Número de teléfono:</Text>
        <Text style={styles.content}>+52 448 111 7319</Text>
         <Button
        title='Editar perfil'
        onPress={MostrarAlerta}
        color= "green"
        />
      </View>
      </ImageBackground>
      </ScrollView>
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
   titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
    content: {
    fontSize: 25,
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff',
  },
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});
