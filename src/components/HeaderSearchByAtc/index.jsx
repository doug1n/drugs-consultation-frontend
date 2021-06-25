import React from 'react';
import styled from 'styled-components/native';

import ButtonComponent from '../Button';

const Container = styled.View``;

const Button = styled(ButtonComponent)`
  margin-top: 8px;
`;

export default function HeaderSearchByAtc({ active, onActive, onDisable }) {
  return (
    <Container>
      {!active && <Button title="Buscar pelo ATC" onPress={onActive} />}
      {active && (
        <>
          <Button title="Buscar pelo nome do medicamento" onPress={onDisable} />
          <Button title="Selecione o ATC" active italic />
        </>
      )}
    </Container>
  );
}
