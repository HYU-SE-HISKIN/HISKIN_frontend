import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const TakePhoto = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    const getPermissionAsync = async () => {
      // Camera roll Permission
      if (Platform.OS === "ios") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      // Camera Permission
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getPermissionAsync();
  }, []);

  const handleCameraType = () => {
    setCameraType((prevType) =>
      prevType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      // Handle the taken picture as needed
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    // Handle the picked image as needed
  };

  return (
    <div>
      {hasPermission && (
        <Camera
          style={{ flex: 1, width: "100%" }}
          type={cameraType}
          ref={cameraRef}
        ></Camera>
      )}
      <button onClick={handleCameraType}>Toggle Camera Type</button>
      <button onClick={takePicture}>Take Picture</button>
      <button onClick={pickImage}>Pick Image</button>
    </div>
  );
};

export default TakePhoto;
