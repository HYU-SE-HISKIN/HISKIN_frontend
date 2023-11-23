import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Device_Registration } from "../../assets/images";
import { EmptyBox, Loading } from "../components";

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;
const IvoryContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 358px;
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;

const DeviceRegistration = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading
          title="새로운 디바이스를 검색중입니다"
          subtitle="디바이스에 스마트폰을 가까이 해주세요"
        />
      ) : (
        <IvoryContainer>
          <Device_Registration />
          <EmptyBox height={23} />
          <SubTitle>디바이스를 발견했습니다</SubTitle>
        </IvoryContainer>
      )}
    </Container>
  );
};

export default DeviceRegistration;
