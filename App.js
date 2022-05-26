import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Input } from 'react-native';
import { Image } from 'react-native';
import {TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/component/Navigation"

const App = (props) => {

    return (
      <Navigation/>
    );
  }

export default App;