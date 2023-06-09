import React from 'react';

import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import Header from './componets/Header';
import Photo from './componets/Photo';
import UserInfo from './componets//UserInfo';
import GrayLine from './componets//GrayLine';
import ButtonsLine from './componets/ButtonsLine';
import PotoLength from './componets/PhotoLength';

const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Photo />
          <UserInfo />
          <GrayLine />
          <ButtonsLine />
        </View>
        <PotoLength />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
