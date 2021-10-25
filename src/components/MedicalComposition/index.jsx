import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
  background: #fff;
  height: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionProduct = styled.Text`
  font-weight: 500;
  font-size: 20px;
`;

const ContainerIcon = styled.View`
  border-radius: 50px;
  background: #c2c2c2;
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf2ff;
`;

export default function MedicalComposition({ name }) {
  return (
    <Container>
      <ContainerIcon>
        <MaterialCommunityIcons name="pill" size={70} color="#265ad2" />
      </ContainerIcon>
      <DescriptionProduct>{name}</DescriptionProduct>
    </Container>
  );
}
