import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
  min-height: 72px;
  background-color: #e5ebf8;
  border-radius: 5px;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;

const IconAndNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PillIcon = styled(MaterialCommunityIcons)`
  margin-right: 5px;
`;

const DrugNameContainer = styled.View``;

const DrugNameTitle = styled.Text`
  color: #00133d;
  font-size: 16px;
`;

const DrugNameSubtitle = styled.Text`
  color: #95a0b8;
  font-size: 14px;
`;

export default function DrugCard({ title, subtitle }) {
  return (
    <Container>
      <IconAndNameContainer>
        <PillIcon name="pill" size={24} color="#95a0b8" />
        <DrugNameContainer>
          <DrugNameTitle>{title}</DrugNameTitle>
          <DrugNameSubtitle>{subtitle}</DrugNameSubtitle>
        </DrugNameContainer>
      </IconAndNameContainer>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#95a0b8" />
    </Container>
  );
}
