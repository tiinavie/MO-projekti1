import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [msg, setMsg] = useState('');
  const buttonPressed = () => {
    Alert.alert('Hello', 'Syötit arvon: ' + msg)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
      value={msg}
      onChangeText={text => setMsg(text)}
      />
      <Button color="#a75de5" onPress={buttonPressed} title="Press me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1cdf7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    borderColor: '#fff',
    borderWidth: 2,
    paddingLeft: 10,
    marginBottom: 5,
  }
});
