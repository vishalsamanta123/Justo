import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropertyDetailView from './components/PropertyDetailView';

const PropertyDetails = ({navigation,route}: any) => {
  const data = route?.params || {}
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
   <PropertyDetailView data={data} handleBackPress={handleBackPress} />
  )
}

export default PropertyDetails;