import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #96a6cb;
`;

export default function Home() {
  return (
    <Container>
      <MaterialCommunityIcons name="pill" size={72} color="#96A6CB" />
      <Text>Digite para pesquisar um medicamento</Text>
    </Container>
  );
}
