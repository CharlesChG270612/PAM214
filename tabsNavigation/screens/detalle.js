import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles usuario</Text>
      <Text style={styles.info}>Usando Navegación Stack</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  info: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#140d6bff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonHome: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
