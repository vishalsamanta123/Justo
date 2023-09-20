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
  const { data, handleCpDetailPress, fileName } = props;
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
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;

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
              "CP Mapped": item?.cpcount,
              "New CP Registered": item?.newCpRegistered,
              "Active CP": item?.activeCP,
              // "Transactional CP": item?.BookingCountTotal,
              "Transactional CP": item?.TransactionalCPtotal,
              "Dormant CP": item?.inactiveCP,
              // "Appointment Done": item?.SitevisitCountTotal,
              "Appointment Done": item?.Appdonecounttotal,
              "Visitor No Shows": item?.NoshowAppintment,
              "Total Bookings": item?.confirmBooking,
            };
            worksheetData.push(rowData);
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
        const filePath = `${tempDir}/SourcingManagerReport${fileName}.xlsx`;

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
    <SafeAreaView style={{ flex: 1 }}>
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
                              // width: "100%",
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
                      console.log(
                        "🚀 ~ file: SMReportTable.tsx:379 ~ item:",
                        item
                      );
                      return (
                        <View
                          style={{
                            flexDirection: "column",
                            width: "30%",
                          }}
                        >
                          <TouchableOpacity onPress={() => handleCpDetailPress(item?.CPInfo, "Demo")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.cpcount}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => handleCpDetailPress(item?.CPInfo, "Demo")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.newCpRegistered
                                ? item?.newCpRegistered
                                : 0}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => handleCpDetailPress(item?.CPInfo, "Demo")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.activeCP}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => handleCpDetailPress(item?.CPInfo, "Demo")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {/* {item?.BookingCountTotal} */}
                              {item?.TransactionalCPtotal}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => handleCpDetailPress(item?.CPInfo, "Demo")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.inactiveCP}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => props.handleCTANavigation("AppointmentCTA")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {/* {item?.SitevisitCountTotal} */}
                              {item?.Appdonecounttotal}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => props.handleCTANavigation("AppointmentCTA")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.NoshowAppintment}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => props.handleCTANavigation("BookingCTA")} style={styles.dataItems}>
                            <Text
                              style={{
                                ...styles.boxText,
                                color: BLACK_COLOR,
                              }}
                            >
                              {item?.confirmBooking}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() =>
                              handleCpDetailPress(item?.CPInfo, item?.username)
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
