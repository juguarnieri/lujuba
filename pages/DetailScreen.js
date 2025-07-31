import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function LuizaDetail() {
  return (
    <View style={styles.container}>
      <Card
    Title="Babi Cristina"
    Image={require("../assets/babi.png")}
    description="Olá aumigos, meu nome é Babi Cristina, sou um salsicha, eu tenho um aninho e amo muito brincar, dormir e comer, meus dias são muito legais com a minha família!! Au-Au🐶."
      />
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})