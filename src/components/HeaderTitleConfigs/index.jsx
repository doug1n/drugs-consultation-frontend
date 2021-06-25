import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
`;

export default function HeaderTitleConfigs() {
  return (
    <Container>
      <Title>Medicamentos</Title>
      <Ionicons name="settings" size={24} color="white" />
    </Container>
  );
}
