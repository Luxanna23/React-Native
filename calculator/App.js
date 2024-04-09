import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [text1, onChangeText1] = useState();
  const [text2, onChangeText2] = useState();
  const [result, onChangeResult] = useState(0);

  function addition(){
    text = parseInt(text1) + parseInt(text2);
    onChangeResult(result => result = text);
  }

  function soustraction(){
    text = parseInt(text1) - parseInt(text2);
    onChangeResult(result => result = text);
  }

  function mutliplication(){
    text = parseInt(text1) * parseInt(text2);
    onChangeResult(result => result = text);
  }

  function division(){
    text = parseInt(text1) / parseInt(text2);
    onChangeResult(result => result = text);
  }
  
  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="value 1"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="value 2"
        keyboardType="numeric"
      />
      <View style={styles.operation}>
        <TouchableOpacity style={styles.button} onPress={addition}>
        <Text style={styles.input}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={soustraction}>
        <Text style={styles.input}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mutliplication}>
        <Text style={styles.input}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={division}>
        <Text style={styles.input}>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>
        {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  operation: {
    flex:0.1,
    flexDirection:"row",
  },
  result: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "20%",
  }
});
