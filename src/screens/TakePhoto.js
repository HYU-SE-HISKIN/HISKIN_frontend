import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Text, Image } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: #000;
  padding: 8px;
`;

const Controls = styled.View`
  flex: 0.5;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CameraContainer = styled.View`
  flex: 5;
  border-radius: 20px;
`;

const HorizonContainer = styled.View`
  flex-direction: row;
`;

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert("Picture saved! 🎉");
        setImage(null);
        console.log("saved successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      {!image ? (
        <CameraContainer>
          <Camera
            style={{ flex: 1 }}
            type={type}
            ref={cameraRef}
            flashMode={flash}
          />
          <HorizonContainer>
            <Button
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <MaterialIcons name="cached" size={24} color="white" />
            </Button>
            <Button
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
            >
              <MaterialIcons
                name={
                  flash === Camera.Constants.FlashMode.off
                    ? "flash-on"
                    : "flash-off"
                }
                size={24}
                color="white"
              />
            </Button>
          </HorizonContainer>
        </CameraContainer>
      ) : (
        <Image source={{ uri: image }} style={{ flex: 1, borderRadius: 20 }} />
      )}

      <Controls>
        {image ? (
          <HorizonContainer>
            <Button onPress={() => setImage(null)}>
              <MaterialIcons name="cached" size={24} color="white" />
            </Button>
            <Button onPress={savePicture}>
              <MaterialIcons name="check" size={24} color="white" />
            </Button>
          </HorizonContainer>
        ) : (
          <Button onPress={takePicture}>
            <MaterialIcons name="camera" size={24} color="white" />
          </Button>
        )}
      </Controls>
    </Container>
  );
}
