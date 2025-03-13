import { useState, useEffect, useRef } from "react";
import { Alert, Platform } from "react-native";
import * as Camera from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CameraType = Camera?.CameraType || { back: "back", front: "front" };

const useQrViewModel = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");

      if (Platform.OS === "ios") {
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        if (mediaLibraryPermission.status !== "granted") {
          Alert.alert("Permiso Denegado", "Necesitas dar permiso para guardar fotos.");
        }
      }
    })();
  }, []);

  const toggleCameraType = () => {
    setType((prevType) =>
      prevType === CameraType.back ? CameraType.front : CameraType.back
    );
  };
   

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef.current.takePictureAsync();
        if (Platform.OS === "android") {
          await MediaLibrary.saveToLibraryAsync(photo.uri);
          Alert.alert("Foto Guardada", "La foto se ha guardado en la galería.");
        } else {
          const asset = await MediaLibrary.createAssetAsync(photo.uri);
          const album = await MediaLibrary.getAlbumAsync("Expo");
          if (album === null) {
            await MediaLibrary.createAlbumAsync("Expo", asset, false);
          } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          }
          Alert.alert("Foto Guardada", "La foto se ha guardado en el álbum Expo.");
        }
      } catch (error) {
        console.error("Error al tomar la foto:", error);
        Alert.alert("Error", "No se pudo tomar la foto.");
      }
    }
  };

  return {
    hasPermission,
    type,
    cameraRef,
    toggleCameraType,
    takePicture,
  };
};

export default useQrViewModel;
