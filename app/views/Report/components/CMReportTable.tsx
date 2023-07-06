import {
  normalize,
  normalizeHeight,
  normalizeWidth,
} from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  BLUE_COLOR,
  FONT_FAMILY_SEMIBOLD,
  Isios,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styles from "./styles";

const CMReportTable = (props: any) => {
  const { data , userData} = props;
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  // const data = [
  //   {
  //     header: "Visitor Attended",
  //     data: ["83", ""],
  //   },
  //   {
  //     header: "CP Walk-ins",
  //     data: ["142", ""],
  //   },
  //   {
  //     header: "Total Follow-ups schedules",
  //     data: ["109", ""],
  //   },
  //   {
  //     header: "Total Appointments",
  //     data: ["", ""],
  //   },
  //   {
  //     header: "Total Not Interested",
  //     data: ["", ""],
  //   },
  //   {
  //     header: "Total Ready to Book",
  //     data: ["", ""],
  //   },
  //   {
  //     header: "Total Booking",
  //     data: ["", ""],
  //   },
  //   {
  //     header: "Grand Total",
  //     data: ["", ""],
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
            <View
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
            </View>
            <View>
              {data.map((item: any, index: any) => {
                return (
                  <>
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <View
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
                      })}
                    </View>
                  </>
                );
              })}
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
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CMReportTable;
