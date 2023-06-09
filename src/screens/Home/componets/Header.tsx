import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../../../IMG/arrow.png')} />
        <Text style={styles.text}>crosspost</Text>
      </View>
      <Text style={styles.fontSize}>Noah Beck</Text>
      <View style={styles.row}>
        <Image
          style={[styles.marginRight, styles.img]}
          source={require('../../../IMG/calendar.png')}
        />
        <Image
          style={[styles.marginRight, styles.img]}
          source={require('../../../IMG/downloud.png')}
        />
        <Image
          style={[styles.marginRight, styles.img]}
          source={require('../../../IMG/shara.png')}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  marginRight: {
    marginRight: 10,
  },
  img: {
    width: 20,
    height: 20,
  },
  fontSize: {
    fontWeight: '800',
    fontSize: 18,
  },
  text: {
    fontWeight: '600',
    paddingLeft: 5,
  },
});
