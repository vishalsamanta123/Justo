import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import {
  BLACK_COLOR,
  Isios,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import { normalize } from "@rneui/themed";
import { normalizeWidth, normalizeHeight } from "app/components/scaleFontSize";

const SourcingForCluster = (props: any) => {
  const { data, headerData, handleCpDetailPress } = props;
  // activeCP
  // inactiveCP
  // leadcount
  // SitevisitCountTotal
  // NoshowAppintment
  // confirmBooking
  // ConversionPercentage
  return (
    // <View
    //   style={{
    //     flexDirection: "column",
    //   }}
    // >
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data?.activeCP}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data?.newCpRegistered}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data?.inactiveCP}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data?.leadcount}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data.SitevisitCountTotal}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data.NoshowAppintment}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data.confirmBooking}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data.ConversionPercentage}
    //     </Text>
    //   </View>
    // </View>
    <View
      // key={index}
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "column",
        }}
      >
        {headerData.map((item: any, index: any) => {
          return (
            <View
              key={index}
              style={{
                width: normalizeWidth(140),
                height: normalizeHeight(90),
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {data?.map((item: any, index: any) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item?.username}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item?.cpcount}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item?.newCpRegistered}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item?.activeCP}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item?.BookingCountTotal}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item?.inactiveCP}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item.SitevisitCountTotal}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item.NoshowAppintment}
                  </Text>
                </View>
                <View style={styles.cTDataItems}>
                  <Text
                    style={{
                      ...styles.boxText,
                      color: BLACK_COLOR,
                    }}
                  >
                    {item.confirmBooking}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    handleCpDetailPress(
                      item.CPInfo,
                      item?.username
                    )
                  }
                  style={styles.cTDataItems}
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
      </ScrollView>
    </View>
  );
};

export default SourcingForCluster;
