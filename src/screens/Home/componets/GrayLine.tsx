import React from 'react';

import {View, StyleSheet} from 'react-native';

const GrayLine = () => {
  return <View style={styles.container}></View>;
};

export default GrayLine;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
  },
});
