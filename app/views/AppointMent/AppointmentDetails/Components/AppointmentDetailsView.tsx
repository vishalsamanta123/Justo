import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../../../components/Header";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import AppointmentDtailsItem from "./AppointmentDtailsItem";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";
import ReadyToBookModal from "./ReadyToBookModal";
import CancelModal from "./CancelBooking";
import usePermission from "app/components/utilities/UserPermissions";
import CheckedinModel from "./CheckedinModel";
import { Isios } from "app/components/utilities/constant";

const AppointmentDetailsView = (props: any) => {
  const getLoginType = useSelector((state: any) => state.login);
  const { userData = {} } = useSelector((state: any) => state.userData) || [];
  const insets = useSafeAreaInsets();
  const [readyToBooK, setReadyToBooK] = useState(false);
  const [cancelAppoitment, setCancelAppoitment] = useState(false);
  const [CpChecking, setCpChecking] = useState(false)
  const { response = {}, detail = "" } =
  useSelector((state: any) => state.appointment) || [];
  const data = response?.data?.length > 0 ? response?.data[0] : [];

  const { edit, status, create, approve } = usePermission({
    edit: "close_appointment",
    status: "appointment_status_update",
    create: "book_now",
    approve: "ready_for_booking",
  });
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        rightSecondImageScr={images.notification}
        headerText={strings.appointmnetdetail}
        leftImageIconStyle={styles.RightFirstIconStyle}
        handleOnLeftIconPress={props.handleBackPress}
        headerStyle={styles.headerStyle}
      />
      <View style={styles.propertyListView}>
        <AppointmentDtailsItem
          item={response?.data?.length > 0 ? response?.data[0] : {}}
          handleViewFollowUp={props.handleViewFollowUp}
          handleVistorUpdate={props.handleVistorUpdate}
        />
      </View>
      {/* {userData?.data?.role_title === "Closing Manager" ? (
        data?.assign_appoinment ? (
          <View style={styles.bntView}>
            {data?.status !== 5 && data?.status !== 6 && data?.status !== 4 && data?.status !== 3 ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  // {edit && (
                  //   <Button
                  //     buttonText={strings.Statusupdate}
                  //     // btnTxtsize={13}
                  //     handleBtnPress={() => setCancelAppoitment(true)}
                  //     width={150}
                  //   />
                  // )}
                  {status && (
                    <Button
                      buttonText={strings.schedule}
                      handleBtnPress={() => props.handleUpdateStatus()}
                      width={150}
                    />
                  )}
                </View>
                <View style={{ marginVertical: 10 }} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {create &&
                    (userData?.data?.role_title === "Closing Manager" ||
                      userData?.data?.role_title === "Closing TL" ||
                      getLoginType?.response?.data?.role_title ===
                      "Closing Manager" ? (
                      <Button
                        buttonText={strings.bookNow}
                        handleBtnPress={() => props.onPressBookNow()}
                        width={150}
                      />
                    ) : null)}

                  {approve && (
                    <Button
                      buttonText={strings.readytoBookHeader}
                      handleBtnPress={() => setReadyToBooK(true)}
                      width={150}
                    />
                  )}
                </View>
              </>
            ) : null}
          </View>
        ) : null
      ) : ( */}
      {data?.checkin_status === true ?
        (<View style={styles.bntView}>
          {data?.status === 1 ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Close Appoitmnet */}
                {edit && (
                  <Button
                    buttonText={strings.notInterested}
                    // btnTxtsize={13}
                    // handleBtnPress={() => setCancelAppoitment(true)}
                    handleBtnPress={() => props.handleNotInterestedPress()}
                    width={150}
                  />
                )}
                {/* Update The appointment status */}
                {status && (
                  <Button
                    buttonText={strings.STSReVisit}
                    handleBtnPress={() => props.handleUpdateStatus()}
                    width={150}
                  />
                )}
              </View>
              <View style={{ marginVertical: 10 }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Book Now */}
                {create &&
                  (userData?.data?.role_title === "Closing Manager" ||
                    userData?.data?.role_title === "Closing TL" ||
                    getLoginType?.response?.data?.role_title === "Site Head" ||
                    getLoginType?.response?.data?.role_title === "Cluster Head" ? (
                    <Button
                      buttonText={strings.bookNow}
                      handleBtnPress={() => props.onPressBookNow()}
                      width={150}
                    />
                  ) : null)}
                {/* Ready To Book */}
                {/* {approve && (
                  <Button
                    buttonText={strings.readytoBookHeader}
                    handleBtnPress={() => setReadyToBooK(true)}
                    width={150}
                  />
                )} */}
              </View>
            </>
          ) : null}
        </View>)
        :
        data?.status === 1 ?
          (<View style={styles.bntView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Status Update */}
              <Button
                buttonText={strings.noShow}
                handleBtnPress={() => props.handleStatusUpdate({ ...data, editType: 'closing' })}
                width={Isios ? 180 : 150}
              />
              {/* Checked In */}
              <Button
                buttonText={strings.appointmentDone}
                handleBtnPress={() => setCpChecking(true)}
                width={Isios ? 180 : 150}
              />
            </View>
          </View>)
          : null
      }
      {/* )} */}

      {/* Ready To Book Model */}
      <ReadyToBookModal
        Visible={readyToBooK}
        setIsVisible={() => setReadyToBooK(false)}
        setBookingData={props.setBookingData}
        BookingData={props.BookingData}
        handleBooking={() => props.handleBooking(
          response?.data?.length > 0 ? response?.data[0] : {}
        )}
      />
      {/* Cp Check-In Model */}
      <CheckedinModel
        Visible={CpChecking}
        setIsVisible={() => setCpChecking(false)}
        data={data}
      />
      {/* Cancel Booking Model */}
      <CancelModal
        cancelDataPress={() => props.onpressCloseVisit({
          lead_id: response?.data?.length > 0 ? response?.data[0]?.lead_id : [],
          appointment_id: response?.data?.length > 0 ? response?.data[0]?._id : [],
          // cancle_type: 2,  //1=lead, 2=appoinment
        })}
        // Visible={cancelAppoitment}
        // setIsVisible={setCancelAppoitment}
        cancelValue={props.cancelValue}
        setCancelValue={props.setCancelValue}
        item={response?.data?.length > 0 ? response?.data : []}
      />
    </View>
  )
}

export default AppointmentDetailsView;
