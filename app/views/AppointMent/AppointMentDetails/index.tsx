import React, { useState, useEffect } from "react";
import AppointmentDetails from './components/AppointmentDetails'
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppointmentDetailsScreen = ({ navigation, route }: any) => {
    const data = route?.params || {}
    const fetchData = async () => {
        const data: any = await AsyncStorage.getItem('userData')
        setUserData(JSON.parse(data))
    }
    useEffect(() => {
        fetchData()
    }, [])
    const [userData, setUserData] = useState<any>([])
    const [value, setValue] = useState(null);
    const [changeLink, setChangeLink] = useState(false);
    const [readyToBooK, setReadyToBooK] = useState(false);
    const handleBackPress = () => {
        navigation.goBack(null)
    }
    const handleUpdateStatus = () => {
        navigation.navigate('FollUpAdd')
    }
    const handleVisitorUpdate = () => {
        navigation.navigate('VisitorUpdate')
    }
    const handleViewFollowup = () => {
        navigation.navigate('AllFollowUpScreen')
    }
    const handleBookNow = () => {
        navigation.navigate('Booking')
    }
    return (
        <>
            <AppointmentDetails
                data={data}
                userData={userData}
                value={value}
                setValue={setValue}
                changeLink={changeLink}
                setChangeLink={setChangeLink}
                handleBackPress={handleBackPress}
                handleUpdateStatus={handleUpdateStatus}
                handleVisitorUpdate={handleVisitorUpdate}
                handleViewFollowup={handleViewFollowup}
                handleBookNow={handleBookNow}
                readyToBooK={readyToBooK}
                setReadyToBooK={setReadyToBooK}
            />
        </>
    )
}

export default AppointmentDetailsScreen