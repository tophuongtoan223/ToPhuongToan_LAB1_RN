import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const Excersise2 = () => {
  return (
    <View style={Mystyles.container}>
      <Button title="Nút 1" onPress={() => alert('Chào Bạn 1')} />
      <TouchableOpacity
        style={Mystyles.button}
        onPress={() => alert('Chào Bạn 2')}>
        <Text style={Mystyles.text}>Nút 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Excersise2;

const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'pink',
    marginTop: 8,
    alignItems: 'center',
    padding: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});