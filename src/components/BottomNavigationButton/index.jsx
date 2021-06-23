import React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

import BottomNavigationButtonIcon from '../BottomNavigationButtonIcon';
import BottomNavigationButtonLabel from '../BottomNavigationButtonLabel';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function BottomNavigationButton({ onPress, label, icon }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <BottomNavigationButtonIcon icon={icon} />
        <BottomNavigationButtonLabel label={label} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
