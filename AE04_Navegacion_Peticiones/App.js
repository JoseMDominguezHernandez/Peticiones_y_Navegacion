import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import HomeModal from "./tabs/HomeModal";
import Pantalla1Modal from "./tabs/Pantalla1Modal";

import HomeStack from "./tabs/HomeStack";
import Pantalla1Stack from "./tabs/Pantalla1Stack";
import Pantalla2Stack from "./tabs/Pantalla2Stack";

import Tab6 from "./tabs/OpenWeather";
import Tab7 from "./tabs/Rick&Morty";
import Tab8 from "./tabs/Ejemplo_Teoria.js";

const ModalHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightblue",
          borderBottomWidth: 1,
          borderBottomColor: "blue",
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home MODAL" component={HomeModal} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal Pantalla 1" component={Pantalla1Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const StackHome = () => {
  return (
    <Stack.Navigator
      options="false"
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
          borderBottomWidth: 1,
          borderBottomColor: "red",
        },
      }}
    >
      <Stack.Screen name="Home STACK" component={HomeStack} />
      <Stack.Screen name="Stack Pantalla 1" component={Pantalla1Stack} />
      <Stack.Screen name="Stack Pantalla 2" component={Pantalla2Stack} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="1. MODAL"
          component={ModalHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="2. STACK"
          component={StackHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="logo-buffer" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="3. Rick&Morty"
          component={Tab7}
          options={{
            headerStyle: {
              backgroundColor: "green",
              borderBottomWidth: 1,
              borderBottomColor: "black",
            },
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="4. El Tiempo"
          component={Tab6}
          options={{
            headerStyle: {
              backgroundColor: "lightblue",
              borderBottomWidth: 1,
              borderBottomColor: "blue",
            },
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cloud" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="5. Ejemplo"
          component={Tab8}
          options={{
            haderShown: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="school" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
