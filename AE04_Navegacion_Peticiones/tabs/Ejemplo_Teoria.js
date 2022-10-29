import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image, ScrollView, StyleSheet, View } from "react-native";

//Ejemplo de teoría
const Tab8 = () => {
  
  const [datos, setDatos] = useState([]);
  const searchTerm = "david";

  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      setDatos(res.data.items);
      //console.log(datos);
    } catch (e) {
      console.log(e);
    }
  };
  const listaUsuarios = datos.map((user) => (
    <View style={styles.card}>
      <Image style={styles.avatar} source={{ uri: user.avatar_url }} />
    </View>
  ));

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      {listaUsuarios}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  card: {
    width: 176,
    height: 224,
    padding: 24,
    marginRight: 32,
    borderWidth: 1,
    borderColor: "#E7E3EB",
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
  },
});

export default Tab8;
