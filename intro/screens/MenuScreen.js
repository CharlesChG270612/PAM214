import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextScreen from './TextScreen'
import ImageScreen from './ImageScreen'
import ScrollScreen from './ScrollScreen'
import ActivityScreen from './ActivityScreen'
import FlatlistScreen from './FlatlistScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />
    case 'botones':
      return <BotonesScreen />
    case 'text':
      return <TextScreen />
    case 'image':
      return <ImageScreen />
    case 'scroll':
      return <ScrollScreen />
    case 'activity':
      return <ActivityScreen />
    case 'flatlist':
      return <FlatlistScreen />
    case 'modal':
      return <ModalScreen />
    case 'bottom':
      return <BottomScreen />
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('contador')}>
            <Text style={styles.buttonText}>Pract: Contador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('botones')}>
            <Text style={styles.buttonText}>Pract: Buttons & Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('text')}>
            <Text style={styles.buttonText}>Pract: Text Input & Alert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('image')}>
            <Text style={styles.buttonText}>Pract: ImageBackground & SplashScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('scroll')}>
            <Text style={styles.buttonText}>Pract: ScrollView</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('activity')}>
            <Text style={styles.buttonText}>Pract: ActivityIndicator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('flatlist')}>
            <Text style={styles.buttonText}>Pract: FlatList & Section List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('modal')}>
            <Text style={styles.buttonText}>Pract: Modal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('bottom')}>
            <Text style={styles.buttonText}>Pract: Bottom Sheet</Text>
          </TouchableOpacity>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2b2b2b',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // para Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
