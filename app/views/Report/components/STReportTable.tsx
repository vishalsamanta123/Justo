import {
  normalize,
  normalizeHeight,
  normalizeWidth,
} from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  GREEN_COLOR,
  Isios,
  PRIMARY_THEME_COLOR,
  RED_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import React from "react";
import {
  Dimensions,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import images from "app/assets/images";
import strings from "app/components/utilities/Localization";
import {
  handlePermission,
  openPermissionSetting,
} from "app/components/utilities/GlobalFuncations";
import ErrorMessage from "app/components/ErrorMessage";
import XLSX from "xlsx";
import RNFS from "react-native-fs";

const STReportTable = (props: any) => {
  const { data, handleCpDetailPress } = props;
  // const data = [
  //   {
  //     _id: "6406d11bc72657d5bcaffd1a",
  //     active_status: true,
  //     property_id: "6406d11bc72657d5bcaffd18",
  //     property_title: "Justo Demo Township",
  //     smDetails: [
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "mohan  ji lal sm",
  //       },
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "Aman ji lal sm",
  //       },
  //     ],
  //     user_id: "6406c9c2ffa098bb23eb12b6",
  //     username: "Harsh rudani sourcing TL",
  //   },
  //   {
  //     _id: "64367ca009ff215add847e32",
  //     active_status: true,
  //     property_id: "64367bfa5990c608a7999e83",
  //     property_title: "Justo Test New",
  //     smDetails: [
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "kusum ji lal sm",
  //       },
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "komal ji lal sm",
  //       },
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "mohan ji lal sm",
  //       },
  //     ],
  //     user_id: "6406c9c2ffa098bb23eb12b6",
  //     username: "Harsh rudani sourcing TL",
  //   },
  //   {
  //     _id: "646cc54eaa48bfca9dee65f7",
  //     active_status: true,
  //     property_id: "645c65044194e401091393e7",
  //     property_title: "The Rising - Saniket",
  //     smDetails: [
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "Aman ji lal sm",
  //       },
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "Aman ji lal sm",
  //       },
  //     ],
  //     user_id: "6406c9c2ffa098bb23eb12b6",
  //     username: "Harsh rudani sourcing TL",
  //   },
  //   {
  //     _id: "64a5128bf2e4fcea92cee19e",
  //     active_status: true,
  //     property_id: "645108ba4194e40109118932",
  //     property_title: "EKA Elitas",
  //     smDetails: [
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "Aman ji lal sm",
  //       },
  //       {
  //         BookingAppintment: 10,
  //         BookingCountTotal: 10,
  //         CancelAppintment: 3,
  //         CancelBooking: 3,
  //         CloseAppintment: 7,
  //         CustomerlostAppintment: 3,
  //         NoshowAppintment: 21,
  //         ReadytoBook: 0,
  //         RegisterBooking: 0,
  //         SitevisitCountTotal: 47,
  //         _id: "6406ca8cffa098bb23eb143a",
  //         active: true,
  //         activeCP: 10,
  //         confirmAppintment: 3,
  //         confirmBooking: 7,
  //         cpcount: 11,
  //         inactiveCP: 1,
  //         leadcount: 40,
  //         status: true,
  //         user_id: "6406ca8cffa098bb23eb1437",
  //         username: "Aman ji lal sm",
  //       },
  //     ],
  //     user_id: "6406c9c2ffa098bb23eb12b6",
  //     username: "Harsh rudani sourcing TL",
  //   },
  // ];
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    props.onReset();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  // const headerData = [
  //   "SM Name",
  //   "CP Map",
  //   "Walk-in Active CP",
  //   "Inactive/Deactive CP",
  //   // "Vistors",
  //   "Visitor No Shows ",
  //   "MTD Site Visit",
  //   // "Cancel Visit",
  //   // "Revisit",
  //   // "Reschedule",
  //   // "Customer Lost",
  //   "Booking /Transactional",
  //   // "Cancel Booking",
  // ];
  const headerData = [
    "SM Name",
    "CP Mapped",
    "New CP Registered",
    "Active CP",
    "Transactional CP",
    "Dormant CP",
    "Appointment Done",
    "Visitor No Shows",
    "Total Bookings",
    "CP Detail",
  ];

  const onPressDownload = async () => {
    const res = await handlePermission(
      "write",
      strings.txt_setting_heading_media,
      strings.txt_setting_description_media
    );
    if (res == "setting1") {
      openPermissionSetting(
        strings.txt_setting_heading_media,
        strings.txt_setting_description_media
      );
    } else if (res) {
      try {
        const workbook = XLSX.utils.book_new();

        data.forEach((property: any) => {
          const { property_title, smDetails } = property;
          const worksheetData: any = [];
          smDetails.map((item: any) => {
            const rowData = {
              "SM Name": item?.username,
              "CP Mapped": item?.cpcount,
              "New CP Registered": item?.newCpRegistered,
              "Active CP": item?.activeCP,
              "Transactional CP": item?.BookingCountTotal,
              "Dormant CP": item?.inactiveCP,
              "Appointment Done": item.SitevisitCountTotal,
              "Visitor No Shows": item.NoshowAppintment,
              "Total Bookings": item.confirmBooking,
            };
            worksheetData.push(rowData);
          });

          const worksheet = XLSX.utils.json_to_sheet(worksheetData);
          XLSX.utils.book_append_sheet(workbook, worksheet, property_title);
        });

        // Convert workbook to a binary string
        const excelFile = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "base64",
        });

        // Create a temporary directory to store the file
        const tempDir = RNFS.DownloadDirectoryPath;
        const filePath = `${tempDir}/SourcingTLReport.xlsx`;

        // Write the file to the temporary directory
        await RNFS.writeFile(filePath, excelFile, "base64");

        console.log("File saved:", filePath);

        // Add file scanning to make it visible in device's media library (optional)
        await RNFS.scanFile(filePath);
        ErrorMessage({
          msg: strings.succesfullyDownload,
          backgroundColor: GREEN_COLOR,
        });

        console.log("File scanned:", filePath);
      } catch (error) {
        ErrorMessage({
          msg: strings.unSuccesfullyDownload,
          backgroundColor: RED_COLOR,
        });
        console.log("Error generating Excel file:", error);
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: height - normalize(55),
        }}
        contentContainerStyle={{
          margin: normalize(10),
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* <View
          style={{
            alignItems: "flex-end",
            marginBottom: normalize(10),
          }}
        >
          <TouchableOpacity
            onPress={() => onPressDownload()}
            style={{
              backgroundColor: PRIMARY_THEME_COLOR,
              width: normalizeWidth(50),
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image
              source={images.whiteDownload}
              resizeMode={"contain"}
              style={styles.downloadImg}
            />
          </TouchableOpacity>
        </View> */}
        <View>
          {data.map((item: any, index: any) => {
            return (
              <>
                <View
                  style={{
                    marginBottom: normalize(12),
                  }}
                  key={index}
                >
                  <View
                    style={{
                      borderWidth: normalize(Isios ? 1.2 : 2),
                      padding: normalize(12),
                      backgroundColor: PRIMARY_THEME_COLOR,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.boxText,
                        color: WHITE_COLOR,
                        textAlign: "center",
                      }}
                    >
                      {item?.property_title}
                    </Text>
                  </View>

                  <View>
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        {headerData.map((item: any, index: any) => {
                          return (
                            <View
                              key={index}
                              style={{
                                width: normalizeWidth(140),
                                height: normalizeHeight(90),
                                borderWidth: normalize(Isios ? 1.2 : 2),
                                padding: normalize(12),
                                backgroundColor: PRIMARY_THEME_COLOR,
                              }}
                            >
                              <Text
                                style={{
                                  ...styles.boxText,
                                  color: WHITE_COLOR,
                                }}
                              >
                                {item}
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          {item?.smDetails.map((item: any, index: any) => {
                            return (
                              <View
                                style={{
                                  flexDirection: "column",
                                }}
                              >
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.username}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.cpcount}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.newCpRegistered ? item?.newCpRegistered : 0}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.activeCP}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.BookingCountTotal}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.inactiveCP}
                                  </Text>
                                </View>

                                {/* <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.leadcount}
                                  </Text>
                                </View> */}
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.SitevisitCountTotal}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.NoshowAppintment}
                                  </Text>
                                </View>
                                <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.confirmBooking}
                                  </Text>
                                </View>
                                {/* <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.CancelAppintment}
                                  </Text>
                                </View> */}
                                {/* <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.RevisitAppintment}
                                  </Text>
                                </View> */}
                                {/* <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.RescheduleApp}
                                  </Text>
                                </View> */}
                                {/* <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item.CustomerlostAppintment}
                                  </Text>
                                </View> */}

                                {/* <View style={styles.cTDataItems}>
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    {item?.CancelBooking}
                                  </Text>
                                </View> */}
                                <TouchableOpacity
                                  onPress={() =>
                                    handleCpDetailPress(
                                      item.CPInfo,
                                      item?.username
                                    )
                                  }
                                  style={styles.cTDataItems}
                                >
                                  <Text
                                    style={{
                                      ...styles.boxText,
                                      color: BLACK_COLOR,
                                    }}
                                  >
                                    View CP
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            );
                          })}
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default STReportTable;
