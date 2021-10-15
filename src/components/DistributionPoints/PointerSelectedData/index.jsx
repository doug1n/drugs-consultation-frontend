import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  bottom: 20px;

  border-radius: 5px;
  background: #fff;
  display: flex;

  height: 200px;
  width: 90%;
  left: 5%;
`;

const TextCompany = styled.Text`
  font-size: 18px;
  padding: 10px 5px;
`;

const Text = styled.Text`
  color: #c2c2c2;
  font-size: 14px;
  padding: 5px;
`;

export default function PointerSelectedData() {
  return (
    <Container>
      <TextCompany>CEMAC - Juarez Barbosa</TextCompany>
      <Text>R 19D 162</Text>
      <Text>(62) 98133-9200</Text>
      <Text>2.3 Km de distância</Text>
    </Container>
  );
}
