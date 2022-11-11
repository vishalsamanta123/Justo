import React from "react";
import { DrawerActions } from "@react-navigation/native";
import PickupRequestView from "./components/PickupRequest";

const PickupRequestScreen = ({ navigation }: any) => {
  const DATA: any = [
    {
      dateTime: '11/10/2022 11:30 AM',
      visitorName: 'ABC',
      pickupLocation: 'Indore,madhya pradesh',
      mobile: 1238900999,
      noOfGuest: 2,
      visitScore: 600,
      status: 'confirmatin Pending',
    },
    {
      dateTime: '11/10/2022 12:00 AM',
      visitorName: 'ABCDEF',
      pickupLocation: 'Indore,bangali',
      mobile: 1238977688,
      noOfGuest: 23,
      visitScore: 600,
      status: 'Subscribe',
    },
    {
      dateTime: '11/10/2022 3:00 PM',
      visitorName: 'DEDD',
      pickupLocation: 'Indore',
      mobile: 12894894353,
      noOfGuest: 1,
      visitScore: 600,
      status: 'Unsubscribe',
    },
    {
      dateTime: '11/10/2022 02:00 PM',
      visitorName: 'ABSFC',
      pickupLocation: 'Indore',
      mobile: 124358943853,
      noOfGuest: 20,
      visitScore: 600,
      status: 'confirmatin Pending',
    },
  ];
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <PickupRequestView
      handleDrawerPress={handleDrawerPress}
      DATA={DATA}
    />
  )
}
export default PickupRequestScreen;