import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  ScrollView, 
  ActivityIndicator, 
  Platform, 
  ImageBackground 
} from "react-native";
import useFormularioViewModel from "../viewmodels/FormularioViewModel";
import styles from "../styles/FormularioStyles";

const Formulario = ({ navigation }) => {
  const { formData, error, loading, handleInputChange, handleRegistro } = useFormularioViewModel(navigation);

  return (
    <ImageBackground source={require("../assets/degradado.jpg")} style={styles.backgroundImage}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Registro de Usuario</Text>
          {error && <Text style={styles.errorText}>{error}</Text>}

          <View style={styles.formSquare}>
            <View style={styles.form}>
              <TextInput
                placeholder="Nombre"
                value={formData.nombre}
                onChangeText={(value) => handleInputChange("nombre", value)}
                style={styles.input}
              />
              <TextInput
                placeholder="Número de Control"
                value={formData.noControl}
                onChangeText={(value) => handleInputChange("noControl", value)}
                keyboardType="numeric"
                style={styles.input}
              />
              <TextInput
                placeholder="Carrera"
                value={formData.carrera}
                onChangeText={(value) => handleInputChange("carrera", value)}
                style={styles.input}
              />
              <TextInput
                placeholder="Semestre"
                value={formData.semestre}
                onChangeText={(value) => handleInputChange("semestre", value)}
                keyboardType="numeric"
                style={styles.input}
              />
              <TextInput
                placeholder="Grupo"
                value={formData.grupo}
                onChangeText={(value) => handleInputChange("grupo", value)}
                style={styles.input}
              />

              <TouchableOpacity style={styles.button} onPress={handleRegistro} disabled={loading}>
                {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Enviar</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Formulario;
