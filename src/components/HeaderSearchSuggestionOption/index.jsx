import React from 'react';
import styled from 'styled-components/native';
import Dash from 'react-native-dash';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const OptionContainer = styled.TouchableOpacity``;

const OptionContentContainer = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

const OptionContentDescriptionContainer = styled.View`
  flex: 1;
`;

const OptionContentDescription = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const PillIcon = styled(MaterialCommunityIcons)`
  margin-right: 10px;
`;

export default function HeaderSearchSuggestionOption({ description, onPress }) {
  return (
    <OptionContainer onPress={onPress}>
      <Dash dashColor="#fff" dashStyle={{ height: 0.7 }} />
      <OptionContentContainer>
        <PillIcon name="pill" size={17.5} color="#fff" />
        <OptionContentDescriptionContainer>
          <OptionContentDescription>{description}</OptionContentDescription>
        </OptionContentDescriptionContainer>
      </OptionContentContainer>
    </OptionContainer>
  );
}
