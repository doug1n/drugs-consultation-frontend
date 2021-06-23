import React from 'react';
import styled from 'styled-components/native';

import DrugCard from '../../components/DrugCard';

const Container = styled.ScrollView`
  padding-right: 24.5px;
  padding-left: 24.5px;
`;

export default function Favorites() {
  return (
    <Container>
      <DrugCard title="Novalgina" subtitle="Dipirona" />
      <DrugCard title="Novalgina" subtitle="Dipirona" />
      <DrugCard title="Novalgina" subtitle="Dipirona" />
      <DrugCard title="Novalgina" subtitle="Dipirona" />
      <DrugCard title="Novalgina" subtitle="Dipirona" />
    </Container>
  );
}
