import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '@screens/HomeScreen/HomeScreen';
import DashboardScreen from '@screens/DashboardScreen';
import ExpensesScreen from '@screens/ExpensesScreen';
import RemindersScreen from '@screens/RemindersScreen';
import ServicesScreen from '@screens/ServicesScreen';
import VehiclesScreen from '@screens/VehiclesScreen/VehiclesScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Vehicles">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Expenses" component={ExpensesScreen} />
        <Drawer.Screen name="Reminder" component={RemindersScreen} />
        <Drawer.Screen name="Services" component={ServicesScreen} />
        <Drawer.Screen name="Vehicles" component={VehiclesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
