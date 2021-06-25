import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  border-radius: 5px;
  background-color: ${(props) => (props.active ? '#00133d' : '#fff')};
  height: 27px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  color: ${(props) => (props.active ? '#fff' : '#265ad2')};
  font-size: 13px;
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
`;

export default function Button({ style, title, active, italic, onPress }) {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container active={active} style={style}>
        <Label active={active} italic={italic}>
          {title}
        </Label>
      </Container>
    </TouchableWithoutFeedback>
  );
}
