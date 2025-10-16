import { Text, StyleSheet, View, Button } from 'react-native'
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
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('contador')} title="Pract: Contador" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('botones')} title="Pract: Buttons & Switch" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('text')} title="Pract: Text Input & Alert" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('image')} title="Pract: ImageBackground & SplashScreen" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('scroll')} title="Pract: ScrollView" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('activity')} title="Pract: ActivityIndicator" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('flatlist')} title="Pract: FlatList & Section List" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('modal')} title="Pract: Modal" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => setScreen('bottom')} title="Pract: Bottom Sheet" />
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f0fe',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 8,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
