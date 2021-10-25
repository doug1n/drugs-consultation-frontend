import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AppContext } from '../../AppContext';

import screens from '../../screens';
import HeaderSearchSuggestionOption from '../HeaderSearchSuggestionOption';

const Container = styled.ScrollView`
  max-height: 420px;
  background-color: #265ad2;
  border-radius: 23.7px;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 62px 10px 10px;
`;

const Spacer = styled.View`
  margin-bottom: 67px;
`;

const Info = styled.Text`
  color: #fff;
`;

export default function HeaderSearchSuggestion({
  styled,
  open,
  loading,
  suggestions,
}) {
  const { setCurrentPage, setCurrentDrugData } = useContext(AppContext);

  const handleSuggestionPress = (suggestion) => {
    setCurrentPage(screens.CHANGE_MEDICINE);
    setCurrentDrugData(suggestion);
  };

  return (
    open && (
      <Container styled={styled}>
        {loading && <Info>Carregando...</Info>}
        {!loading && suggestions.length === 0 && (
          <Info>Nenhum resultado encontrado.</Info>
        )}
        {!loading &&
          suggestions.map((suggestion) => (
            <HeaderSearchSuggestionOption
              key={suggestion.id}
              onPress={() => {
                handleSuggestionPress(suggestion);
              }}
              description={suggestion.description}
            />
          ))}
        <Spacer />
      </Container>
    )
  );
}
