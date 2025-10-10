//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2. Main: Zona de componentes 
export default function ContadorScreen() {

  const[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador} </Text>
    <View style={styles.contenedorBotones}>
      <Button color='red' title='Incrementar'onPress ={()=> setContador(contador +1)} ></Button>
      <Button color='green' title='Quitar' onPress ={()=> setContador(contador -1)} ></Button>
      <Button color='blue' title='Reiniciar'onPress ={()=> setContador(contador - contador)} ></Button>
    </View>
      <StatusBar style="auto" />

    </View>
  );
}

//3. Estilos: Zona estetica y posicionamiento(objeto estilos)
const styles = StyleSheet.create({
  container: {
    flex: 1,//Asigna el espacio disponible para trabajar la vista(1= aprovecha el espacio al 100%)
    backgroundColor: '#df82feff',
    alignItems: 'center',//start mueve los elementos a la izquierda,end mueve los elementos a la derecha, trabaja en el eje x
    justifyContent: 'center',// trabaja en el eje y
  },
  texto:{
    color: '#08033ba8',
    fontSize:30,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',//Texto en negrita
    fontStyle: 'italic',//Aspecto de lado
    textDecorationLine: 'line-through',//Aspecto tachado
  },
  texto2:{
    color: '#ff0000a8',
    fontSize:40,
    fontFamily: 'Arial',
    fontWeight: '200',//Texto en negrita
    textDecorationLine: 'underline',//Aspecto linea debajo
  },
  contenedorBotones:{
    marginTop: 15,// Pone los elementos más abajo
    flexDirection:'row',// Como se posicionan los elementos en columna(column) o filas(row) o row.reverse(Alterna los elementos)
    gap: 15,//Distribucion o espacio equidistante entre elementos

  },
});
