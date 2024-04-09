import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


generateRandomNumber = () => { 
  const min = 1; 
  const max = 100; 
  const randomNumber = 
    Math.floor(Math.random() * (max - min + 1)) ; 
    return randomNumber;
}; 

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [text, setText] = useState(); //le input
  const [textResult, onChangeTextResult] = useState(); //la phrase de fin
  const [nbTour, setNbTour] = useState(0);
  const [second, setSecond] = useState(30);
  const [isActive, setisActive] = useState(false);



  useEffect(() => {
     setRandomNumber(generateRandomNumber()); 
  }, []); 


  useEffect(() => {
    let interval;
    if (second === 0){
      setisActive(false);
      onChangeTextResult("Game Over!");
    }
    if (isActive) {
      interval = setInterval(() => {
        setSecond((second) => second - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [second, isActive]); 


  return (
    <View style={styles.container}>
      <Text>Le Juste Prix</Text>
      <Text>{randomNumber}</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="value"
        keyboardType="numeric"
      />

      <Text>{second}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setisActive(true)}>
        <Text style={styles.button}>Start</Text>
      </TouchableOpacity>
      <Text> {text} </Text>
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
    width: "20%",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});
