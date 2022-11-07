import { View, Text } from 'react-native'
import React from 'react'
import LeadManagementView from './Components/LeadManagementView'

const LeadManagementScreen = ({ navigation }: any) => {
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  const handleBulkUploadPress = () => {
    navigation.navigate('BulkUpload')
  }
  const handleAddNewPress = () => {
    navigation.navigate('AddNewVisitorScreen')
  }
  return (
    <LeadManagementView
      handleDrawerPress={handleDrawerPress}
      handleBulkUploadPress={handleBulkUploadPress}
      handleAddNewPress={handleAddNewPress}
    />
  )
}

export default LeadManagementScreen