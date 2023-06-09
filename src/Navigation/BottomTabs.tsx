import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/Home/Main';
import {StyleSheet, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image style={styles.image} source={require('../IMG/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="mess"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image style={styles.image} source={require('../IMG/chat.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image style={styles.image} source={require('../IMG/add.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              style={[styles.image, styles.rotate]}
              source={require('../IMG/states.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              style={[styles.image, styles.avatar]}
              source={{
                uri: 'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  avatar: {
    borderRadius: 50,
  },
  rotate: {
    transform: [{rotate: '45deg'}],
  },
});
