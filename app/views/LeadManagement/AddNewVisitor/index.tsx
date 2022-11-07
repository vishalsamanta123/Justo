import { View, Text } from 'react-native'
import React from 'react'
import AddNewVisitorForm from './Components/AddNewVisitorForm'

const AddNewVisitorScreen = ({ navigation, route }: any) => {
  const {type} = route?.params || {}
  const handleBackPress = () => {
    navigation.goBack()
  }
  return (
    <AddNewVisitorForm
      handleBackPress={handleBackPress}
      type={type}
    />
  )
}

export default AddNewVisitorScreen