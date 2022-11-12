import React, { useState } from "react";
import BookingDetailsView from './components/BookingDetails'

const BookingDetailsScreen = ({ navigation }: any) => {
    const [cancelBooking, setCancelBooking] = useState(false)
    const handleBackPress = () => {
        navigation.goBack()
    }
    const handleStatusUpdate = () => {
        navigation.navigate('FollUpAdd')
    }
    return (
        <>
            <BookingDetailsView
                handleBackPress={handleBackPress}
                cancelBooking={cancelBooking}
                setCancelBooking={setCancelBooking}
                handleStatusUpdate={handleStatusUpdate}
            />
        </>
    )
}
export default BookingDetailsScreen