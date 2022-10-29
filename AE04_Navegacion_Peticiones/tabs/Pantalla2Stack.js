import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Pantalla2Stack = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.texto}>Pantalla 2</Text>
        <Text style={styles.texto}>Navegación STACK</Text>
      </View>
      <View style={styles.button}>
        <Button
          icon={"play"}
          labelStyle={{ fontWeight: "bold", fontSize: 16 }}
          style={{ backgroundColor: "black", borderRadius: 10 }}
          mode="contained"
          onPress={() => props.navigation.navigate("Home STACK")}
        >
          Siguiente
        </Button>
      </View>
    </ScrollView>
  );
};

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
    color: "orange",
    fontWeight: "bold",
  },

  textbox: {
    paddingTop: 125,
    margin: 20,
    height: 300,
  },

  button: {
    width: 180,
    alignSelf: "center",
  },
});
export default Pantalla2Stack;
