import { View, Text } from 'react-native'
import React from 'react'
import ChangePasswordView from './components/ChangePasswordView';

const ChangePasswordScreen = ({navigation,route}: any) => {
    console.log('route in change password', route);
    const handleBackPress = () => {
        navigation.goBack();
    }
  return (
    <ChangePasswordView data={route.params} handleBackPress={handleBackPress}/>
  );
};

export default ChangePasswordScreen;