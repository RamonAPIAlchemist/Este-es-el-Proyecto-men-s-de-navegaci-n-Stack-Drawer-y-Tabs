import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Settings from "./Screens/Settings";
import Users from "./Screens/Users";
import Home from "./Screens/Home";
import DetailHome from "./Screens/DetailHome";
import AnotherDetailHome from "./Screens/AnotherDetailHome";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigate() {
  return (
    <Drawer.Navigator initialRouteName="User">
      <Drawer.Screen name="User" component={Users} />
      <Drawer.Screen name="DetailHome" component={DetailHome} />
      <Drawer.Screen name="OtroDetalle" component={AnotherDetailHome} />
    </Drawer.Navigator>
  );
}

function MyTabs() {


  
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{

        tabBarActiveTintColor: 'purple'

      }}
    >

      
      <Tab.Screen name="HomeScreen" component={StackDetailHome}
        options={
          {
            tabBarLabel: 'HomeScreen',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={25} color="black" />
            ),
            headerShown: false,
          }
        } />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={25} color="black" />
          )
        }} />
      <Tab.Screen name="Drawer" component={DrawerNavigate}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={25} color="black" />
          ),
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


const DetailsHomeNavigator = createStackNavigator();

function StackDetailHome() {

  return (
    <DetailsHomeNavigator.Navigator
      initialRouteName='Home'>

      <DetailsHomeNavigator.Screen
        name="Home"
        component={Home}>
      </DetailsHomeNavigator.Screen>

      <DetailsHomeNavigator.Screen
        name="DetailHome"
        component={DetailHome}>
      </DetailsHomeNavigator.Screen>

      <DetailsHomeNavigator.Screen
        name="AnotherDetailsHome"
        component={AnotherDetailHome}>
      </DetailsHomeNavigator.Screen>

    </DetailsHomeNavigator.Navigator>
  )



}