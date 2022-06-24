import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ExpenseIcon_Filled from '@images/expenseIcon_filled.png';
import ExpenseIcon_Outlined from '@images/expenseIcon_outlined.png';
import FuelIcon_Filled from '@images/fuelIcon_filled.png';
import FuelIcon_Outlined from '@images/fuelIcon_outlined.png';
import ServiceIcon_Filled from '@images/serviceIcon_filled.png';
import ServiceIcon_Outlined from '@images/serviceIcon_outlined.png';

import AddExpense from '@screens/HomeScreen/AddExpense';
import FillUp from '@screens/HomeScreen/FillUp';
import AddService from '@screens/HomeScreen/AddService';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Expenses"
        component={AddExpense}
        options={() => ({
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? ExpenseIcon_Filled : ExpenseIcon_Outlined}
                style={styles.tabIcon}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Fuel"
        component={FillUp}
        options={() => ({
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? FuelIcon_Filled : FuelIcon_Outlined}
                style={styles.tabIcon}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Service"
        component={AddService}
        options={() => ({
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={focused ? ServiceIcon_Filled : ServiceIcon_Outlined}
                style={styles.tabIcon}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
});
