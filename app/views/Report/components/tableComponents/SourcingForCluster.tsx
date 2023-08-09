import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import { BLACK_COLOR } from "app/components/utilities/constant";

const SourcingForCluster = (props: any) => {
  const { data } = props;
    // activeCP
  // inactiveCP
  // leadcount
  // SitevisitCountTotal
  // NoshowAppintment
  // confirmBooking
  // ConversionPercentage
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
          {data?.activeCP}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data?.inactiveCP}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data?.leadcount}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data.SitevisitCountTotal }
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data.NoshowAppintment}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data.confirmBooking}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data.ConversionPercentage}
        </Text>
      </View>
    </View>
  );
};

export default SourcingForCluster;
