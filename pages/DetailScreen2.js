import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function LuizaDetail() {
  return (
    <View style={styles.container}>
      <Card
    Title="Sobre Nossos Produtos"
    Image={require("../assets/logo.png")}
    description="Na nossa loja, cada produto foi escolhido com um objetivo claro: cuidar do seu dachshund com responsabilidade, carinho e atenção às particularidades da raça. Sabemos que cães salsichas não são como qualquer outro cão — eles têm um corpo único, uma personalidade marcante e necessidades muito específicas. Por isso, nossa curadoria vai muito além da aparência ou da moda pet. Aqui, cada item tem um propósito real na vida do seu companheiro de quatro patas."
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