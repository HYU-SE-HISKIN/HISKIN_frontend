import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { EmptyBox, Graph, Loading } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 20px;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;
const WhiteContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 283px;
`;

const SkinReport = () => {
  const [weekData, setWeekData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.125.247.87:8080/api/challenge-scores/week`
        );
        setWeekData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const graphWeekData = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    datasets: [{ data: weekData }],
  };

  if (loading) {
    return <Loading />;
  }
  console.log(weekData);

  //parameter :  data, unit, color, getTargetTime
  return (
    <Container>
      <EmptyBox height={24} />
      <TitleText>기간</TitleText>
      <WhiteContainer>
        <Graph
          text="지난 일주일 간
김한주님의 피부 점수"
          data={graphWeekData}
        />
      </WhiteContainer>
    </Container>
  );
};

export default SkinReport;
