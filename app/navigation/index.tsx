import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
import LeadManagementScreen from '../views/LeadManagement/LeadManagementScreen';
import LeadDetails from '../views/LeadManagement/LeadDetails';
import SourcingManager from '../views/SourcingManagers/SourcingManagersView';
import AddNewSM from '../views/SourcingManagers/AddNewSm';
import AllocateCP from '../views/SourcingManagers/AllocateCP';
import SMDetails from '../views/SourcingManagers/SMDetails';
import FollowUpDetails from '../views/FollowUp/FollowUpDetails';
import EditFollowUp from '../views/FollowUp/FollowUpScreen/Components/EditFollowUp';
import AllFollowUpScreen from '../views/FollowUp/AllFollowUp';
import FollowUpScreen from '../views/FollowUp/FollowUpScreen';
import AppointmentScreenCPSM from '../views/AppointmentWithCPSm/AppointmentScreen';
import AppointmentDetails from '../views/AppointmentWithCPSm/AppointmentDetails';
import AddAppointmentScreen from '../views/AppointmentWithCPSm/AddAppointment';
import PickupRequestScreen from '../views/SourcingManagers/PickupRequest';
import SettingScreen from '../views/Setting/SettingScreen';
import ProfileScreen from '../views/Setting/ProfileScreen';
import EditProfileScreen from '../views/Setting/EditProfileScreen';
import ChangePasswordScreen from '../views/Setting/ChangePassword';
import SeparateLinkScreen from '../views/Setting/SeparateLink';
import BookingListScreen from '../views/BookingManagement/BookingList';
import BookingDetailsScreen from '../views/BookingManagement/BookingDetails';
import AppointmentsScreen from '../views/AppointMent/AppintMents';
import AppointmentDetailsScreen from '../views/AppointMent/AppointMentDetails';
import FollUpAddScreen from '../views/FollowUp/FollowUpAdd';
import VisitorUpdateScreen from '../views/LeadManagement/VisitorUpdate';
import ScanQrScreen from '../views/ScanQr';
import BookingScreen from '../views/BookingManagement/Booking';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptions = { headerShown: false, gestureEnabled: true };
const DrawerComponent = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, drawerType: 'front' }} drawerContent={(props) => customDrawer(props)}>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="PropertyScreenView" component={PropertyScreen} />
      <Drawer.Screen name="AgencyListing" component={AgencyListingScreen} />
      <Drawer.Screen name="LeadManagementScreen" component={LeadManagementScreen} />
      <Drawer.Screen name="SourcingManager" component={SourcingManager} />
      <Drawer.Screen name="FollowUpScreen" component={FollowUpScreen} />
      <Drawer.Screen name="AppointmentScreenCPSM" component={AppointmentScreenCPSM} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      <Drawer.Screen name="Appointments" component={AppointmentsScreen} />
      <Drawer.Screen name="BookingList" component={BookingListScreen} />
      {/* <Drawer.Screen name="profile" component={ProfileScreen}  /> */}
    </Drawer.Navigator>
  );
};

const Route = () => {
  const [userData, setUserData] = useState<any>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data: any = await AsyncStorage.getItem('userData')
    setUserData(JSON.parse(data))
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={SplashScreen} name="SplashScreenView" />
        <Stack.Screen
          component={OnboardingScreen}
          name="OnboardingScreenView"
        />
        {userData?.email !== "" &&
          <Stack.Screen component={LoginScreen} name="LoginScreenView" />
        }
        <Stack.Screen component={DrawerComponent} name="DashboardScreenView" />
        <Stack.Screen component={PropertyDetails} name="PropertyDetails" />


        {/* Agent Management Screen */}
        <Stack.Screen name="PendingAgencyList" component={PendingAgencyListScreen} />
        <Stack.Screen name="AgencyDetails" component={AgencyDetails} />
        <Stack.Screen name="AddnewAgency" component={AddnewAgency} />
        <Stack.Screen name="AgencyBankInfo" component={AgencyBankInfo} />

        {/* Lead Management Screens */}
        <Stack.Screen name="LeadDetails" component={LeadDetails} />
        <Stack.Screen name="SourcingManager" component={SourcingManager} />
        <Stack.Screen name="AddNewSM" component={AddNewSM} />
        <Stack.Screen name="AllocateCP" component={AllocateCP} />
        <Stack.Screen name="SMDetails" component={SMDetails} />

        {/* Follow up Screens */}
        <Stack.Screen name="FollowUpDetails" component={FollowUpDetails} />
        <Stack.Screen name="EditFollowUp" component={EditFollowUp} />
        <Stack.Screen name="AllFollowUpScreen" component={AllFollowUpScreen} />

        {/* Appointment with CPSM */}
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
        <Stack.Screen name="AddAppointmentScreen" component={AddAppointmentScreen} />


        {/* BookingDetails */}
        <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />

        {/* Appointment  */}
        <Stack.Screen name="AppointmentDetailMain" component={AppointmentDetailsScreen} />
        <Stack.Screen name="FollUpAdd" component={FollUpAddScreen} />
        <Stack.Screen name="VisitorUpdate" component={VisitorUpdateScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />

        {/* Profile Management */}
        <Stack.Screen name="ScanQr" component={ScanQrScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="separateLink" component={SeparateLinkScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
