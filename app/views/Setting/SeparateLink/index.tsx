import { View, Text } from 'react-native'
import React from 'react'
import SeparateLinkView from './components/SeparateLinkView';

const SeparateLinkScreen = ({navigation,route}: any) => {
    const handleBackPress = () => {
        navigation.goBack();
    }
  return (
    <SeparateLinkView data={route.params} handleBackPress={handleBackPress}/>
  );
}

export default SeparateLinkScreen;