import images from "app/assets/images";
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
import ClusterHeadtable from "./tableComponents/ClusterHeadtable";
import ErrorMessage from "app/components/ErrorMessage";
import {
  handlePermission,
  openPermissionSetting,
} from "app/components/utilities/GlobalFuncations";
import strings from "app/components/utilities/Localization";
import RNFS from "react-native-fs";
import XLSX from "xlsx";
import SMReportTable from "./SMReportTable";

const ClusterHeadReportTable = (props: any) => {
  const { data, onReset, handleCpDetailPress } = props;
  const { width, height } = Dimensions.get("window");
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    props.onReset();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  // const soucingHeaderData = [
  //   "Sourcing Manager",
  //   "CP Appointments/ Walk-ins",
  //   "Visitor No Shows via CPs",
  //   "Booking",
  //   "Ready To Book",
  //   "Conv %",
  //   "Total Cancelation",
  //   "Total Registration",
  // ];
  const soucingHeaderData = [
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

  // const closingHeaderData = [
  //   "Closing Manager",
  //   "Client/ Vistor Attended",
  //   "Visitor No Shows",
  //   "Booking",
  //   "Ready To Book",
  //   "Total Cancelation",
  //   "Total Registration",
  //   "Conv %",
  //   // "Target Set",
  //   // "% of Target Achieve",
  // ];
  const closingHeaderData = [
    "CM Name",
    // "Lead Assign",
    "Visitor Attended",
    "Direct Walk-ins",
    "CP (Walk-ins) Appointments",
    // "Total Site Visit",
    "No Shows",
    "Total Revisit",
    "Total Not Interested",
    // "Visit Cancel",
    "Total Booking",
    // "Ready to Book",
    // "Total Registration",
    // "Cancelation Booking",
    "Conversion %",
  ];

  const onPressDownload = async () => {
    let array = data.map((item: any) => {
      return {
        "Total Site Visitors": item?.VisitorAttended,
        "Direct Walk-ins": item?.DirectWalkins,
        "No Shows": item?.Noshow,
        "CP(Walk-ins) Appointments": item?.CPWalkins,
        "Total Appointments": item?.TotalAppointmentsrevisit,
        Booking: item?.Booking,
        "No. of": item?.followschedule,
        "Total Not Interested": item?.TotalNotInterested,
        "Conversion %": item?.Conversion,
        "Grand Total": item?.GrandTotal,
        "Total Registration": item?.Registration,
        "Total Cancelation": item?.TotalCancelation,
      };
    });
    const res = await handlePermission(
      "gallery",
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
        ErrorMessage({
          msg: strings.startDownload,
          backgroundColor: BLACK_COLOR,
        });
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(array);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const excelFile = XLSX.write(workbook, {
          type: "base64",
          bookType: "xlsx",
        });

        // Create a temporary directory to store the file
        const tempDir = RNFS.DownloadDirectoryPath;
        const filePath = `${tempDir}/ClosingManagerReport.xlsx`;

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

  // const data = [
  //   {
  //     site_name: "Satyam",
  //     clusterDatas: [
  //       {
  //         name: "Mohan Dixit",
  //         role_ID: 1,
  //         data: [
  //           {
  //             closing_manager: "Ashutosh Kumar Gurkha",
  //             vistitor_attended: "42",
  //             visitor_no: "0",
  //             booking: "0",
  //             ready_to_book: "",
  //             conv: "0.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Ayush Akhand",
  //             vistitor_attended: "30",
  //             visitor_no: "2",
  //             booking: "3",
  //             ready_to_book: "",
  //             conv: "10.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Aura Saikar",
  //             vistitor_attended: "16",
  //             visitor_no: "0",
  //             booking: "0",
  //             ready_to_book: "",
  //             conv: "0.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Deepak Kalyani",
  //             vistitor_attended: "12",
  //             visitor_no: "0",
  //             booking: "1",
  //             ready_to_book: "",
  //             conv: "8.3%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Dharmendra Tanwar",
  //             vistitor_attended: "42",
  //             visitor_no: "5",
  //             booking: "2",
  //             ready_to_book: "",
  //             conv: "4.8%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Jitendra Varma",
  //             vistitor_attended: "52",
  //             visitor_no: "1",
  //             booking: "1",
  //             ready_to_book: "",
  //             conv: "1.9%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Sandeep Dhir",
  //             vistitor_attended: "35",
  //             visitor_no: "2",
  //             booking: "0",
  //             ready_to_book: "",
  //             conv: "0.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //           {
  //             closing_manager: "Yashpal Singh",
  //             vistitor_attended: "47",
  //             visitor_no: "2",
  //             booking: "1",
  //             ready_to_book: "",
  //             conv: "2.1%",
  //             total_cancelation: "",
  //             total_registration: "",
  //             target_set: "",
  //             target_achive: "",
  //           },
  //         ],
  //       },
  //       {
  //         name: "Aman Kumar",
  //         role_ID: 2,
  //         data: [
  //           {
  //             sourcing_manager: "Ashutosh Kumar Gurkha",
  //             cp_appointment: "42",
  //             visitor_no: "",
  //             booking: "0",
  //             ready_to_book: "",
  //             conv: "0.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Ayush Akhand",
  //             cp_appointment: "30",
  //             visitor_no: "",
  //             booking: "3",
  //             ready_to_book: "",
  //             conv: "10.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Aura Saikar",
  //             cp_appointment: "16",
  //             visitor_no: "",
  //             booking: "0",
  //             ready_to_book: "",
  //             conv: "0.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Deepak Kalyani",
  //             cp_appointment: "12",
  //             visitor_no: "",
  //             booking: "1",
  //             ready_to_book: "",
  //             conv: "8.3%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Dharmendra Tanwar",
  //             cp_appointment: "42",
  //             visitor_no: "",
  //             booking: "2",
  //             ready_to_book: "",
  //             conv: "4.8%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Jitendra Varma",
  //             cp_appointment: "52",
  //             visitor_no: "",
  //             booking: "1",
  //             ready_to_book: "",
  //             conv: "1.9%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Sandeep Dhir",
  //             cp_appointment: "35",
  //             visitor_no: "",
  //             booking: "0",
  //             ready_to_book: "",
  //             conv: "0.0%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //           {
  //             sourcing_manager: "Yashpal Singh",
  //             cp_appointment: "47",
  //             visitor_no: "",
  //             booking: "1",
  //             ready_to_book: "",
  //             conv: "2.1%",
  //             total_cancelation: "",
  //             total_registration: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
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
            // onPress={() => onPressDownload()}
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
              <View>
                <View
                  style={{
                    ...styles.ThemeColorBox,
                    width: "100%",
                    // marginBottom: normalize(10),
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
                {/* <View>
                  {item?.clusterDatas?.map((item: any, index: any) => {
                    return (
                      <View key={index}>
                        <ClusterHeadtable
                          data={item}
                          headerData={
                            item?.role_ID == 1
                              ? closingHeaderData
                              : soucingHeaderData
                          }
                        />
                      </View>
                    );
                  })}
                </View> */}
                <View>
                  {item?.smDetails.length == 0 ||
                  item?.CMDetails.length == 0 ? (
                    <View>
                      <Text style={[styles.title, { textAlign: "center" }]}>
                        Not Found
                      </Text>
                    </View>
                  ) : (
                    <>
                      {/* {item?.smDetails?.map((item: any, index: any) => {
                        return ( */}
                      <View key={index}>
                      <View
                          style={{
                            ...styles.ThemeColorBox,
                            width: "100%",
                            // marginBottom: normalize(10),
                          }}
                        >
                          <Text
                            style={{
                              ...styles.boxText,
                              color: WHITE_COLOR,
                              textAlign: "center",
                            }}
                          >
                            Sourcing Team
                          </Text>
                        </View>
                        <ClusterHeadtable
                          data={item?.smDetails}
                          role_ID={2}
                          headerData={soucingHeaderData}
                          handleCpDetailPress={handleCpDetailPress}
                        />
                      </View>
                      {/* );
                      })} */}
                      {/* {item?.CMDetails?.map((item: any, index: any) => {
                        return ( */}
                      <View key={index}>
                        <View
                          style={{
                            ...styles.ThemeColorBox,
                            width: "100%",
                            // marginBottom: normalize(10),
                          }}
                        >
                          <Text
                            style={{
                              ...styles.boxText,
                              color: WHITE_COLOR,
                              textAlign: "center",
                            }}
                          >
                            Closing Team
                          </Text>
                        </View>
                        <ClusterHeadtable
                          data={item?.CMDetails}
                          role_ID={1}
                          headerData={closingHeaderData}
                        />
                      </View>
                      {/* );
                      })} */}
                    </>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClusterHeadReportTable;
