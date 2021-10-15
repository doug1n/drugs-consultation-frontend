import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;

  margin: 10px 0;
  min-height: 110px;
  background: #fff;
`;

const Title = styled.Text`
  color: #000;
  padding-left: 10px;
  padding-top: 5px;
`;

const ContentItem = styled.View`
  border-color: #c2c2c2;
  border-top-width: ${(props) => (props.withBorderTop ? '1px' : '0px')};

  padding: 5px;
`;

const InputMedical = styled.Text`
  color: #265ad2;
  padding: 0 5px;
  font-size: 16px;
`;

export default function MedicalInputs({ inputsMedical }) {
  return (
    <Container>
      <Title>Princípio ativo</Title>

      {inputsMedical.map((input, i) => (
        <ContentItem withBorderTop={i !== 0} key={i}>
          <InputMedical>{input}</InputMedical>
        </ContentItem>
      ))}
    </Container>
  );
}
