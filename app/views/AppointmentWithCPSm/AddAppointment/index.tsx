import { View, Text } from 'react-native'
import React from 'react'
import AddAppointmentView from './Components/AddAppointmentView'

const AddAppointmentScreen = ({navigation}: any) => {
    const handleBackPress = () => {
        navigation.goBack()
    }
  return (
    <AddAppointmentView handleBackPress={handleBackPress} />
  )
}

export default AddAppointmentScreen