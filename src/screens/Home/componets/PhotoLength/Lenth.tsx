import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import PostCard from './components/PostCard';
const images = [
  {
    url: 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
    type: require('../../../../IMG/grid.png'),
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU',
    type: require('../../../../IMG/pins.png'),
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8av1pbZjedbswdKbbZsp4pdd-rl8ypQi2RN_YMUHhouZQyfuAv2godTUxMdwHTo28g&usqp=CAU',
    type: require('../../../../IMG/pins.png'),
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4Hp_lDejpRsjoswITpjgFHTQpa0NgpZiXUW7w85PAFnlXZfor5DhgqoVxAuVV4Bf3sA&usqp=CAU',
    type: require('../../../../IMG/igtv.png'),
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutIXcOo-9h6Tf95ialvhtVdL1IPO33dAkccDwUuEvLMvDIQ0lAnDPI3Lk6KgXcUJcb5E&usqp=CAU',
    type: require('../../../../IMG/check.png'),
  },
  {
    url: 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
    type: require('../../../../IMG/pins.png'),
  },
  {
    url: 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
    type: require('../../../../IMG/pins.png'),
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU',
    type: false,
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8av1pbZjedbswdKbbZsp4pdd-rl8ypQi2RN_YMUHhouZQyfuAv2godTUxMdwHTo28g&usqp=CAU',
    type: require('../../../../IMG/pins.png'),
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4Hp_lDejpRsjoswITpjgFHTQpa0NgpZiXUW7w85PAFnlXZfor5DhgqoVxAuVV4Bf3sA&usqp=CAU',
    type: require('../../../../IMG/check.png'),
  },
  {
    url: 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
    type: false,
  },
  {
    url: 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
    type: require('../../../../IMG/pins.png'),
  },
];

const Length = () => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={images}
        numColumns={3}
        renderItem={({item}) => <PostCard el={item} />}
        keyExtractor={(item, index) => item.url + index}
      />
    </View>
  );
};

export default Length;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    // width: 130,
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
