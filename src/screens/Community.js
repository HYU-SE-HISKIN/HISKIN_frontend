import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { EmptyBox, PlusButton, CommunityBox } from "../components";
import { EditButton } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  padding-top: 64px;
  padding-bottom: 46px;
`;
const AppName = styled.Text`
  font-family: "Calistoga - Regular";
  font-size: 24px;
  color: ${({ theme }) => theme.black};
  margin-bottom: 7.74px;
  align-self: flex-start;
`;
const IvoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 16px;
  padding: 24px;
  width: 354px;
  height: 80px;
`;

const Community = ({ navigation }) => {
  return (
    <ScrollView>
      <Container>
        <AppName>HISKIN</AppName>
        <IvoryContainer>
          <PlusButton
            thirdtitle="어떤 생각을 하고 있나요?"
            onPress={() => navigation.navigate("DeviceRegistration")}
          />
          <EditButton />
        </IvoryContainer>
        <EmptyBox height={12} />
        <CommunityBox
          color="pink"
          title={"hi_skin0032"}
          subtitle={"12 minutes ago"}
          content="아름다운 걸 아름답다고, 사랑을 사랑이라고 있는 그대로 말할 수 있는 사람들이 좋다. 가만 보면 참 쉬운 일 같은데 또 이만큼 어려운 일이 없는가 보다."
          heartvalue=" 27"
        />
        <EmptyBox height={12} />
        <CommunityBox
          color="yellow"
          title={"hanyang2220"}
          subtitle={"17 minutes ago"}
          image={true}
          content="Save yourself :)"
          heartvalue=" 80"
        />
        <EmptyBox height={12} />
        <CommunityBox
          color="skyblue"
          title={"hihihihihi"}
          subtitle={"19 minutes ago"}
          content="To many people in the class"
          heartvalue=" 15"
        />
        <EmptyBox height={12} />
        <CommunityBox
          color="purple"
          title={"hi_skin0032"}
          subtitle={"30 minutes ago"}
          content="아름다운 걸 아름답다고, 사랑을 사랑이라고 있는 그대로 말할 수 있는 사람들이 좋다. 가만 보면 참 쉬운 일 같은데 또 이만큼 어려운 일이 없는가 보다."
          heartvalue=" 27"
        />
        <EmptyBox height={12} />
        <CommunityBox
          color="red"
          title={"hi_skin0032"}
          subtitle={"55 minutes ago"}
          content="아름다운 걸 아름답다고, 사랑을 사랑이라고 있는 그대로 말할 수 있는 사람들이 좋다. 가만 보면 참 쉬운 일 같은데 또 이만큼 어려운 일이 없는가 보다."
          heartvalue=" 27"
        />
      </Container>
    </ScrollView>
  );
};

export default Community;
