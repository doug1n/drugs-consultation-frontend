import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import DrugCard from '../../components/DrugCard';

const Container = styled.View`
  padding-right: 24.5px;
  padding-left: 24.5px;
`;

export default function Favorites() {
  return (
    <Container>
      <ScrollView>
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
        <DrugCard title="Novalgina" subtitle="Dipirona" />
      </ScrollView>
    </Container>
  );
}
