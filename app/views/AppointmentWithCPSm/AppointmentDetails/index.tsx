import { View, Text } from 'react-native'
import React from 'react'
import AppointmentDetailsView from './Components/AppointmentDetailsView'

const AppointmentDetails = ({navigation}: any) => {
  const handleBackPress = () => {
    navigation.goBack()
  }
  return (
   <AppointmentDetailsView handleBackPress={handleBackPress} />
  )
}

export default AppointmentDetails