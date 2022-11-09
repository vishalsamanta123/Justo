import React from 'react';
import SMDetailsView from './components/SMDetails';

const SMDetailsScreen = ({ navigation }: any) => {
    const handleBackPress = () => {
        navigation.goBack();
    };
    const handleCpAllocationPress = () => {
        navigation.navigate('AllocateCP')
    };
    return (
        <SMDetailsView
            handleBackPress={handleBackPress}
            handleCpAllocationPress={handleCpAllocationPress}
        />
    )
}
export default SMDetailsScreen