import { View, Text } from 'react-native'
import React from 'react'
import AppointmentView from './Components/AppointmentView'

const AppointmentScreenCPSM = ({navigation}: any) => {
    const handleDrawerPress = () => {
        navigation.toggleDrawer();
      }; 
  return (
    <AppointmentView handleDrawerPress={handleDrawerPress} />
  )
}

export default AppointmentScreenCPSM