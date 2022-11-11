import { View, Text } from 'react-native'
import React from 'react'
import FollowUpDetailsView from './Components/FollowUpDetailsView'

const FollowUpDetails = ({navigation}: any) => {
  const handleBackPress =() => {
    navigation.goBack()
  }
  return (
    <FollowUpDetailsView handleBackPress={handleBackPress} />
  )
}

export default FollowUpDetails