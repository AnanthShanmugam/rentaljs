import React from "react";
import Home from "../../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../modal/color";
import { MaterialIcons } from "@expo/vector-icons";
import Listing from "../../screens/Listing";
import Chat from "../../screens/Chat";
import Profile from "../../screens/Profile";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: {
          height: 40,
        },
        tabBarShowLabel: false,
      }}
      sceneContainerStyle={{ backgroundColor: "skyblue" }}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={colors.secondary} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="message" size={24} color={colors.secondary} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="account-circle"
              size={24}
              color={colors.secondary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
