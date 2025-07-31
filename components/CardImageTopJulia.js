import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CardImageTopJulia({ title, image, description, price }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.cardDesc}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    marginBottom: 16,
    alignSelf: 'center', 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    margin: 15,
    marginBottom: 6,
  },
  text: {
    color: "pink",
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: "black",
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#333",
    marginTop: 8,
  },
});
