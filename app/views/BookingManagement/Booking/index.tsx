import React, { useState } from "react";
import BookingView from "./components/Booking";

const BookingScreen = ({ navigation }: any) => {
    const [browse, setBrowse] = useState(false)
    const handleBackPress = () => {
        navigation.goBack(null)
    }
    const handleBookPress = () => {
        navigation.navigate('BookingList')
    }
    return (
        <>
            <BookingView
                handleBackPress={handleBackPress}
                browse={browse}
                setBrowse={setBrowse}
                handleBookPress={handleBookPress}
            />
        </>
    )
}
export default BookingScreen