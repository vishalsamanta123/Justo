import React, { useState, } from "react";
import AppointmentView from './components/Appointments'
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppointmentsScreen = ({ navigation }: any) => {
    const [dropLocisVisible, setDropLocisVisible] = useState(false)
    const [filterisVisible, setFilterisVisible] = useState(false)
    const DATA: any = [
        {
            visitorName: 'ABC',
            siteVisitDate: '11/10/2022,11:00 PM',
            leadNo: 'JUSTO2775',
            pickup: "Yes",
            status: 'confirmatin Pending',
            visitScore: 234,
            assignTo: "Suresh ",
            source: 'DEF',
            location: 'Pune',
            age: '32',
            budget: '50L',
        },
        {
            visitorName: 'ABC',
            siteVisitDate: '11/10/2022,12:00 PM',
            leadNo: 'JUSTO2775899',
            pickup: "Yes",
            status: 'Subscribe',
            visitScore: 234,
            assignTo: "Anil",
            source: 'DESSF',
            location: 'Pune,india',
            age: '32',
            budget: '90L',
        },
        {
            visitorName: 'ABC',
            siteVisitDate: '11/10/2022,03:00 PM',
            leadNo: 'JUSTO2444',
            pickup: "Yes",
            status: 'Unsubscribe',
            visitScore: 234,
            assignTo: 'Harsh ',
            source: 'DESSF',
            location: 'Indore',
            age: '32',
            budget: '5L',
        },
        {
            visitorName: 'ABC',
            siteVisitDate: '11/10/2022,06:00 PM',
            leadNo: 'JUSTO2555',
            pickup: "Yes",
            status: 'confirmatin Pending',
            visitScore: 234,
            assignTo: 'Harsh.S',
            source: 'DEF',
            location: 'Pune',
            age: '32',
            budget: '50L',
        },
    ];
    const handleDrawerPress = () => {
        navigation.toggleDrawer()
    };
    const onPressView = (items: any) => {
        navigation.navigate('AppointmentDetailMain', { items })
    };
    const handleScanQr = (items: any) => {
        navigation.navigate('ScanQr')
    };
    return (
        <>
            <AppointmentView
                filterisVisible={filterisVisible}
                setFilterisVisible={setFilterisVisible}
                handleDrawerPress={handleDrawerPress}
                onPressView={onPressView}
                DATA={DATA}
                handleScanQr={handleScanQr}
                dropLocisVisible={dropLocisVisible}
                setDropLocisVisible={setDropLocisVisible}
            />
        </>
    )
}
export default AppointmentsScreen