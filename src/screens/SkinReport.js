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
`;

const SkinReport = () => {
  const [loading, setLoading] = useState(true);
  const [weekData, setWeekData] = useState({});
  const [threemonthData, setThreeMonthData] = useState({});
  const [sixmonthData, setSixMonthData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.125.247.87:8080/api/challenge-scores/week`
        );
        setWeekData({
          labels: ["월", "화", "수", "목", "금", "토", "일"],
          datasets: [{ data: response.data }],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      try {
        const response = await axios.get(
          `http://13.125.247.87:8080/api/my-page/three-months`
        );
        setThreeMonthData({
          labels: ["8/15", "9/1", "9/15", "10/1", "10/15", "11/1", "11/15"],
          datasets: [{ data: response.data }],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      try {
        const response = await axios.get(
          `http://13.125.247.87:8080/api/my-page/six-months`
        );
        setSixMonthData({
          labels: ["5월", "6월", "7월", "8월", "9월", "10월", "11월"],
          datasets: [{ data: response.data }],
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(weekData);

  return (
    <Container>
      <EmptyBox height={24} />
      <TitleText>기간</TitleText>
      <WhiteContainer>
        <Graph
          text="지난 일주일 간
김한주님의 피부 점수"
          data={weekData}
        />
        <Graph
          text="지난 일주일 간
김한주님의 피부 점수"
          data={threemonthData}
        />
        <Graph
          text="지난 일주일 간
김한주님의 피부 점수"
          data={sixmonthData}
        />
      </WhiteContainer>
    </Container>
  );
};

export default SkinReport;
