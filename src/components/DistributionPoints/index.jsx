import React, { useState } from 'react';
import styled from 'styled-components/native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import pilula from '../../../assets/pilula.png';
import pilulaBigger from '../../../assets/pilula-maior.png';
import PointerSelectedData from './PointerSelectedData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    // fontFamily: 'Nunito_700Bold',
  },
});

const Container = styled.View`
  z-index: 5;
  position: absolute;
  flex: 1;
`;

export default function DistributionPoints({ locations }) {
  const [pointerSelected, setPointerSelected] = useState(null);

  const handleSelectPointerDistribution = (compamy, i) => {
    setPointerSelected(i);
  };

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -16.7722688,
          longitude: -49.3351947,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {locations.map((location, i) => (
          <Marker
            key={i}
            icon={pointerSelected === i ? pilulaBigger : pilula}
            calloutAnchor={{
              x: 2.7,
              y: 0.9,
            }}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            onPress={() => {
              handleSelectPointerDistribution(location, i);
            }}
          >
            <Callout tooltip />
          </Marker>
        ))}
      </MapView>

      {pointerSelected && <PointerSelectedData />}
    </Container>
  );
}
