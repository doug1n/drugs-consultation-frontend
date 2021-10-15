import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

const Container = styled.View`
  background-color: #265ad2;
  z-index: 6;
`;

const Text = styled.Text`
  color: #fff;
  padding: 0 5px;
  font-size: 15px;
`;

const Pressable = styled.Pressable`
  border-bottom-color: #fff;
  padding: 8px 0 0;
  border-bottom-width: ${(props) => (props.selected ? 3 : 1)}px;
`;

export default function TopBarProduct({ selectedTab, onChangeTab }) {
  const items = [
    <Feather
      name="arrow-left"
      size={32}
      color="#fff"
      style={{ paddingLeft: 5, paddingBottom: 5 }}
    />,
    <Text>Informações</Text>,
    <Text>Documento</Text>,
    <Text>Pontos de distribuição</Text>,
  ];

  return (
    <Container>
      <ScrollView horizontal>
        {items.map((item, i) => (
          <Pressable
            key={i}
            selected={selectedTab === i}
            onTouchStart={() => {
              onChangeTab(i);
            }}
          >
            {item}
          </Pressable>
        ))}
      </ScrollView>
    </Container>
  );
}
