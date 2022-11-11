import React, { useState } from "react";
import FollowUpAddView from './components/FollowUpAdd'

const FollowUpAddScreen = ({ navigation }: any) => {
    const [value, setValue] = useState(null)
    const DATA: any = [
        {
            followupBy: 'ABC',
            date: '11/10/2022,11:00 PM',
            description: 'A ticket in a supported ,A ticket in a supported ,A ticket in a supported ,A ticket in a supported ',
            status: 'Next Follow-up',
        },
        {
            followupBy: 'ABC',
            date: '11/10/2022,12:00 PM',
            description: 'A ticket in a supported ,A ticket in a supported ,A ticket in a supported ,A ticket in a supported ',
            status: 'Follow-up',
        },
        {
            followupBy: 'ABC',
            date: '11/10/2022,03:00 PM',
            status: 'Next Follow-up',
            description: 'A ticket in a supported ,A ticket in a supported ,A ticket in a supported ,A ticket in a supported ',
        },
        {
            followupBy: 'ABC',
            date: '11/10/2022,06:00 PM',
            description: 'A ticket in a supported ,A ticket in a supported ,A ticket in a supported ,A ticket in a supported ',
            status: 'Next Follow-up',
        },
    ];
    const handleBackPress = () => {
        navigation.goBack(null)
    }
    return (
        <>
            <FollowUpAddView
                value={value}
                setValue={setValue}
                DATA={DATA}
                handleBackPress={handleBackPress}
            />
        </>
    )
}
export default FollowUpAddScreen