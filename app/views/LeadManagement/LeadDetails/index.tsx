import { View, Text } from 'react-native'
import React from 'react'
import LeadDetailsView from './Components/LeadDetailsView'

const LeadDetails = ({navigation}: any) => {
  const handleBackPress =() => {
    navigation.goBack()
  }
  return (
    <LeadDetailsView handleBackPress={handleBackPress} />
  )
}

export default LeadDetails