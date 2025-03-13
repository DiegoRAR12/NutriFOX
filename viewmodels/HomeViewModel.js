import { useState } from "react";
import { Alert } from "react-native";
import { auth } from "../database/firebaseConfig";
import { signOut } from "firebase/auth";

const useHomeViewModel = (navigation) => {
  const [counter, setCounter] = useState(70);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const handleReset = () => {
    setCounter(70);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login"); // Redirigir a la pantalla de Login
    } catch (error) {
      Alert.alert("Error", "No se pudo cerrar sesión.");
      console.error("Error al cerrar sesión:", error);
    }
  };

  return {
    counter,
    handleDecrement,
    handleReset,
    handleLogout,
  };
};

export default useHomeViewModel;
