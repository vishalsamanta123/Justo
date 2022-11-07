import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../views/Authentication/SplashScreen';
import OnboardingScreen from '../views/Authentication/OnboardingScreen';
import LoginScreen from '../views/Authentication/LoginScreen';
import DashboardScreen from '../views/DashboardScreen';
import customDrawer from './customDrawer';
import PropertyScreen from '../views/PropertyMangement/PropertyScreen';
import PropertyDetails from '../views/PropertyMangement/PropertyDetails';

/**Agency module**/
import AgencyListingScreen from '../views/AgencyManagement/AgencyListing';
import AddnewAgency from '../views/AgencyManagement/AddAgency';
import AgencyBankInfo from '../views/AgencyManagement/AddAgency/components/AgencyBankInfo';
import AgencyDetails from '../views/AgencyManagement/AgencyDetailView';
import PendingAgencyListScreen from '../views/AgencyManagement/PendingAgencyListing';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions = { headerShown: false, gestureEnabled: true };
const DrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, drawerType: 'front' }} drawerContent={(props) => customDrawer(props)}>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="PropertyScreenView" component={PropertyScreen} />
      <Drawer.Screen name="AgencyListing" component={AgencyListingScreen} />
    </Drawer.Navigator>
  );
};
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* <Stack.Screen component={SplashScreen} name="SplashScreenView" />
        <Stack.Screen
          component={OnboardingScreen}
          name="OnboardingScreenView"
        />
        <Stack.Screen component={LoginScreen} name="LoginScreenView" /> */}
        <Stack.Screen component={DrawerComponent} name="DashboardScreenView" />
        <Stack.Screen component={PropertyDetails} name="PropertyDetails" />

        {/* Agent Management Screen */}
        <Stack.Screen name="PendingAgencyList" component={PendingAgencyListScreen} />
        <Stack.Screen name="AgencyDetails" component={AgencyDetails} />
        <Stack.Screen name="AddnewAgency" component={AddnewAgency} />
        <Stack.Screen name="AgencyBankInfo" component={AgencyBankInfo} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
