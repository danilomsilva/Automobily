import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fill-up" component={FillUp} />
      <Tab.Screen name="AddExpenses" component={AddExpenses} />
      <Tab.Screen name="AddServices" component={AddServices} />
    </Tab.Navigator>
  );
}

export default HomeScreen;

const FillUp = () => {
  return (
    <View>
      <Text>FillUp</Text>
    </View>
  );
};

const AddServices = () => {
  return (
    <View>
      <Text>AddServices</Text>
    </View>
  );
};

const AddExpenses = () => {
  return (
    <View>
      <Text>AddExpenses</Text>
    </View>
  );
};
