import { Text, StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native'
import {useEffect, useState} from 'react';

export default function ImageScreen(){
  const[showsplash,setshowsplash] = useState(true);
  useEffect (() =>{
    const timer = setTimeout (()=>{
      setshowsplash(false);
    },1000);
    return () => clearTimeout(timer);
  },[]);

  if(showsplash){
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la app!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
      source={{
        uri: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/12/miles-morales-peter-parker-spider-man.jpg?w=1200&h=675&fit=crop',
      }}
      style={styles.background}
      >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido!</Text>
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
});