import React from "react";
import BookingListView from './components/BookingList'

const BookingListScreen = ({ navigation }: any) => {
    const DATA: any = [
        {
            Projectname: 'ABC',
            Location: 'Indore',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'confirmatin Pending',
            createddate: '11/10/2022'
        },
        {
            Projectname: 'ABC',
            Location: 'Indore',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'Subscribe',
            createddate: '11/10/2022'
        },
        {
            Projectname: 'ABC',
            Location: 'Indore',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'Unsubscribe',
            createddate: '11/10/2022'
        },
        {
            Projectname: 'ABC',
            Location: 'Indore',
            visitor: 123,
            siteVisit: 234,
            closeVisit: 600,
            status: 'confirmatin Pending',
            createddate: '11/10/2022'
        },
    ];
    const handleDrawerPress = () => {
        navigation.toggleDrawer()
    };

    return (
        <>
            <BookingListView
                handleDrawerPress={handleDrawerPress}
                DATA={DATA}
            />
        </>
    )
}
export default BookingListScreen