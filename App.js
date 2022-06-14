import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './App/Screens/HomeScreen';
import DashboardScreen from './App/Screens/DashboardScreen';
import ExpensesScreen from './App/Screens/ExpensesScreen';
import RemindersScreen from './App/Screens/RemindersScreen';
import ServicesScreen from './App/Screens/ServicesScreen';
import VehiclesScreen from './App/Screens/VehiclesScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
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
