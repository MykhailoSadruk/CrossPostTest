import React from 'react';
import TabsIcon from './TabsIcon';
import Length from './Lenth';
import {View, StyleSheet} from 'react-native';

const GrayLine = () => {
  return (
    <View style={styles.container}>
      <TabsIcon />
      <Length />
    </View>
  );
};

export default GrayLine;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: 80,
    // backgroundColor: '#EEEEEE',
    // borderRadius: 10,
  },
});
