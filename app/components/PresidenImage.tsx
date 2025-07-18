import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type Props = {
  main?: string;
  alt?: string;
};

export default function PresidenImage({ main, alt }: Props) {
  if (!main) return null;

  return (
    <View style={styles.imageWrapper}>
      <Image source={{ uri: main }} accessibilityLabel={alt || 'Foto Presiden'} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: 100,
    height: 140,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
