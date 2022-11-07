import { View, Text } from 'react-native'
import React from 'react'
import AllFollowUpView from './Components/AllFollowUpView'

const AllFollowUpScreen = ({navigation}: any) => {
  const handleBackPres = () => {
    navigation.goBack()
  }
  return (
    <AllFollowUpView handleBackPres={handleBackPres} />
  )
}

export default AllFollowUpScreen