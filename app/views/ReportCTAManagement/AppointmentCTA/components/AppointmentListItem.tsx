import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import styles from "./styles";
import strings from "../../../../components/utilities/Localization";
import {
  BLACK_COLOR,
  CONST_IDS,
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  GREEN_COLOR,
  PURPLE_COLOR,
  ROLE_IDS,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../../../components/utilities/constant";
import images from "../../../../assets/images";
import Button from "../../../../components/Button";
import moment from "moment";
import { useSelector } from "react-redux";
import usePermission from "app/components/utilities/UserPermissions";

const AppointmentListItem = (props: any) => {
  const bookingStatus =
  props?.items?.booking_status?.length > 0
    ? props?.items?.booking_status[0]
    : "";

  const currentDate = `${moment(new Date()).format(
    DATE_FORMAT
  )}, ${new Date().getHours()}:${new Date().getMinutes()}`;
  const appointmentDateTime =
    `${moment
      .utc(props?.items?.appointment_date)
      .format(DATE_FORMAT)}, ${moment(
      props?.items?.appointment_time?.toString(),
      "hh:mm A"
    ).format("HH:mm")}` || "";

  return (
    <View style={styles.IteamView}>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Appointment Date :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>
            {moment.utc(props.items.appointment_date).format(DATE_TIME_FORMAT)}
          </Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Customer Name :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.customer_first_name}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>{strings.closingStatus} :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text
            style={[
              styles.nameTxt,
              {
                color:
                  props?.items?.status == 1
                    ? currentDate >= appointmentDateTime
                      ? "red"
                      : "red"
                    : props?.items?.status === 2
                    ? GREEN_COLOR
                    : props?.items?.status == 3
                    ? bookingStatus === 4
                      ? "red"
                      : GREEN_COLOR
                    : props?.items?.status == 5 || props?.items?.status == 6
                    ? "red"
                    : props?.items?.status === 4
                    ? "red"
                    : BLACK_COLOR,
              },
            ]}
          >
            {props?.items?.status == 1
              ? currentDate >= appointmentDateTime
                ? strings.STSNotVisited
                : strings.STSUpComing
              : props?.items?.status === 2
              ? "Revisit"
              : props?.items?.status === 5
              ? "Reschedule"
              : props?.items?.status === 4
              ? "Visit Cancelled"
              : props?.items?.status === 6
              ? "Not Fit for Sale"
              : props?.items?.status === 3
              ? bookingStatus === 1
                ? "Ready to Book"
                : bookingStatus === 4
                ? "Cancel Booking"
                : "Booking"
              : "Completed"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentListItem;
