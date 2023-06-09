import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const info = [
  {text: 'Posts', number: 447},
  {text: 'Followers', number: '3.6M'},
  {text: 'Following', number: 1.351},
];

const Photo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.instaIcon}
          source={require('../../../IMG/instagram.png')}
        />
        <Image
          style={[styles.image, styles.one]}
          source={{
            uri: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80',
          }}
        />

        <Image
          style={[styles.image, styles.two]}
          source={{
            uri: 'https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk',
          }}
        />
        <Image
          style={[styles.image, styles.tree]}
          source={{
            uri: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvfGVufDB8fDB8fHww&w=1000&q=80',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        {info.map((el, index) => {
          return (
            <View key={index} style={styles.textBox}>
              <Text style={styles.number}>{el.number}</Text>
              <Text>{el.text}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: '40%',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'white',
  },
  textContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textBox: {
    alignItems: 'center',
  },
  number: {
    fontWeight: '800',
    fontSize: 17,
  },
  instaIcon: {
    position: 'absolute',
    width: 18,
    height: 18,
    zIndex: 11,
    left: 80,
    top: 10,
  },
  one: {
    zIndex: 10,
  },
  two: {zIndex: 9, right: 80},
  tree: {
    zIndex: 8,
    right: 160,
  },
});
