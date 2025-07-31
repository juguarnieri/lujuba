import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardImageLuiza from "../components/CardImageLuiza";

export default function LuizaHome() {
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
          image="https://i.pinimg.com/736x/ae/5a/3b/ae5a3bd06c00684f13db25c23ae96ef2.jpg"
          />
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/ae/5a/3b/ae5a3bd06c00684f13db25c23ae96ef2.jpg"
          />
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
        Curiosidades sobre os Salsichinhas
            {"\n\n"}
          </Text>
          <Text style={styles.text}>
            Nossos produtos tem 100% de garantia
          </Text>
        </View>

        <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LuizaDetail")}
          >
          <Text style={styles.buttonText}>Ver Detalhes da Luiza</Text>
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
        padding: 20,
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
      width: 40,
      height: 40,
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
        fontStyle: "italic",
        paddingHorizontal: 10,
        width: "120%"
    },
    button: {
      backgroundColor: "#f182a6",
      padding: 5,
      borderRadius: 20,
      borderWidth: 0.5,
      
  },
  buttonText: {
      color: "#fff",
      fontSize: 17,
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