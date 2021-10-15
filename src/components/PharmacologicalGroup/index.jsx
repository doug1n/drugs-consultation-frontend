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
  border-top-width: ${(props) => (props.withBorderTop ? 1 : 0)}px;

  padding: 5px;
`;

const ItemGroup = styled.Text`
  color: #265ad2;
  padding: 0 5px;
  font-size: 16px;
`;

export default function PharmacologicalGroup({ group }) {
  return (
    <Container>
      <Title>Grupo Farmacológico</Title>

      {group.map((item, i) => (
        <ContentItem key={i} withBorderTop={i !== 0}>
          <ItemGroup>{item}</ItemGroup>
        </ContentItem>
      ))}
    </Container>
  );
}
