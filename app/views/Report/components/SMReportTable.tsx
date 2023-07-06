import { normalize } from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";

const SMReportTable = () => {
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;
  const data = [
    {
      header: "CP Map (Allocated)",
      data: ["90", ""],
    },
    {
      header: "Inactive/Deactive CP",
      data: ["", ""],
    },
    {
      header: "Booking / Transactional CP",
      data: ["1", ""],
    },
    {
      header: "Walk-in Active CP",
      data: ["10", ""],
    },
    {
      header: "MTD site visit",
      data: ["17", ""],
    },
    {
      header: "Visitor No Shows ",
      data: ["", ""],
    },
    {
      header: "FTD Site Visit",
      data: ["5", ""],
    },
    {
      header: "CP Firm name / Individual CP Name ",
      data: ["City estate", "Empire Reality"],
    },
    {
      header: "FTD CP Visit Count",
      data: ["2", "3"],
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
                    key={index}
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View style={styles.ThemeColorBox}>
                      <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                        {item.header}
                      </Text>
                    </View>
                    {item?.data.map((item: any , index : any) => {
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
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SMReportTable;
