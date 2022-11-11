import React, { useState } from "react";
import ConfirmModal from "../../../components/Modals/ConfirmModal";
import AppointmentDetails from './components/AppointmentDetails'

const AppointmentDetailsScreen = ({ navigation, route }: any) => {
    const data = route?.params || {}
    const [value, setValue] = useState(null);
    const [changeLink, setChangeLink] = useState(false);
    const handleBackPress = () => {
        navigation.goBack(null)
    }
    const handleUpdateStatus = () => {
        navigation.navigate('FollUpAdd')
    }
    return (
        <>
            <AppointmentDetails
                data={data}
                value={value}
                setValue={setValue}
                changeLink={changeLink}
                setChangeLink={setChangeLink}
                handleBackPress={handleBackPress}
                handleUpdateStatus={handleUpdateStatus}
            />
        </>
    )
}

export default AppointmentDetailsScreen