import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Home() {
  
  let [text, setText] = useState("");
  
  function CalcularValor() {

    let texto = "O numero é impar"
    let num = parseInt(text);
    if (num % 2 == 0){
        texto = "O numero é par"
    } 
 alert (texto)
  }

  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Par ou Ímpar?</Text>

      <TextInput
        onChangeText={setText}
        style={styles.campo}
        placeholder="Digite o valor"
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularValor}>
        <Text style={styles.botaoTexto}> Calcular </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E90FF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  campo: {
    backgroundColor: "#FFF",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    width: 250,
  },
  botao: {
    backgroundColor: "#BD2A2E",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    width: 250,
  },

  botaoTexto: {
    color: "#FFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
