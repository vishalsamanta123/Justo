import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import { BLACK_COLOR } from "app/components/utilities/constant";

const ClosingForCluster = (props: any) => {
  const { data } = props;
  // SitevisitCountTotal
  // NoshowAppintment
  // confirmBooking
  // CancelBooking
  // RegisterBooking
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
          {data?.SitevisitCountTotal}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data?.NoshowAppintment}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data?.confirmBooking}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data.CancelBooking}
        </Text>
      </View>
      <View style={styles.cTDataItems}>
        <Text
          style={{
            ...styles.boxText,
            color: BLACK_COLOR,
          }}
        >
          {data.RegisterBooking}
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

export default ClosingForCluster;
