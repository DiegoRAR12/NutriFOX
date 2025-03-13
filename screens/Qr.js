import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Platform } from "react-native";
import { Camera, CameraType } from "expo-camera";
import useQrViewModel from "../viewmodels/QrViewModel";
import styles from "../styles/QrStyles"; // Importamos los estilos

const Qr = () => {
  const { hasPermission, type, cameraRef, toggleCameraType, takePicture } = useQrViewModel();

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ImageBackground source={require("../assets/degradado.jpg")} style={styles.backgroundImage}>
      <View style={styles.container}>
        {Platform.OS !== "web" && Camera ? (
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                <Text style={styles.text}> Voltear </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                <Text style={styles.text}> Tomar Foto </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <Text style={styles.text}>La cámara no está disponible en la web</Text>
        )}
      </View>
    </ImageBackground>
  );
};

export default Qr;
