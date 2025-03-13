import React from 'react';
import { View, Text, TextInput, Image, ImageBackground, Button, ActivityIndicator } from 'react-native';
import useLoginViewModel from '../viewmodels/LoginViewModel';
import styles from '../styles/LoginStyles'; // Asegúrate de importar los estilos

const Login = ({ navigation }) => {
  const { email, setEmail, password, setPassword, loading, handleLogin } = useLoginViewModel();

  return (
    <ImageBackground source={require('../assets/degradado.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
        <Text style={styles.title}>Iniciar Sesión</Text>

        <View style={styles.formSquare}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            {loading ? (
              <ActivityIndicator size="large" color="#ff8000" />
            ) : (
              <Button title="Iniciar Sesión" onPress={() => handleLogin(navigation)} color="#ff8000" />
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;