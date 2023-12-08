import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import axios from "axios";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { SKTNUGU } from "../../assets/images";
import { WhiteContainer } from "../components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
`;

const AnimatedContainer = styled.View`
  position: relative;
`;

const OutlineCircle = styled.View`
  position: absolute;
  align-self: center;
  width: 74px;
  height: 74px;
  border-radius: 37px;
  border-width: 5px;
  border-color: #fff;
  margin-top: 30px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.25;
  shadow-radius: 3px;
  elevation: 5;
`;

const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
  margin-top: 12px;
`;

const TimeText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.grey_5};
  margin-top: 21px;
`;

const ChatModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  height: 80%;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
`;

const ChatInputContainer = styled.View`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
`;

const ChatInput = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
`;

const SendButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 70px;
  right: 16px;
`;

const InteractiveCare = ({ navigation }) => {
  const [remainingTime, setRemainingTime] = useState(750);
  const [isChatModalVisible, setChatModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const toggleChatModal = () => {
    setChatModalVisible(!isChatModalVisible);
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleSend = async () => {
    const data = { question: inputText };
  
    try {
      const response = await axios({
        method: "post",
        url: `http://13.125.247.87:8080/api/test`,
        data: data,
        withCredentials: true,
      });
  
      // 채팅 히스토리 업데이트
      setChatHistory([
        ...chatHistory,
        { type: "user", text: inputText },
        { type: "bot", text: response.data.content },
      ]);
  
      // 입력 텍스트 비우기
      setInputText("");
    } catch (error) {
      console.error("Axios 에러:", error.message); // 에러 메시지 출력
      console.error("Axios 응답:", error.response); // 에러 응답 출력
  
      // 네트워크 에러일 경우
      if (error.isAxiosError && !error.response) {
        console.log("네트워크 에러:", "서버에 도달하지 못했습니다.");
      }
    }
  };

  return (
    <Container>
      <WhiteContainer width={242} height={68} borderRadius={16} padding={18}>
        <TitleText>
          스피커의 음성 안내에 따라 {"\n"}디바이스를 조작해주세요.
        </TitleText>
      </WhiteContainer>
      <AnimatedContainer>
        <OutlineCircle />
        <LottieView
          style={{
            width: 150,
            height: 136,
          }}
          source={require("../../assets/lottie/AnimationCircle.json")}
          autoPlay
          loop={true}
        />
      </AnimatedContainer>
      <SKTNUGU />
      <TimeText>남은 시간 {formatTime(remainingTime)}</TimeText>

      <TouchableOpacity
        onPress={toggleChatModal}
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#98FB98',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24, color: 'white' }}>+</Text>
      </TouchableOpacity>

      <Modal visible={isChatModalVisible} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <ChatModalContent>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>
              {chatHistory.map((message, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: message.type === 'user' ? '#98FB98' : '#87CEFA',
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 8,
                    alignSelf: message.type === 'user' ? 'flex-start' : 'flex-end',
                    maxWidth: '60%', // 최대 너비 지정 (60%)
                  }}
                >
                  <Text style={{ fontSize: 16, color: 'white' }}>{message.text}</Text>
                </View>
              ))}
            </View>
            <Text>관리 받는 동시에 소통해요</Text>
            <ChatInputContainer>
              <ChatInput
                placeholder="채팅을 입력하세요"
                value={inputText}
                onChangeText={handleInputChange}
              />
            </ChatInputContainer>
            <SendButton onPress={handleSend}>
              <Text style={{ color: 'blue', fontSize: 18 }}>전송</Text>
            </SendButton>
            <CloseButton onPress={toggleChatModal}>
              <Text style={{ color: 'blue', fontSize: 18 }}>닫기</Text>
            </CloseButton>
          </ChatModalContent>
        </View>
      </Modal>
    </Container>
  );
};

export default InteractiveCare;
