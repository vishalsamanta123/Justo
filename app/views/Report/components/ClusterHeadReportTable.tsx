import images from "app/assets/images";
import {
  normalize,
  normalizeHeight,
  normalizeWidth,
} from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  Isios,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import ClusterHeadtable from "./tableComponents/ClusterHeadtable";

const ClusterHeadReportTable = () => {
  const { width, height } = Dimensions.get("window");
  const soucingHeaderData = [
    "Sourcing Manager",
    "CP Appointments/ Walk-ins",
    "Visitor No Shows via CPs",
    "Booking",
    "Ready To Book",
    "Conv %",
    "Total Cancelation",
    "Total Registration",
  ];
  const closingHeaderData = [
    "Closing Manager",
    "Client/ Vistor Attended",
    "Visitor No Shows",
    "Booking",
    "Ready To Book",
    "Conv %",
    "Total Cancelation",
    "Total Registration",
    // "Target Set",
    // "% of Target Achieve",
  ];
  const data = [
    {
      site_name: "Satyam",
      clusterDatas: [
        {
          name: "Mohan Dixit",
          role_ID: 1,
          data: [
            {
              closing_manager: "Ashutosh Kumar Gurkha",
              vistitor_attended: "42",
              visitor_no: "0",
              booking: "0",
              ready_to_book: "",
              conv: "0.0%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Ayush Akhand",
              vistitor_attended: "30",
              visitor_no: "2",
              booking: "3",
              ready_to_book: "",
              conv: "10.0%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Aura Saikar",
              vistitor_attended: "16",
              visitor_no: "0",
              booking: "0",
              ready_to_book: "",
              conv: "0.0%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Deepak Kalyani",
              vistitor_attended: "12",
              visitor_no: "0",
              booking: "1",
              ready_to_book: "",
              conv: "8.3%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Dharmendra Tanwar",
              vistitor_attended: "42",
              visitor_no: "5",
              booking: "2",
              ready_to_book: "",
              conv: "4.8%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Jitendra Varma",
              vistitor_attended: "52",
              visitor_no: "1",
              booking: "1",
              ready_to_book: "",
              conv: "1.9%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Sandeep Dhir",
              vistitor_attended: "35",
              visitor_no: "2",
              booking: "0",
              ready_to_book: "",
              conv: "0.0%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
            {
              closing_manager: "Yashpal Singh",
              vistitor_attended: "47",
              visitor_no: "2",
              booking: "1",
              ready_to_book: "",
              conv: "2.1%",
              total_cancelation: "",
              total_registration: "",
              target_set: "",
              target_achive: "",
            },
          ],
        },
        {
          name: "Aman Kumar",
          role_ID: 2,
          data: [
            {
              sourcing_manager: "Ashutosh Kumar Gurkha",
              cp_appointment: "42",
              visitor_no: "",
              booking: "0",
              ready_to_book: "",
              conv: "0.0%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Ayush Akhand",
              cp_appointment: "30",
              visitor_no: "",
              booking: "3",
              ready_to_book: "",
              conv: "10.0%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Aura Saikar",
              cp_appointment: "16",
              visitor_no: "",
              booking: "0",
              ready_to_book: "",
              conv: "0.0%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Deepak Kalyani",
              cp_appointment: "12",
              visitor_no: "",
              booking: "1",
              ready_to_book: "",
              conv: "8.3%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Dharmendra Tanwar",
              cp_appointment: "42",
              visitor_no: "",
              booking: "2",
              ready_to_book: "",
              conv: "4.8%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Jitendra Varma",
              cp_appointment: "52",
              visitor_no: "",
              booking: "1",
              ready_to_book: "",
              conv: "1.9%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Sandeep Dhir",
              cp_appointment: "35",
              visitor_no: "",
              booking: "0",
              ready_to_book: "",
              conv: "0.0%",
              total_cancelation: "",
              total_registration: "",
            },
            {
              sourcing_manager: "Yashpal Singh",
              cp_appointment: "47",
              visitor_no: "",
              booking: "1",
              ready_to_book: "",
              conv: "2.1%",
              total_cancelation: "",
              total_registration: "",
            },
          ],
        },
      ],
    },
  ];
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {data.map((item: any, index: any) => {
            return (
              <View>
                <View
                  style={{
                    ...styles.ThemeColorBox,
                    width: "100%",
                    marginBottom: normalize(10),
                  }}
                >
                  <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                    Site Name : {item?.site_name}
                  </Text>
                </View>
                <View>
                  {item?.clusterDatas.map((item: any, index: any) => {
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
