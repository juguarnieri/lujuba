import React from 'react';
import { View, Image, StyleSheet} from "react-native";


export default function CardImageLuiza ({ image }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}></Image>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: 165,
        marginRight: 10,
        backgroundColor: '#ec6149',
        borderRadius: 10,
        overflow: 'hidden',
        paddingBottom: 8,
        borderWidth: 1,
    },image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
      },
      textContainer: {
        color: 'green',
        fontSize: 14,
        margin: 15,
        marginBottom: 6,
      },
      text: {
        color: "green",
        fontWeight: 'bold',
      },
  });