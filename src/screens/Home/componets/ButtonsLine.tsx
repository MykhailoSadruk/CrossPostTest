import React from 'react';

import {View, StyleSheet, Pressable, Alert, Text} from 'react-native';

const info = ['Plan mode', 'Draft', 'Hide icons'];
const ButtonsLine = () => {
  return (
    <View style={styles.container}>
      {info.map(el => {
        return (
          <Pressable
            style={styles.button}
            key={el}
            onPress={() => Alert.alert(el)}>
            <Text style={styles.text}>{el}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default ButtonsLine;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '33%',
    paddingVertical: 10,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
