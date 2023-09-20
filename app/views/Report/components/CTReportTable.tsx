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
import XLSX from "xlsx";
import RNFS from "react-native-fs";
import {
  handlePermission,
  openPermissionSetting,
} from "app/components/utilities/GlobalFuncations";
import strings from "app/components/utilities/Localization";
import ErrorMessage from "app/components/ErrorMessage";

const CTReportTable = (props: any) => {
  const { data, fileName } = props;
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  console.log("🚀 ~ file: CTReportTable.tsx:37 ~ CTReportTable ~ data:", data);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    props.onReset();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const headeData = [
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
    // "No. of (follow-ups scheduled)",
  ];
  const onPressDownload = async () => {
    let array = data.map((item: any) => {
      return {
        "CM Name": item?.user_name,
        // "Lead Assign",
        "Visitor Attended": item?.VisitorAttended,
        // "Visitor Attended": item?.TotalAppointments,
        "Direct Walk-ins": item?.DirectWalkins,
        "CP (Walk-ins) Appointments": item?.CPWalkins,
        // "Total Site Visit",
        "No Shows": item.Noshow,
        "Total Revisit": item?.TotalAppointmentsrevisit,
        "Total Not Interested": item.TotalNotInterested,
        // "Visit Cancel",
        "Total Booking": item.Booking,
        // "Ready to Book",
        // "Total Registration",
        // "Cancelation Booking",
        "Conversion %": item.Conversion,
        // "No. of (follow-ups scheduled)",
      };
    });
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
        const filePath = `${tempDir}/ClosingTLReport${fileName}.xlsx`;

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
      {/* <View
        style={{
          alignItems: "flex-end",
          margin: normalize(10),
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: height - normalize(55),
          margin: normalize(10),
        }}
        horizontal
        contentContainerStyle={{
          // margin: normalize(10),
          paddingBottom: normalize(15),
        }}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            {headeData.map((item: any, index: any) => {
              return (
                <View
                  key={index}
                  style={{
                    // width: normalizeWidth(140),
                    // height: normalizeHeight(90),
                    borderWidth: normalize(Isios ? 1.2 : 2),
                    padding: normalize(12),
                    backgroundColor: PRIMARY_THEME_COLOR,
                  }}
                >
                  <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {data.map((item: any, index: any) => {
                return (
                  <View
                    style={{
                      flexDirection: "column",
                      minWidth: normalizeWidth(110),
                    }}
                  >
                    <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item?.user_name}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        props.handleCTANavigation("AppointmentCTA")
                      }
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item?.VisitorAttended}
                        {/* {item?.TotalAppointments} */}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        props.handleCTANavigation("AppointmentCTA")
                      }
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item?.DirectWalkins}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        props.handleCTANavigation("AppointmentCTA")
                      }
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item?.CPWalkins}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        props.handleCTANavigation("AppointmentCTA")
                      }
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.Noshow}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        props.handleCTANavigation("AppointmentCTA")
                      }
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item?.TotalAppointmentsrevisit}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        props.handleCTANavigation("AppointmentCTA")
                      }
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.TotalNotInterested}
                      </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.TotalCancelation}
                      </Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                      onPress={() => props.handleCTANavigation("BookingCTA")}
                      style={styles.cTDataItems}
                    >
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.Booking}
                      </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.ReadytoBook}
                      </Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.Registration}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.CancelBooking}
                      </Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.Conversion}
                      </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.followschedule}
                      </Text>
                    </TouchableOpacity> */}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CTReportTable;
