import React from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';

const url = 'https://www.linkedin.com';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Noah Beck</Text>
      <Text style={styles.type}>Athlete</Text>
      <Text style={styles.text}>noah@talantxent.com</Text>
      <Text style={styles.text}>{`${'do what makes you happy<3'}`}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        linkt.ee/noahbeck
      </Text>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  name: {fontWeight: '600'},
  type: {color: 'gray'},
  text: {
    color: 'black',
  },
  link: {
    color: 'blue',
  },
});
