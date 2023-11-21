import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { Text, Image } from "react-native";
import { Button } from "../components";

const Container = styled.View`
  flex: 1;
`;

const Cosmetics = ({ navigation }) => {
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.125.247.87:8080/api/cosmetics`
        );
        setProductInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  console.log(productInfo);
  return (
    <Container>
      <Image
        source={{
          uri: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0018/A00000018374717ko.jpg?l=ko",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button title={productInfo.productName} onPress={() => {}} />
    </Container>
  );
};

export default Cosmetics;
