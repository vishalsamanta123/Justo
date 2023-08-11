import { View, Text, ScrollView } from "react-native";
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

const ClosingForCluster = (props: any) => {
  const { data, headerData } = props;
  console.log("🚀 ~ file: ClosingForCluster.tsx:289 ~ data:", data);

  // SitevisitCountTotal
  // NoshowAppintment
  // confirmBooking
  // CancelBooking
  // RegisterBooking
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
    //       {data?.SitevisitCountTotal}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data?.NoshowAppintment}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data?.confirmBooking}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data.CancelBooking}
    //     </Text>
    //   </View>
    //   <View style={styles.cTDataItems}>
    //     <Text
    //       style={{
    //         ...styles.boxText,
    //         color: BLACK_COLOR,
    //       }}
    //     >
    //       {data.RegisterBooking}
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
    <>
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
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item?.VisitorAttended}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item?.DirectWalkins}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item?.CPWalkins}
                    </Text>
                  </View>

                  {/* <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.VisitorAttended}
                      </Text>
                    </View> */}
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.Noshow}
                    </Text>
                  </View>
                  {/* <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item?.TotalAppointments}
                      </Text>
                    </View> */}
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item?.TotalAppointmentsrevisit}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.TotalNotInterested}
                    </Text>
                  </View>
                  {/* <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.TotalCancelation}
                      </Text>
                    </View> */}
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.Booking}
                    </Text>
                  </View>
                  {/* <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.ReadytoBook}
                      </Text>
                    </View> */}
                  {/* <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.Registration}
                      </Text>
                    </View>
                    <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.CancelBooking}
                      </Text>
                    </View> */}
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.Conversion}
                    </Text>
                  </View>
                  {/* <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.followschedule}
                      </Text>
                    </View> */}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ClosingForCluster;
