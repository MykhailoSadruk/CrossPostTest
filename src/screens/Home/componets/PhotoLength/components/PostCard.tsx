import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const PostCard = ({el}: {el: any}) => {
  return (
    <View style={styles.container}>
      {el.type ? <Image style={styles.icons} source={el.type} /> : null}
      <Image
        style={styles.image}
        source={{
          uri: el.url,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '33.333%',
  },
  image: {
    width: '100%',
    height: 130,
  },
  icons: {
    position: 'absolute',
    width: 20,
    height: 20,
    zIndex: 10,
    right: 3,
    top: 3,
  },
});

export default PostCard;
