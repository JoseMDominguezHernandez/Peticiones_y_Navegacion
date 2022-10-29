import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomeStack = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.texto}>Home</Text>
        <Text style={styles.texto}>Navegación STACK</Text>
      </View>
      <View style={styles.button}>
        <Button
          icon={"play"}
          labelStyle={{ fontWeight: "bold", fontSize: 16 }}
          style={{ backgroundColor: "black", borderRadius: 10 }}
          mode="contained"
          onPress={() => navigation.navigate("Stack Pantalla 1")}
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
export default HomeStack;
