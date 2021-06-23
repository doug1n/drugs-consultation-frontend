import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
`;

const TextField = styled.View`
  height: 48px;
  flex: 1;
  background-color: #265ad2;
  border-radius: 50px;
  justify-content: center;
`;

const Input = styled.TextInput`
  font-size: 14px;
  padding-left: 20px;
`;

const SearchButton = styled.View`
  height: 48px;
  width: 48px;
  background-color: #fff;
  border-radius: 24px;
  position: absolute;
  right: -1px;
  justify-content: center;
  align-items: center;
`;

const SearchByAtcButton = styled.View`
  margin-top: 13px;
  border-radius: 5px;
  background-color: white;
  height: 27px;
  justify-content: center;
  align-items: center;
`;

const TextSearchByAtcButton = styled.Text`
  color: #265ad2;
  font-size: 13px;
`;

export default function HeaderSearch() {
  return (
    <Container>
      <SearchContainer>
        <TextField>
          <Input
            placeholder="Digite o nome do medicamento"
            placeholderTextColor="#95a0b8"
          />
        </TextField>
        <SearchButton>
          <MaterialIcons name="search" size={24} color="#265ad2" />
        </SearchButton>
      </SearchContainer>
      <SearchByAtcButton>
        <TextSearchByAtcButton>Buscar pelo ATC</TextSearchByAtcButton>
      </SearchByAtcButton>
    </Container>
  );
}
