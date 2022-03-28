import React, { useState } from 'react';
import {View, StyleSheet} from "react-native";
import { Header } from './src/components/Header/Header';
import { UserInfo } from './src/components/UserInfo/UserInfo';

const App = () => {
  return (
      <View style={styles.App}>
        <Header/>
        <UserInfo />
      </View>
  );
}

export default App;


const styles = StyleSheet.create({
  App: {
    paddingVertical: 40
  }
})