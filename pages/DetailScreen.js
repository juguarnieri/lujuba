import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function LuizaDetail() {
  return (
    <View style={styles.container}>
      <Card
    Title="Luiza Schettini"
    Image={require("../assets/dash6.png")}
    description="Olá meu nome é Júlia Guarnieri, sou aluna do Senai e do Sesi Valinhos, atualmente cursando o ensino médio e o curso de desenvolvimento de sistema, tenho 17 anos, moro em valinhos, e minha matéria preferida é matemática."
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