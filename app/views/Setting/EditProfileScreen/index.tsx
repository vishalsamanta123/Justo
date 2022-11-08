import { View, Text } from 'react-native'
import React from 'react'
import EditProfileView from './components/EditProfileView'

const EditProfileScreen = ({navigation,route}: any) => {
  const onPressBack = () => {
    navigation.goBack()
  }
  return (
    <EditProfileView onPressBack={onPressBack}/>
  )
}

export default EditProfileScreen