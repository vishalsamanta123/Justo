import { View, Text } from 'react-native'
import React from 'react'
import LeadManagementView from './Components/LeadManagementView'

const LeadManagementScreen = ({ navigation }: any) => {
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <LeadManagementView
      handleDrawerPress={handleDrawerPress}
    />
  )
}

export default LeadManagementScreen