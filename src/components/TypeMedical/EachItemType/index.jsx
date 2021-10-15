import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  align-items: center;

  margin: 5px;
  min-width: 80px;
  /* overflow-x: scroll; */
`;

const ContentIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: ${(props) => (props.selected ? '#265ad2' : '#e6e6e6')};
  border-radius: 4px;
`;

const Text = styled.Text`
  color: ${(props) => (props.selected ? '#000' : '#e6e6e6')};
`;

export default function EachItemType(props) {
  const { description, selected, onTouchStart, icon } = props;

  return (
    <Container onTouchStart={onTouchStart}>
      <ContentIcon selected={selected}>{icon}</ContentIcon>
      <Text selected={selected}>{description}</Text>
    </Container>
  );
}
