import { View, Text, Alert, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppointmentDetailsView from './Components/AppointmentDetailsView'
import { useFocusEffect } from '@react-navigation/native'
import { getAppointmentDetail } from 'app/Redux/Actions/AppointmentWithCpActions'
import { useDispatch, useSelector } from 'react-redux'
import { AddBooking, removeAddBookingData } from 'app/Redux/Actions/AppointmentCLAction'
import ErrorMessage from 'app/components/ErrorMessage'
import { GREEN_COLOR } from 'app/components/utilities/constant'
import { removeEditUser } from 'app/Redux/Actions/AppointmentWithCpActions'

const AppointmentDetails = ({ navigation, route }: any) => {
  const data = route?.params || {}
  const [BookingData, setBookingData] = useState<any>({})
  
  const dispatch: any = useDispatch()
  const { response = {}, detail = '' } = useSelector((state: any) => state.appointment)
  const closeAppointment = useSelector((state: any) => state.editAddAppointment)
  const addedBookingData = useSelector((state: any) => state.addedBooking) || {}

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getAppointmentDetail({
        appointment_id: data?._id
      }))
      return () => { };
    }, [navigation, detail])
  );

  useEffect(() => {
    setBookingData({
      lead_id: data?.lead_id,
      property_id: data?.property_id,
      customer_id: data?.customer_id
    })
  }, [data])


  useEffect(() => {
    if (addedBookingData?.response?.status === 200) {
      dispatch(removeAddBookingData())
      ErrorMessage({
        msg: addedBookingData?.response?.message,
        backgroundColor: GREEN_COLOR
      })
      navigation.navigate("BookingList", { type: "readyToBook" });
    }
    else if (closeAppointment?.response?.status === 200) {
      dispatch(removeEditUser())
      ErrorMessage({
        msg: closeAppointment?.response?.message,
        backgroundColor: GREEN_COLOR
      })
      dispatch(getAppointmentDetail({
        appointment_id: data?._id
      }))
      // navigation.navigate("BookingList", { type: "readyToBook" });
    }
  }, [addedBookingData, closeAppointment])

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    navigation.goBack()
  }
  const handleVistorUpdate = (data: any) => {
    navigation.navigate('VisitorUpdate', data)
  }
  const onPressBookNow = () => {
    const getBookingData = { ...response?.data[0], appointment_id: response?.data[0]?._id }
    navigation.navigate('Booking', { getBookingData: getBookingData })
  }
  const handleViewFollowUp = (data: any) => {
    navigation.navigate('AllFollowUpScreen', data)
  }
  const handleUpdateStatus = (data: any) => {
    navigation.navigate('AddAppointmentForSite', { item: response?.data[0], type: 'reSheduled' })
  }
  const handleBooking = (data: any) => {
    dispatch(AddBooking({
      ...BookingData,
      booking_status: 1,
      appointment_id: data?._id,
      lead_id: data?.lead_id,
      property_id: data?.property_id,
      customer_id: data?.customer_id
    }))
  }
  const handleStatusUpdate = (data: any) => {
    navigation.navigate('AppointmentAddS', data)
  }
  const handleNotInterestedPress = (data: any) => {
    navigation.navigate('CloseAppointment')
  }


  return (
    <AppointmentDetailsView
      handleUpdateStatus={handleUpdateStatus}
      handleViewFollowUp={handleViewFollowUp}
      handleBackPress={handleBackPress}
      handleVistorUpdate={handleVistorUpdate}
      setBookingData={setBookingData}
      BookingData={BookingData}
      handleBooking={handleBooking}
      onPressBookNow={onPressBookNow}
      // onpressCloseVisit={onpressCloseVisit}
      // cancelValue={cancelValue}
      // setCancelValue={setCancelValue}
      handleStatusUpdate={handleStatusUpdate}
      handleNotInterestedPress={handleNotInterestedPress}
    />
  )
}

export default AppointmentDetails