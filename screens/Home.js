import React from "react";
import { View, Text, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import useHomeViewModel from "../viewmodels/HomeViewModel";
import styles from "../styles/HomeStyles"; // Importamos los estilos

const Home = ({ navigation }) => {
  const { counter, handleDecrement, handleReset, handleLogout } = useHomeViewModel(navigation);

  return (
    <ImageBackground source={require("../assets/degradado.jpg")} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Botón de Cerrar Sesión */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>

        <Image source={require("../assets/logo.jpeg")} style={styles.logo} />
        <Text style={styles.counterText}>{counter}</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button color="#000" title="Cobrar" onPress={handleDecrement} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button color="#000" title="Reiniciar" onPress={handleReset} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button color="#ff8000" title="Nuevo" onPress={() => navigation.navigate("Formulario")} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button color="#008080" title="Escanear QR" onPress={() => navigation.navigate("Qr")} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
