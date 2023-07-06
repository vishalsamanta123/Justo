import { normalize } from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  Isios,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";

const STReportTable = () => {
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  const data = [
    {
      property_name: "EKA Elitas",
      data: [
        {
          header: "SM Name",
          data: ["Remi Patidar", "Abhishar Yadav", "Mohan Yadav"],
        },
        {
          header: "CP Map",
          data: ["", "", ""],
        },
        {
          header: "Booking /Transactional CP",
          data: ["", "", ""],
        },
        {
          header: "Walk-in Active CP",
          data: ["", "", ""],
        },
        {
          header: "MTD site visit",
          data: ["", "", ""],
        },
        {
          header: "Visitor No Shows ",
          data: ["", "", ""],
        },
        {
          header: "FTD Site Visit",
          data: ["", "", ""],
        },
        {
          header: "CP Name",
          data: ["CP Name 1", "CP Name 2", "CP Name 3"],
        },
        {
          header: "FTD CP Visit Count",
          data: ["", "", ""],
        },
        {
          header: "Target Set",
          data: ["", "", ""],
        },
        {
          header: "Target Achieved",
          data: ["", "", ""],
        },
      ],
    },
    {
      property_name: "Nakshatra I Land",
      data: [
        {
          header: "SM Name",
          data: ["Remi Patidar", "Abhishar Yadav", "Mohan Yadav"],
        },
        {
          header: "CP Map",
          data: ["", "", ""],
        },
        {
          header: "Booking /Transactional CP",
          data: ["", "", ""],
        },
        {
          header: "Walk-in Active CP",
          data: ["", "", ""],
        },
        {
          header: "MTD site visit",
          data: ["", "", ""],
        },
        {
          header: "Visitor No Shows ",
          data: ["", "", ""],
        },
        {
          header: "FTD Site Visit",
          data: ["", "", ""],
        },
        {
          header: "CP Name",
          data: ["CP Name 1", "CP Name 2", "CP Name 3"],
        },
        {
          header: "FTD CP Visit Count",
          data: ["", "", ""],
        },
        {
          header: "Target Set",
          data: ["", "", ""],
        },
        {
          header: "Target Achieved",
          data: ["", "", ""],
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                      <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                        {item?.property_name}
                      </Text>
                    </View>

                    <View>
                      {item?.data.map((item: any, index: any) => {
                        return (
                          <>
                            <View
                              key={index}
                              style={{
                                flexDirection: "row",
                              }}
                            >
                              <View style={styles.ThemeColorBox}>
                                <Text
                                  style={{
                                    ...styles.boxText,
                                    color: WHITE_COLOR,
                                  }}
                                >
                                  {item.header}
                                </Text>
                              </View>
                              {item?.data.map((item: any, index: any) => {
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
                              })}
                            </View>
                          </>
                        );
                      })}
                    </View>
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default STReportTable;
