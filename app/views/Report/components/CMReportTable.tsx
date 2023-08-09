import {
  normalize,
  normalizeHeight,
  normalizeWidth,
} from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  BLUE_COLOR,
  FONT_FAMILY_SEMIBOLD,
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
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import images from "app/assets/images";
import XLSX from "xlsx";
import RNFS from "react-native-fs";
import {
  handlePermission,
  openPermissionSetting,
} from "app/components/utilities/GlobalFuncations";
import strings from "app/components/utilities/Localization";
import ErrorMessage from "app/components/ErrorMessage";

const CMReportTable = (props: any) => {
  const { data, userData } = props;
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  const headerData = [
    "Total Site Visitors",
    "Direct Walk-ins",
    "No Shows",
    "CP(Walk-ins) Appointments",
    "Total Appointments",
    "Booking",
    "No. of (follow-ups scheduled)",
    "Total Not Interested",
    "Conversion %",
    "Grand Total",
    "Total Registration",
    "Total Cancelation",
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
      >
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            width: "100%",
          }}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
            }}
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
            <View
              style={{
                width: "100%",
                borderWidth: normalize(Isios ? 1.2 : 2),
                padding: normalize(12),
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONT_FAMILY_SEMIBOLD,
                  color: BLACK_COLOR,
                  fontSize: normalize(Isios ? 14 : 16),
                }}
              >
                CM : {userData?.data?.user_name}
              </Text>
            </View>
            {/* <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: normalizeHeight(80),
                  borderWidth: normalize(2),
                  padding: normalize(12),
                  backgroundColor: PRIMARY_THEME_COLOR,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_SEMIBOLD,
                    color: WHITE_COLOR,
                    fontSize: normalize(Isios ? 14 : 16),
                  }}
                >
                  Status
                </Text>
              </View>
              <View
                style={{
                  width: "25%",
                  height: normalizeHeight(80),
                  borderWidth: normalize(Isios ? 1.2 : 2),
                  padding: normalize(12),
                  backgroundColor: PRIMARY_THEME_COLOR,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_SEMIBOLD,
                    color: WHITE_COLOR,
                    fontSize: normalize(Isios ? 14 : 16),
                  }}
                >
                  FTD
                </Text>
              </View>
              <View
                style={{
                  width: "25%",
                  height: normalizeHeight(80),
                  borderWidth: normalize(Isios ? 1.2 : 2),
                  padding: normalize(12),
                  backgroundColor: PRIMARY_THEME_COLOR,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_SEMIBOLD,
                    color: WHITE_COLOR,
                    fontSize: normalize(Isios ? 14 : 16),
                  }}
                >
                  {" "}
                  FTM
                </Text>
              </View>
            </View> */}
            <View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
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
                {data?.map((item: any, index: any) => {
                  return (
                    <View
                      style={{
                        flexDirection: "column",
                        width: "30%",
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          // height: normalizeHeight(90),
                          borderWidth: normalize(Isios ? 1.2 : 2),
                          padding: normalize(12),
                        }}
                      >
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.VisitorAttended}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.DirectWalkins}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.Noshow}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.CPWalkins}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.TotalAppointmentsrevisit}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.Booking}
                        </Text>
                      </View>
                      {/* <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.ReadytoBook}
                        </Text>
                      </View> */}
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.followschedule}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.TotalNotInterested}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.Conversion}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.GrandTotal}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.Registration}
                        </Text>
                      </View>
                      <View style={styles.dataItems}>
                        <Text
                          style={{
                            ...styles.boxText,
                            color: BLACK_COLOR,
                          }}
                        >
                          {item?.TotalCancelation}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            {/* <View
                        style={{
                          width: "50%",
                          borderWidth: normalize(Isios ? 1.2 : 2),
                          padding: normalize(12),
                          backgroundColor: PRIMARY_THEME_COLOR,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: FONT_FAMILY_SEMIBOLD,
                            color: WHITE_COLOR,
                            fontSize: normalize(Isios ? 14 : 16),
                          }}
                        >
                          {item.header}
                        </Text>
                      </View>
                      {item?.data.map((item: any, index: any) => {
                        return (
                          <View
                            key={index}
                            style={{
                              width: "25%",
                              borderWidth: normalize(Isios ? 1.2 : 2),
                              padding: normalize(12),
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: FONT_FAMILY_SEMIBOLD,
                                color: BLACK_COLOR,
                                fontSize: normalize(Isios ? 14 : 16),
                              }}
                            >
                              {item}
                            </Text>
                          </View>
                        );
                      })} */}
          </View>
          {/* <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: normalizeHeight(60),
                  borderWidth: normalize(Isios ? 1.2 : 2),
                  padding: normalize(12),
                  backgroundColor: PRIMARY_THEME_COLOR,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_SEMIBOLD,
                    color: WHITE_COLOR,
                    fontSize: normalize(Isios ? 14 : 16),
                  }}
                >
                  Grand Total
                </Text>
              </View>
              <View style={styles.smViewBox}>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_SEMIBOLD,
                    color: WHITE_COLOR,
                    fontSize: normalize(Isios ? 14 : 16),
                  }}
                >
                  24313
                </Text>
              </View>
              <View style={styles.smViewBox}>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY_SEMIBOLD,
                    color: WHITE_COLOR,
                    fontSize: normalize(Isios ? 14 : 16),
                  }}
                ></Text>
              </View>
            </View> */}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CMReportTable;
