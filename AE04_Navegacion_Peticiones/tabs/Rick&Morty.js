import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

/*Hace la llamada a la RestAPI: https://rickandmortyapi.com/ de la que 
obtenemos en una primera consulta los datos de todos los personajes de la serie 
(nombre, url de imegen y array de capítulos en los que aparece); 
con una segunda consulta anidada leemos el array y obtenemos los capítulos en los
que interviene ese personaje en un string. Cuando pulsamos el botón incrementa 
la variable 'search' para consultar el siguiente personaje. */
const Tab7 = () => {
  const [imagen, setImagen] = useState();
  const [nombre, setNombre] = useState();
  const [texto, setTexto] = useState();
  const [search, setSearch] = useState(1);

  useEffect(() => {
    getDatos();
  }, []);

 
    
  var text = "";
  const getDatos = async () => {
    try {
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/" + search
      );
      setImagen(res.data.image);
      setNombre(res.data.name);
      for (let i = 0; i < res.data.episode.length; i++) {
        const res2 = await axios.get(res.data.episode[i]);
        text = text + res2.data.episode + " - " + res2.data.name + "\n";
        getSearch();
      }
      setTexto(text);
    } catch (error) {
      console.log(error);
    }
  };

  function getSearch() {
    setSearch(search + 1);
  }

  return (
    <ScrollView>
      <View style={{marginTop:15}}>
        <Text style={styles.texto}>Personajes Rick & Morty</Text>
        <Image style={styles.avatar} source={{ uri: imagen }} />
        <Text style={styles.texto}>{nombre}</Text>
        
        <View style={styles.botonera}>
          <Button
            style={styles.boton}
            mode="contained"
            onPress={() => getDatos()}
          >
            Siguiente
          </Button>
        </View>

        <View style={styles.scroll}>
          <Text>{texto}</Text>
        </View>
              
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginTop: 10,
    alignSelf: "center",
    height: 200,
    width: 200,
    borderRadius: 15,
  },

  botonera: {
    display: "flex",
    flexDirection: "row-reverse",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
  },

  scroll: {
    alignSelf: "flex-start",
    marginLeft: 50,
    height: "auto",
  },

  boton: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 10,
  },

  texto: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Tab7;
