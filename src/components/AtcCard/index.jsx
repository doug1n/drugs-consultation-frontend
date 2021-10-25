import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
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

const AtcNameContainer = styled.View``;

const AtcNameTitle = styled.Text`
  color: #00133d;
  font-size: 16px;
`;

export default function AtcCard({ title, onPress }) {
  return (
    <Container onPress={onPress}>
      <IconAndNameContainer>
        <PillIcon name="folder-open" size={24} color="#95a0b8" />
        <AtcNameContainer>
          <AtcNameTitle>{title}</AtcNameTitle>
        </AtcNameContainer>
      </IconAndNameContainer>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#95a0b8" />
    </Container>
  );
}
