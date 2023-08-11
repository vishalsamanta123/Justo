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

const SMReportTable = (props: any) => {
  const { data, handleCpDetailPress } = props;
  const headerData = [
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
  const cpHeaderData = ["CP Firm name / Individual CP Name", "CP Visit Count"];
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    props.onReset();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  // const data = [
  //   {
  //     _id: "6406d11bc72657d5bcaffd1d",
  //     property_id: "6406d11bc72657d5bcaffd18",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "Justo Demo Township",
  //     propertyData: [
  //       {
  //         CP_Map: 22,
  //         Inactive_Deactive_CP: 0,
  //         Booking_CP: 0,
  //         WalkIn_CP: 22,
  //         No_Shows: 0,
  //         MTD_site_visit: 0,
  //       },
  //     ],
  //     CPData: [
  //       {
  //         CP_Name: "remi Patidar",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Pravesh Devda",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Kapil lalu",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "lalu Prasad",
  //         CP_Visit_Count: 0,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "6436807fe7381c65694dce96",
  //     property_id: "64367bfa5990c608a7999e83",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "Justo Test New",
  //     propertyData: [
  //       {
  //         CP_Map: 22,
  //         Inactive_Deactive_CP: 0,
  //         Booking_CP: 0,
  //         WalkIn_CP: 22,
  //         No_Shows: 0,
  //         MTD_site_visit: 0,
  //       },
  //     ],
  //     CPData: [
  //       {
  //         CP_Name: "Sachin Patidar",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Pravesh Devda",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Kapil lalu",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "lalu Prasad",
  //         CP_Visit_Count: 0,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "646cc54eaa48bfca9dee660e",
  //     property_id: "645c65044194e401091393e7",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "The Rising - Saniket",
  //     propertyData: [
  //       {
  //         CP_Map: 22,
  //         Inactive_Deactive_CP: 0,
  //         Booking_CP: 0,
  //         WalkIn_CP: 22,
  //         No_Shows: 0,
  //         MTD_site_visit: 0,
  //       },
  //     ],
  //     CPData: [
  //       {
  //         CP_Name: "Sachin Patidar",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Pravesh Devda",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Kapil lalu",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "lalu Prasad",
  //         CP_Visit_Count: 0,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "64a5128bf2e4fcea92cee191",
  //     property_id: "645108ba4194e40109118932",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "EKA Elitas",
  //     propertyData: [
  //       {
  //         CP_Map: 22,
  //         Inactive_Deactive_CP: 0,
  //         Booking_CP: 0,
  //         WalkIn_CP: 22,
  //         No_Shows: 0,
  //         MTD_site_visit: 0,
  //       },
  //     ],
  //     CPData: [
  //       {
  //         CP_Name: "Sachin Patidar",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Pravesh Devda",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "Kapil lalu",
  //         CP_Visit_Count: 0,
  //       },
  //       {
  //         CP_Name: "lalu Prasad",
  //         CP_Visit_Count: 0,
  //       },
  //     ],
  //   },
  // ];
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;

  const onPressDownload = async () => {
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
        const workbook = XLSX.utils.book_new();

        data.forEach((property: any) => {
          const { property_title, smDetails } = property;

          const worksheetData: any = [];

          smDetails.map((item: any) => {
            const rowData = {
              "CP Map (Allocated)": item?.cpcount,
              "Inactive/Deactive CP": item?.inactiveCP,
              "Booking / Transactional CP": item?.BookingCountTotal,
              "Walk-in Active CP": item?.activeCP,
              "Visitor No Shows": item?.NoshowAppintment,
              "Site visit": item?.SitevisitCountTotal,
            };
            worksheetData.push(rowData);
            item?.CPInfo.map((val: any) => {
              const cpData = {
                "CP Firm name / Individual CP Name": val?.Cp_name,
                "CP Visit Count": val?.leadCount,
              };
              worksheetData.push(cpData);
            });
          });

          // smDetails.forEach((item: any) => {
          //   const { header, data } = item;
          //   const rowData = [header, ...data];
          //   worksheetData.push(rowData);
          // });

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
        const filePath = `${tempDir}/SourcingManagerReport.xlsx`;

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
          {data?.map((item: any, index: any) => {
            return (
              <>
                <View
                  style={{
                    marginBottom: normalize(10),
                    // width: "100%",
                  }}
                  key={index}
                >
                  <View style={{ ...styles.ThemeColorBox, width: "100%" }}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: WHITE_COLOR,
                        textAlign: "center",
                      }}
                    >
                      {item.property_title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        width: "70%",
                      }}
                    >
                      {headerData.map((item: any, index: any) => {
                        return (
                          <View
                            key={index}
                            style={{
                              // width: normalizeWidth(140),
                              width: "100%",
                              // height: normalizeHeight(90),
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
                    {item?.smDetails?.map((item: any, index: any) => {
                      console.log("🚀 ~ file: SMReportTable.tsx:379 ~ item:", item)
                      return (
                        <View
                          style={{
                            flexDirection: "column",
                            width: "30%",
                          }}
                        >
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.cpcount}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.newCpRegistered}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.activeCP}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.BookingCountTotal}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.inactiveCP}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.SitevisitCountTotal}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.NoshowAppintment}
                            </Text>
                          </View>
                          <View style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.confirmBooking}
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() =>
                              handleCpDetailPress(
                                item?.CPInfo,
                                item?.username
                              )
                            }
                            style={styles.dataItems}
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
                  {/* <View
                    style={{
                      ...styles.ThemeColorBox,
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                      CP Details
                    </Text>
                  </View> */}
                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SMReportTable;
