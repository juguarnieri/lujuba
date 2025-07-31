import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardDetails({ Title, Image: CardImage, description }) {
  return (
    <View style={styles.card}>
      <Image source={CardImage} style={styles.image} />
      <Text style={styles.title}>{Title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'pink',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});