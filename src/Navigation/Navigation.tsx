import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../SplashScreen/SplashScreen'; 
import DashboardOne from '../pages/Dashboard/DashboardOne'; 
import DashboardTwo from '../pages/Dashboard/DashboardTwo';
import DashboardThree from '../pages/Dashboard/DashboardThree';
import SignUp from '../pages/SignUp/SignUp';
import Email from '../pages/SignUp/Email';
import LoginPage from '../pages/Login/LoginPage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="DashboardOne" component={DashboardOne} />
        <Stack.Screen name="DashboardTwo" component={DashboardTwo} />
        <Stack.Screen name="DashboardThree" component={DashboardThree} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="LoginPage" component={LoginPage} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
