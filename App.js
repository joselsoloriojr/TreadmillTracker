import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryScreen from "./screens/EntryScreen";
import JournalScreen from "./screens/JournalScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Entry" component={EntryScreen}/>
        <Tab.Screen name="Journal" component={JournalScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

