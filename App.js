import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Página inicial
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Eu confio na minha amiga Isabella, porque a amo.</Text>
    <Text style={styles.paragraph}>Eu desafio ela a sorrir.</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Emmily')}>
      <Text style={styles.buttonText}>Amiga Esquerda</Text>
    </TouchableOpacity>
  </View>
);

// Página para "Amiga Esquerda"
const EmmilyPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Eu confio na minha amiga Emmily, porque a amo.</Text>
    <Text style={styles.paragraph}>Eu desafio ela a imitar um macaco.</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Amiga Direita</Text>
    </TouchableOpacity>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Emmily" component={EmmilyPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  paragraph: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8a2be2',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;

