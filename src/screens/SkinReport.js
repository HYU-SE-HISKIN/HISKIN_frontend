import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import axios from "axios";
import { EmptyBox, Graph, Loading, OptionButton } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 20px;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;
const DateText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
  margin-bottom: 16px;
`;
const ScoreText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-end;
  margin-bottom: 16px;
`;
const WhiteContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 283px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;

const SkinReport = () => {
  const [loading, setLoading] = useState(true);
  const [selectedDuration, setSelectedDuration] = useState("week");
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
          labels: ["09/01", "09/15", "10/01", "10/15", "11/01", "11/15"],
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
          labels: ["06월", "07월", "08월", "09월", "10월", "11월"],
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

  const renderGraph = () => {
    switch (selectedDuration) {
      case "week":
        return (
          <View>
            <WhiteContainer>
              <Graph
                text="지난 일주일 간 김한주님의 피부 점수"
                data={weekData}
              />
            </WhiteContainer>
            <EmptyBox height={22} />
            <TitleText>기록</TitleText>
            <EmptyBox height={16} />
            {weekData.labels.map((label, index) => (
              <HorizonContainer>
                <DateText key={index}>
                  {label}요일 . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </DateText>
                <ScoreText>{weekData.datasets[0].data[index]}</ScoreText>
              </HorizonContainer>
            ))}
          </View>
        );
      case "threemonth":
        return (
          <View>
            <WhiteContainer>
              <Graph
                text="지난 3개월 간 김한주님의 피부 점수"
                data={threemonthData}
              />
            </WhiteContainer>
            <EmptyBox height={22} />
            <TitleText>기록</TitleText>
            <EmptyBox height={16} />
            {threemonthData.labels.map((label, index) => (
              <HorizonContainer>
                <DateText key={index}>
                  {label} . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </DateText>
                <ScoreText>{threemonthData.datasets[0].data[index]}</ScoreText>
              </HorizonContainer>
            ))}
          </View>
        );
      case "sixmonth":
        return (
          <View>
            <WhiteContainer>
              <Graph
                text="지난 6개월 간 김한주님의 피부 점수"
                data={sixmonthData}
              />
            </WhiteContainer>
            <EmptyBox height={22} />
            <TitleText>기록</TitleText>
            <EmptyBox height={16} />
            {sixmonthData.labels.map((label, index) => (
              <HorizonContainer>
                <DateText key={index}>
                  {label} . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </DateText>
                <ScoreText>{sixmonthData.datasets[0].data[index]}</ScoreText>
              </HorizonContainer>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <EmptyBox height={24} />
      <TitleText>기간</TitleText>
      <EmptyBox height={8} />
      <HorizonContainer>
        <OptionButton
          title="일주일"
          onPress={() => setSelectedDuration("week")}
        />
        <OptionButton
          title="3개월"
          onPress={() => setSelectedDuration("threemonth")}
        />
        <OptionButton
          title="6개월"
          onPress={() => setSelectedDuration("sixmonth")}
        />
      </HorizonContainer>
      <EmptyBox height={16} />
      {renderGraph()}
    </Container>
  );
};

export default SkinReport;
