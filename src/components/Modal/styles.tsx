import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  //background-color: #1F1B24;
`;

export const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`