import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item';
export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.main} >
        <Text style={styles.title} >Today's Task</Text>

        <View style={styles.items} >
          <Item text="Apple" />
          <Item text="Orange" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  main:{
    paddingTop: 80,
    paddingHorizontal: 20,
  }, 
  title:{
    fontSize: 24,
    fontWeight:'bold'
  },
  items:{
    marginTop: 30
  }
});
