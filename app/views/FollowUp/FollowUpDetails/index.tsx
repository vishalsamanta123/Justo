import { View, Text } from 'react-native'
import React from 'react'
import FollowUpDetailsView from './Components/FollowUpDetailsView'

const FollowUpDetails = ({ navigation }: any) => {
  const handleBackPress = () => {
    navigation.goBack()
  }
  const handleStatusUpdate = () => {
    navigation.navigate('FollUpAdd')
  }
  return (
    <FollowUpDetailsView
      handleBackPress={handleBackPress}
      handleStatusUpdate={handleStatusUpdate}
    />
  )
}

export default FollowUpDetails