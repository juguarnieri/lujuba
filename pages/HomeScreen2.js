import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardImageLuiza from "../components/CardImageLuiza";

export default function HomeScreen2() {
    const navigation = useNavigation();
    return (
    <View style={{ padding: 20 }}>
  
        <View style={styles.sectionCard}>
          <View style={styles.header}>
            <Text style={styles.arrow}> ⇽ </Text>
            <Image source={require('../assets/duplinha.png')} style={styles.image} />
          </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/ae/5a/3b/ae5a3bd06c00684f13db25c23ae96ef2.jpg"
          />
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/70/bd/58/70bd58b654f08db6d6f739a1fa7d972f.jpg"
          />
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/43/b7/b1/43b7b15fa71e0ed4fa043d0f8326c5cd.jpg"
          />
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
        Curiosidades sobre os Salsichinhas
            {"\n\n"}
          </Text>
          <Text style={styles.text}>
          <p>
          Dachshunds têm uma estrutura corporal especial: corpo longo, pernas curtas e coluna sensível. Isso os torna propensos a problemas na coluna, como a Doença do Disco Intervertebral (DDIV), principalmente quando pulam de lugares altos ou usam acessórios inadequados.
          </p>

          <p>Por isso, nossos produtos são cuidadosamente escolhidos para proteger o que eles têm de mais valioso: sua saúde. Desde rampas e escadinhas que evitam pulos perigosos, até caminhas com suporte ortopédico e coleiras que não forçam o pescoço — tudo aqui é pensado para o bem-estar do seu salsichinha.
          </p>

          <p>👉 Comprar na nossa loja é mais do que escolher um item bonito — é investir em segurança, conforto e qualidade de vida para o seu dachshund.
          </p>

          </Text>
        </View>

        <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("DetailScreen2")}
          >
          <Text style={styles.buttonText}>Sobre Nossos Produtos</Text>
          </TouchableOpacity>

        <View style={styles.footer}>
        <Text style={styles.textt}>© 2025 - Seu App</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  sectionCard: {
    display: "flex",
    gap: 30,
  },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purplewhite",
        padding: 15,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      gap: 100,
  },
  arrow: {
      fontSize: 25,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: "50%",
  },
  image: {
      width: 50,
      height: 50,
      borderRadius: "50%",
  },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#f182a6",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: "black",
        textAlign: "justify",
        fontStyle: "normal",
        paddingHorizontal: 6,
        width: "108%"
    },
    p: {
        padding: 5
    }, 

    button: {
      backgroundColor: "#f182a6",
      padding: 5,
      borderRadius: 50,
      borderWidth: 0.8,
      
  },
  buttonText: {
      color: "#fff",
      fontSize: 18,
      textAlign: "center",
  },

  footer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 45,
    alignItems: 'center',
  },
  textt: {
    color: '#888',
    fontSize: 12,
  },
});