import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import SourcingDetailsView from './components/SourcingManager'

const SourcingDetailScreen = ({ navigation }: any) => {
    const [status, setStatus] = useState(false)
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
    const onPressViews = () => {
        navigation.navigate('SMDetails')
    }
    return (
        <SourcingDetailsView
            handleDrawerPress={handleDrawerPress}
            handleAddNewSM={handleAddNewSM}
            onPressAllocateCp={onPressAllocateCp}
            onPressViews={onPressViews}
            status={status}
            setStatus={setStatus}
        />
    )
}

export default SourcingDetailScreen