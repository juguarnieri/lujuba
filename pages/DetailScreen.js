import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a tela de Detalhes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  text: {
    fontSize: 18
  }
});import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function JuliaDetail() {
  return (
    <View style={styles.container}>
      <Card
    title="Júlia Guarnieri"
    image={require("../assets/fotoJulia.png")}
    description="Olá meu nome é Júlia Guarnieri, sou aluna do Senai e do Sesi Valinhos, atualmente cursando o ensino médio e o curso de desenvolvimento de sistema, tenho 17 anos, moro em valinhos, e minha matéria preferida é matemática"
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