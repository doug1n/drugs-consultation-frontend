import React from 'react';
import styled from 'styled-components/native';
import MedicalComposition from '../MedicalComposition';

const Container = styled.View`
  display: flex;
  height: 100%;
`;

const ContentData = styled.View`
  display: flex;
  margin: 10px 0;

  background: #fff;
`;

const Title = styled.Text`
  color: #000;
  padding-top: 5px;
  padding-left: 5px;
`;

const Description = styled.Text`
  color: #265ad2;
  padding: 10px;
`;

export default function TabDocumentation() {
  return (
    <Container>
      <MedicalComposition />

      <ContentData>
        <Title>Documentos necessários para solicitar o medicamento</Title>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </Description>
      </ContentData>
      <ContentData>
        <Title>
          Documentos necessários para retirar o medicamento nos pontos de
          distribuição
        </Title>

        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going
        </Description>
      </ContentData>
    </Container>
  );
}
