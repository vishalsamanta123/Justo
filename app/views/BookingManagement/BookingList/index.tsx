import React from "react";
import { Alert } from "react-native";
import BookingListView from './components/BookingList'

const BookingListScreen = ({ navigation }: any) => {
    const DATA: any = [
        {
            customerName: 'ABC',
            Location: 'Indore',
            configure: "12 BHK",
            booking_status: 'Pending',
            siteVisit: 234,
            closeVisit: 600,
            status: 'confirmatin Pending',
            createddate: '11/10/2022',
            budget: '20 L',
            booking_amt: '30 L'
        },
        {
            customerName: 'ABC',
            Location: 'Indore',
            configure: "12 BHK",
            booking_status: 'Pending',
            siteVisit: 234,
            closeVisit: 600,
            status: 'Pending',
            createddate: '11/10/2022',
            budget: '30 L',
            booking_amt: '80 L'
        },
        {
            customerName: 'ABC',
            Location: 'Indore',
            configure: "12 BHK",
            booking_status: 'Pending',
            siteVisit: 234,
            closeVisit: 600,
            status: 'Pending',
            createddate: '11/10/2022',
            budget: '20 L',
            booking_amt: '20 L'
        },
        {
            customerName: 'ABC',
            Location: 'Indore',
            configure: "12 BHK",
            booking_status: 'Pending',
            siteVisit: 234,
            closeVisit: 600,
            status: 'confirmatin Pending',
            createddate: '11/10/2022',
            budget: '50 L',
            booking_amt: '10 L'
        },
    ];
    const handleDrawerPress = () => {
        navigation.toggleDrawer()
    };

    const handleView = () => {
        navigation.navigate('BookingDetails')
    }
    return (
        <>
            <BookingListView
                handleDrawerPress={handleDrawerPress}
                DATA={DATA}
                handleView={handleView}
            />
        </>
    )
}
export default BookingListScreen