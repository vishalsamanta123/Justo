import React from "react";
import ScanQrView from './components/ScanQr'

const ScanQrScreen = ({ navigation }: any) => {
    const handleBackPress = () => {
        navigation.goBack()
    }
    return (
        <>
            <ScanQrView
                handleBackPress={handleBackPress}
            />
        </>
    )
}

export default ScanQrScreen