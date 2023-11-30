import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import {
  PlusButton,
  ImageLinker,
  EmptyBox,
  CommunityBox,
  WhiteContainer,
  IvoryContainer,
} from "../components";
import {
  AppName_small,
  MyDevice,
  PlusButtonImage,
  NextButton,
  Cosmetic1,
  Cosmetic2,
  Cosmetic3,
} from "../../assets/images";

const TopBar = styled.View`
  background-color: ${({ theme }) => theme.ivory_0};
  height: 64px;
  width: 100%;
`;
const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  margin-bottom: 46px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
  gap: 9px;
`;
const TabName = styled.Text`
  font-family: "LG Smart - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-end;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 18px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const Home = ({ navigation }) => {
  const [isDevice, setIsDevice] = useState(false);

  return (
    <ScrollView>
      <TopBar />
      <Container>
        <HorizonContainer>
          <AppName_small />
          <View>
            <EmptyBox height={15} />
            <TabName> home</TabName>
          </View>
        </HorizonContainer>
        <EmptyBox height={8} />
        <TitleText>내 디바이스</TitleText>
        <EmptyBox height={10} />
        {isDevice ? (
          <ImageLinker
            svgComponent={<MyDevice />}
            onPress={() => navigation.navigate("Care")}
          />
        ) : (
          <EmptyBox height={0} />
        )}

        <EmptyBox height={9} />
        <IvoryContainer width={354} height={80} borderRadius={24} padding={24}>
          <PlusButton
            width={279}
            title="새로운 디바이스 등록"
            subtitle="다른 사용자별 기기 등록"
            onPress={() => {
              navigation.navigate("DeviceRegistration");
              setIsDevice(true);
            }}
          />
          <PlusButtonImage />
        </IvoryContainer>
        <EmptyBox height={28} />
        <TitleText>챌린지</TitleText>
        <EmptyBox height={7} />
        <WhiteContainer width={354} height={80} borderRadius={24} padding={24}>
          <PlusButton
            width={279}
            title="나의 피부 MBTI는?"
            subtitle="나만의 피부타입 진단"
            onPress={() => navigation.navigate("SkinTypeTest")}
            isWhite={true}
          />
          <NextButton />
        </WhiteContainer>
        <EmptyBox height={9} />
        <WhiteContainer width={354} height={80} borderRadius={24} padding={24}>
          <PlusButton
            width={279}
            title="오늘의 피부 점수를 기록해보세요"
            subtitle="챌린지"
            onPress={() => navigation.navigate("Challenge")}
            isWhite={true}
          />
          <NextButton />
        </WhiteContainer>
        <EmptyBox height={28} />
        <TitleText>제품 추천</TitleText>
        <EmptyBox height={7} />
        <HorizonContainer>
          <ImageLinker
            svgComponent={<Cosmetic1 />}
            onPress={() => navigation.navigate("Cosmetics")}
          />
          <ImageLinker
            svgComponent={<Cosmetic2 />}
            onPress={() => navigation.navigate("Cosmetics")}
          />
          <ImageLinker
            svgComponent={<Cosmetic3 />}
            onPress={() => navigation.navigate("Cosmetics")}
          />
        </HorizonContainer>
        <EmptyBox height={28} />
        <TitleText>오늘의 인기글</TitleText>
        <EmptyBox height={7} />
        <CommunityBox
          color="pink"
          title={"hi_skin0032"}
          subtitle={"12 minutes ago"}
          content={
            "아름다운 걸 아름답다고, 사랑을 사랑이라고\n 있는 그대로 말할 수 있는 사람들이 좋다.\n가만 보면 참 쉬운 일 같은데 또 이만큼 어려운 일이 없는가 보다."
          }
          heartvalue=" 99"
        />
        <EmptyBox height={50} />
      </Container>
    </ScrollView>
  );
};

export default Home;
