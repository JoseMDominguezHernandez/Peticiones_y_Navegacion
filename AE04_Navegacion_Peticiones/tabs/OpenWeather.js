import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-native-paper";
import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import timestamp from "unix-timestamp";
import { ScrollView } from "react-native-gesture-handler";

function calculoHora(unixTime) {
  var hora = timestamp.toDate(unixTime).toTimeString().substring(0, 5);
  return hora;
}

function redondeo(temperatura) {
  var tempCelsius = Math.round(temperatura * 10) / 10;
  return tempCelsius;
}

/*Hace la llamada a la RestAPI: https://openweathermap.org/api. 
Obtenemos los datos metereológicos por localidad (sólo España)
y los presentamos. Con la primera llamada obtenemos el código del 
icono correspondiente y con otra consulta lo obtenemos para presentarlo 
también*/
const Tab6 = () => {
  const [temp, setTemp] = useState();
  const [amanecer, setAmanecer] = useState();
  const [atardecer, setAtardecer] = useState();
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [tmax, setTmax] = useState();
  const [tmin, setTmin] = useState();
  const [sensacion, setSensacion] = useState();
  const [humedad, setHumedad] = useState();
  const [viento, setViento] = useState();
  const [llamada2, setLlamada2] = useState();
  const [ciudad, setCiudad] = useState("Valencia");

  useEffect(() => {
    getDatos();
  }, []);

  const idioma = "es";
  const unidades = "metric";
  const apiKey = "5f36078b75806c029aa026b0d10261f0";
  //var linkConsulta = "https://api.openweathermap.org/data/2.5/weather?q=Valencia&units=metric&lang=es&appid=5f36078b75806c029aa026b0d10261f0";

  var llamada = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + ",es&units=" +
    unidades + "&lang=" + idioma + "&appid=" + apiKey;

  const getDatos = async () => {
    try {
      const res = await axios.get(llamada);
      setTemp(redondeo(res.data.main.temp));
      setAmanecer(calculoHora(res.data.sys.sunrise));
      setAtardecer(calculoHora(res.data.sys.sunset));
      setNombre(res.data.name);
      setDescripcion(res.data.weather[0].description);
      setViento(res.data.wind.speed);
      setHumedad(res.data.main.humidity);
      setSensacion(redondeo(res.data.main.feels_like));
      setTmin(redondeo(res.data.main.temp_min));
      setTmax(redondeo(res.data.main.temp_max));
      setLlamada2(
          "http://openweathermap.org/img/wn/" + res.data.weather[0].icon + "@2x.png"
      );
    } catch (error) {
      console.log(error);
      setCiudad("");
    }
  };

  return (
    <ScrollView>
      <View style={styles.pantalla}>
        <View style={styles.ficha3}>
          <View style={styles.contenedor1}>
            <View style={styles.contenedor4}>
              <TextInput
                id="input"
                style={styles.texto1}
                placeholder="Buscar"
                onChangeText={setCiudad}
                value={ciudad}
              />
            </View>

            <View style={styles.botonera}>
              <Button
                icon={"magnify"}
                style={styles.boton}
                labelStyle={{ fontSize: 25 }}
                style={{ backgroundColor: "darkblue", borderRadius: 10 }}
                mode="contained"
                onPress={() => getDatos()}
              ></Button>
            </View>
          </View>
        </View>

        <View style={styles.ficha}>
          <View style={styles.contenedor1}>
            <View style={styles.contenedor2}>
              <Text style={styles.texto1}>{nombre}</Text>
              <Text style={styles.texto2}>{temp}°</Text>
              <Text style={styles.texto4}>Sensación</Text>
              <Text style={styles.texto4}>{sensacion}° </Text>
            </View>
            <View style={styles.contenedor2}>
              <Image style={styles.avatar} source={{ uri: llamada2 }} />
              <Text style={styles.texto3}>{descripcion}</Text>
            </View>
          </View>
        </View>

        <View style={styles.ficha2}>
          <View style={styles.contenedor1}>
            <View style={styles.contenedor3}>
              <Text style={styles.texto3}>Tª min</Text>
              <Text style={styles.texto5}>{tmin}° </Text>
            </View>
            <View style={styles.contenedor3}>
              <Text style={styles.texto3}>Tª Max</Text>
              <Text style={styles.texto5}>{tmax}° </Text>
            </View>
          </View>
        </View>

        <View style={styles.ficha2}>
          <View style={styles.contenedor1}>
            <View style={styles.contenedor3}>
              <Text style={styles.texto3}>Humedad</Text>
              <Text style={styles.texto5}>{humedad} % </Text>
            </View>
            <View style={styles.contenedor3}>
              <Text style={styles.texto3}>Vel. Viento</Text>
              <Text style={styles.texto5}>{viento} m/s</Text>
            </View>
          </View>
        </View>

        <View style={styles.ficha2}>
          <View style={styles.contenedor1}>
            <View style={styles.contenedor3}>
              <Text style={styles.texto3}>Amanecer</Text>
              <Text style={styles.texto5}>{amanecer} h </Text>
            </View>
            <View style={styles.contenedor3}>
              <Text style={styles.texto3}>Atardecer</Text>
              <Text style={styles.texto5}>{atardecer} h</Text>
            </View>
          </View>
        </View>
              
        <View style={styles.botonera2}>
          <Button
            style={styles.boton}
            labelStyle={{ fontSize: 16, alignSelf: "center" }}
            style={{ backgroundColor: "darkblue", borderRadius: 10 }}
            mode="contained"
            onPress={() => getDatos()}
          >
            Actualizar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignSelf: "center",
    padding: 5,
  },
  contenedor1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    margin: 0,
  },
  contenedor2: {
    flexDirection: "column",
    alignItems: "center",
  },
  contenedor3: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginRight: 40,
  },
  contenedor4: {
    paddingLeft: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    margin: 0,
    marginLeft: 8,
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
  },
  avatar: {
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: 200,
  },
  texto1: {
    fontWeight: "bold",
    fontSize: 32,
    color: "darkblue",
  },
  texto2: {
    fontWeight: "bold",
    fontSize: 70,
    color: "darkblue",
  },
  texto3: {
    fontWeight: "bold",
    fontSize: 26,
    color: "darkblue",
  },
  texto4: {
    fontWeight: "bold",
    fontSize: 22,
    color: "darkblue",
  },
  texto5: {
    fontWeight: "bold",
    fontSize: 30,
    color: "darkblue",
  },
  texto6: {
    fontWeight: "bold",
    fontSize: 18,
  },
  ficha: {
    paddingLeft: 10,
    height: 250,
    margin: 5,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "lightblue",
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 15,
  },
  ficha2: {
    paddingLeft: 10,
    height: 90,
    margin: 5,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "lightblue",
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 15,
  },
  ficha3: {
    paddingLeft: 10,
    height: 85,
    margin: 5,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "lightblue",
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 15,
  },
  botonera: {
    margin: 15,
    marginLeft: 15,
    height: 50,
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  botonera2: {
    margin: 15,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  boton: {
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "center",
    shadowColor: "#470000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    elevation: 15,
  },
});

export default Tab6;
