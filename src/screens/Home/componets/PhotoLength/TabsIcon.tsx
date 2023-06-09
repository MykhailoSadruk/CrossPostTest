import React from 'react';

import {View, StyleSheet, Image, Pressable} from 'react-native';

const TabsIcon = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../../../IMG/grid.png')} />
      <Image style={styles.img} source={require('../../../../IMG/igtv.png')} />
      <Image
        style={styles.img}
        source={require('../../../../IMG/reload.png')}
      />
    </View>
  );
};

export default TabsIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  img: {
    width: 30,
    height: 30,
  },
});
