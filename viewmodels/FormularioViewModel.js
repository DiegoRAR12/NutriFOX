import { useState } from "react";
import { Alert } from "react-native";
import { db } from "../database/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";

const useFormularioViewModel = (navigation) => {
  const [formData, setFormData] = useState({
    nombre: "",
    noControl: "",
    carrera: "",
    semestre: "",
    grupo: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegistro = async () => {
    const { nombre, noControl, carrera, semestre, grupo } = formData;

    if (!nombre || !noControl || !carrera || !semestre || !grupo) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    try {
      const userData = { nombre, noControl, carrera, semestre, grupo };
      const usersCollectionRef = collection(db, "alumnos");
      const docRef = await addDoc(usersCollectionRef, userData);
      
      console.log("Documento guardado con ID: ", docRef.id);
      Alert.alert("Registro Exitoso", "Usuario registrado correctamente.", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);

      setFormData({ nombre: "", noControl: "", carrera: "", semestre: "", grupo: "" });
      setError(null);
    } catch (error) {
      console.error("Error al registrar:", error);
      Alert.alert("Error", `No se pudo registrar el usuario: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    error,
    loading,
    handleInputChange,
    handleRegistro,
  };
};

export default useFormularioViewModel;
