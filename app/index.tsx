import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const images = [
  {
    main: 'https://picsum.photos/id/1011/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=widodo',
  },
  {
    main: 'https://picsum.photos/id/1025/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=amin',
  },
  {
    main: 'https://picsum.photos/id/1027/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=sby',
  },
  {
    main: 'https://picsum.photos/id/1035/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=kalla',
  },
  {
    main: 'https://picsum.photos/id/1041/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=mega',
  },
  {
    main: 'https://picsum.photos/id/1052/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=haz',
  },
  {
    main: 'https://picsum.photos/id/1062/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=habibie',
  },
  {
    main: 'https://picsum.photos/id/1074/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=suharto',
  },
  {
    main: 'https://picsum.photos/id/1084/300/400',
    alt: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=sukarno',
  },
];

export default function PresidenGrid() {
  const [states, setStates] = useState(images.map(() => ({ isAlt: false, scale: 1 })));

  const handlePress = (index: number) => {
    setStates((prev) =>
      prev.map((state, i) => {
        if (i !== index) return state;
        const newScale = state.scale * 1.2 > 2 ? 1 : state.scale * 1.2;
        return {
          isAlt: !state.isAlt,
          scale: newScale,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>M. Dzulfikar Hidayat</Text>
      <Text style={styles.nim}>105841107822</Text>
      <View style={styles.grid}>
        {images.map((img, idx) => (
          <TouchableOpacity key={idx} style={styles.cell} activeOpacity={0.9} onPress={() => handlePress(idx)}>
            <Image source={{ uri: states[idx].isAlt ? img.alt : img.main }} style={[styles.image, { transform: [{ scale: states[idx].scale }] }]} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#f0f4ff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#001F54',
  },
  nim: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  grid: {
    width: 340,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cell: {
    width: 105,
    height: 125,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 90,
    height: 110,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0077cc',
    backgroundColor: '#eaeaea',
  },
});
