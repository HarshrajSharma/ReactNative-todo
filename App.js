import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Item from './components/Item';

export default function App() {

  const [task, setTask]=useState("");
  const [taskArr, setTaskArr]=useState([]);

  function handleChange(text){
    setTask(text);
  }
  function handleClick(){
    Keyboard.dismiss();
    setTaskArr([...taskArr, task]);
    setTask(null);
    console.log(taskArr);
  }
  function handleRemove(){

  }
  return (
    <View style={styles.container}>

      <View style={styles.main} >
        <Text style={styles.title} >Today's Task</Text>

        <View style={styles.items} >
          {taskArr.map((items, index)=>{
            return(<Item key={index} text={items} />)
          })}
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding" : 'height' }style={styles.textInputBox}>
        
        <TextInput style={styles.input} placeholder="Create task" value={task} onChangeText={handleChange} required />
        
        <TouchableOpacity onPress={handleClick} >
          <View style={styles.addBox} >
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      
      </KeyboardAvoidingView>
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
  },
  textInputBox:{
    position:'absolute',
    bottom: 60,
    width: "100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  }, 
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#ffffff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1
  },
  addBox:{
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 60,
    justifyContent:'center',
    alignItems:'center',
    borderColor: "#C0C0C0",
    borderWidth: 1
  }
});
