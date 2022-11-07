import React from 'react';
import { View, Text, Image } from 'react-native';
import AddNewSM from './components/AddNewSM'

const AddNewSMScreen = ({ navigation, route }: any) => {
    console.log('route: ', route);
    const onPressBack = () => {
        navigation.goBack()
    }
    const onPressCreate = () => {
        navigation.goBack()
    }
    return (
        <AddNewSM
            onPressBack={onPressBack}
            onPressCreate={onPressCreate}
            type={route?.params?.type || ""}
        />

    )
}

export default AddNewSMScreen;