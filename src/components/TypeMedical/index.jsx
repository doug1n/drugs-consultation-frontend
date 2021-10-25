import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { ScrollView, Pressable } from 'react-native';

import EachItemType from './EachItemType';

const Container = styled.View`
  display: flex;

  margin: 10px 0;
  height: 110px;
  background: #fff;
`;

const Text = styled.Text`
  padding-top: 5px;
  padding-left: 5px;
`;

export default function TypeMedical({ selected }) {
  const types = [
    {
      icon: <FontAwesome5 name="pills" size={25} color="#fff" />,
      description: 'Comprimido',
    },
    {
      icon: <MaterialCommunityIcons name="pill" size={24} color="#fff" />,
      description: 'Capsula',
    },
    {
      icon: <Entypo name="drop" size={24} color="#fff" />,
      description: 'Gota',
    },
    {
      icon: (
        <FontAwesome5 name="prescription-bottle-alt" size={24} color="#fff" />
      ),
      description: 'Creme',
    },
    {
      icon: <FontAwesome5 name="glass-whiskey" size={24} color="#fff" />,
      description: 'Solúvel',
    },
  ];

  return (
    <Container>
      <Text>Tipo do medicamento</Text>

      <ScrollView horizontal>
        {types.map((type, i) => (
          <Pressable key={type.description}>
            <EachItemType
              selected={i === selected}
              description={type.description}
              icon={type.icon}
            />
          </Pressable>
        ))}
      </ScrollView>
    </Container>
  );
}
