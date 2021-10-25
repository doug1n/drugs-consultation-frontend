import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderSearchSuggestionComponent from '../HeaderSearchSuggestion';
import { getDrugs } from '../../services/drugsConsultationApi';

const Container = styled.View`
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  z-index: 2;
`;

const InputContainer = styled.View`
  height: 48px;
  flex: 1;
  background-color: #265ad2;
  border-radius: 50px;
  justify-content: center;
`;

const Input = styled.TextInput`
  font-size: 14px;
  padding-left: 20px;
  color: #fff;
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

const HeaderSearchSuggestion = styled(HeaderSearchSuggestionComponent)`
  z-index: 1;
`;

export default function HeaderSearchByDrugName({ style, show }) {
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (text) => {
    if (text) {
      setOpenSuggestion(true);
    } else {
      setOpenSuggestion(false);
    }

    setSearchText(text);
  };

  useEffect(() => {
    setLoadingSuggestion(true);
    getDrugs(searchText)
      .then((response) => {
        setSuggestions(
          response
            .map((drug) => ({ id: drug.id, description: drug.description }))
            .slice(0, 30)
        );
      })
      .finally(() => {
        setLoadingSuggestion(false);
      });
  }, [searchText]);

  return (
    show && (
      <Container style={style}>
        <HeaderSearchSuggestion
          open={openSuggestion}
          loading={loadingSuggestion}
          suggestions={suggestions}
        />
        <SearchContainer>
          <InputContainer>
            <Input
              placeholder="Digite o nome do medicamento"
              placeholderTextColor="#95a0b8"
              onChangeText={handleChangeSearchText}
            />
          </InputContainer>
          <SearchButton>
            <MaterialIcons name="search" size={24} color="#265ad2" />
          </SearchButton>
        </SearchContainer>
      </Container>
    )
  );
}
