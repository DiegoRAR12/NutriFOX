import { useState } from 'react';
import { Alert } from 'react-native';
import { auth } from '../database/firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

const useLoginViewModel = () => {
  // Estados para email y contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para iniciar sesión
  const handleLogin = async (navigation) => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado correctamente');
      navigation.replace('Home'); // Navega a Home después del login
    } catch (error) {
      console.error('Error en el login:', error);
      Alert.alert('Error', 'Correo o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
};

export default useLoginViewModel;