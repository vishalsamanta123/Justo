import React from 'react';
import { View, Text, Image } from 'react-native';
import SourcingDetailsView from './components/SourcingManager'

const SourcingDetailScreen = ({ navigation }: any) => {
    const handleDrawerPress = () => {
        navigation.toggleDrawer();
    };
    const handleAddNewSM = (type: any) => {
        if (type === 'edit') {
            navigation.navigate('AddNewSM', { type })
        } else {
            navigation.navigate('AddNewSM')
        }
    };
    const onPressAllocateCp = () => {
        navigation.navigate('AllocateCP')
    }
    return (
        <SourcingDetailsView
            handleDrawerPress={handleDrawerPress}
            handleAddNewSM={handleAddNewSM}
            onPressAllocateCp={onPressAllocateCp}
        />
    )
}

export default SourcingDetailScreen