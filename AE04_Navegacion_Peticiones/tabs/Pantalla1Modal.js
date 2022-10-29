import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function Pantalla1Modal({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.texto}>Pantalla 1</Text>
        <Text style={styles.texto}>Navegación Modal</Text>
      </View>
      <View style={styles.button}>
        <Button
          icon={"play"}
          labelStyle={{ fontWeight: "bold", fontSize: 16 }}
          style={{ backgroundColor: "darkblue", borderRadius: 10 }}
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Volver
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: "100%",
    paddingTop: 80,
    fontSize: 28,
  },

  texto: {
    alignSelf: "center",
    fontSize: 32,
    color: "darkblue",
    fontWeight: "bold",
  },

  textbox: {
    paddingTop: 125,
    margin: 20,
    height: 300,
  },

  button: {
    width: 180,
    paddingTop: 20,
    alignSelf: "center",
  },
});
export default Pantalla1Modal;
