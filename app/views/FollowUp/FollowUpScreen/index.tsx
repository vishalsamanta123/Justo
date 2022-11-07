import { View, Text } from 'react-native'
import React from 'react'
import FollowUpView from './Components/FollowUpView'

const FollowUpScreen = ({ navigation }: any) => {
    const handleDrawerPress = () => {
        navigation.toggleDrawer();
    };
    return (
        <FollowUpView
            handleDrawerPress={handleDrawerPress}
        />
    )
}

export default FollowUpScreen