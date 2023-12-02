import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Button } from "../components";
import { View, Alert, Platform } from "react-native";

const TakePhoto = () => {
  const [photos, setPhotos] = useState([]);
  const camera = useRef();
  const [cameraReady, setCameraReady] = useState(false);

  const getPermissions = async () => {
    const { granted } = await Camera.requestPermissionsAsync();
    setOk(granted);
  };
  useEffect(() => {
    getPermissions();
  }, []);

  const onCameraReady = () => setCameraReady(true);
  const takePicture = async () => {
    if (camera.current && cameraReady) {
      const photo = await camera.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
    }
  };

  const onCameraSwitch = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
    }
  };

  const getPhotos = async () => {
    const { assets: photos } = await MediaLibrary.getAssetsAsync();
    setPhotos(photos);
    setChosenPhoto(photos[0]?.uri);
  };
  const pickImage = async () => {
    const { status, canAskAgain } = await MediaLibrary.getPermissionsAsync();

    if (status === "undetermined" && canAskAgain) {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "undetermined") {
        setOk(true);
        getPhotos();
      }
    } else if (status !== "undetermined") {
      setOk(true);
      getPhotos();
    }
  };

  return (
    <View>
      <Camera
        type={cameraType}
        style={{ flex: 1 }}
        zoom={zoom}
        flashMode={flashMode}
        ref={camera}
        onCameraReady={onCameraReady}
      />

      <Button title="Toggle Camera Type" onPress={onCameraSwitch}></Button>
      <Button title="Take Picture" onPress={takePicture}></Button>
      <Button title="Pick Image" onPress={pickImage}></Button>
    </View>
  );
};

export default TakePhoto;
