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
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";

const CTReportTable = () => {
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  const headeData = [
    "CM Name",
    "Site Visit",
    "Attended",
    "No Shows",
    "CP (Walk-ins) Appointments",
    "Booking",
    "Ready to Book",
    "No. of (follow-ups scheduled)",
    "Total Not Interested",
    "Conv %",
    "Total Cancelation",
    "Total Registration",
  ];
  const data = [
    {
      name: "satyam",
      data: [
        {
          CMName: "Remi Patidar",
          SiteVisit: "",
          Attended: "",
          NoShows: "",
          CPAppointments: "",
          Booking: "",
          ReadyToBook: "",
          NoOf: "",
          NotInterested: "",
          Conv: "",
          Cancelation: "",
          Registration: "",
        },
        {
          CMName: "Abhishar Yadav",
          SiteVisit: "",
          Attended: "",
          NoShows: "",
          CPAppointments: "",
          Booking: "",
          ReadyToBook: "",
          NoOf: "",
          NotInterested: "",
          Conv: "",
          Cancelation: "",
          Registration: "",
        },
        {
          CMName: "Mohan Yadav",
          SiteVisit: "",
          Attended: "",
          NoShows: "",
          CPAppointments: "",
          Booking: "",
          ReadyToBook: "",
          NoOf: "",
          NotInterested: "",
          Conv: "",
          Cancelation: "",
          Registration: "",
        },
      ],
    },
    {
      name: "satyam2",
      data: [
        {
          CMName: "Aman Patidar",
          SiteVisit: "",
          Attended: "",
          NoShows: "",
          CPAppointments: "",
          Booking: "",
          ReadyToBook: "",
          NoOf: "",
          NotInterested: "",
          Conv: "",
          Cancelation: "",
          Registration: "",
        },
        {
          CMName: "Raju Yadav",
          SiteVisit: "",
          Attended: "",
          NoShows: "",
          CPAppointments: "",
          Booking: "",
          ReadyToBook: "",
          NoOf: "",
          NotInterested: "",
          Conv: "",
          Cancelation: "",
          Registration: "",
        },
        {
          CMName: "Nimish Yadav",
          SiteVisit: "",
          Attended: "",
          NoShows: "",
          CPAppointments: "",
          Booking: "",
          ReadyToBook: "",
          NoOf: "",
          NotInterested: "",
          Conv: "",
          Cancelation: "",
          Registration: "",
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
          <View>
            {data.map((item: any, index: any) => {
              return (
                <View
                  style={{
                    marginBottom: normalize(20),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      borderWidth: normalize(Isios ? 1.2 : 2),
                      padding: normalize(12),
                      backgroundColor: PRIMARY_THEME_COLOR,
                      justifyContent: "center",
                      alignContent: 'center'
                    }}
                  >
                    <Text style={{ ...styles.boxText, color: WHITE_COLOR , textAlign:'center'}}>
                      {item.name}
                    </Text>
                  </View>
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
                      {headeData.map((item: any, index: any) => {
                        return (
                          <View
                            key={index}
                            style={{
                              width: normalizeWidth(140),
                              height: normalizeHeight(80),
                              borderWidth: normalize(Isios ? 1.2 : 2),
                              padding: normalize(12),
                              backgroundColor: PRIMARY_THEME_COLOR,
                            }}
                          >
                            <Text
                              style={{ ...styles.boxText, color: WHITE_COLOR }}
                            >
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
                      {item?.data.map((item: any, index: any) => {
                        return (
                          <View
                            style={{
                              flexDirection: "column",
                            }}
                          >
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.CMName}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.SiteVisit}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.Attended}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.NoShows}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.CPAppointments}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.Booking}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.ReadyToBook}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.NoOf}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.NotInterested}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.Conv}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.Cancelation}
                              </Text>
                            </View>
                            <View
                              style={{
                                width: normalizeWidth(120),
                                height: normalizeHeight(80),
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
                                {item.Registration}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                    </View>
                    </ScrollView>
                    {/* <View style={styles.ThemeColorBox}>
                      <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                        {item.name}
                      </Text>
                    </View> */}
                    {/* {item?.data.map((item: any, index: any) => {
                      return (
                        <View key={index} style={styles.box}>
                          <Text
                            style={{
                              ...styles.boxText,
                              color: BLACK_COLOR,
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                      );
                    })} */}
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default CTReportTable;
