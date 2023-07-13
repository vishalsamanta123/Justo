import {
  normalize,
  normalizeHeight,
  normalizeWidth,
} from "app/components/scaleFontSize";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import {
  BLACK_COLOR,
  Isios,
  PRIMARY_THEME_COLOR,
  WHITE_COLOR,
} from "app/components/utilities/constant";
import { ScrollView } from "react-native-gesture-handler";

const ClusterHeadtable = (props: any) => {
  const { data, headerData } = props;
  return (
    <View
      style={{
        marginBottom: normalize(10),
      }}
    >
      <View style={{ ...styles.ThemeColorBox, width: "100%" }}>
        <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
          {data?.role_ID == 1
            ? `Closing Head Name : ${data?.name}`
            : `Sourcing Head Name : ${data?.name}`}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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

          <View
            style={{
              flexDirection: "row",
            }}
          >
            {data?.data.map((item: any, index: any) => {
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
                      {data?.role_ID == 1
                        ? item?.closing_manager
                        : item?.sourcing_manager}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {data?.role_ID == 1
                        ? item?.vistitor_attended
                        : item?.cp_appointment}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item?.visitor_no}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item?.booking}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.ready_to_book}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.conv}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.total_cancelation}
                    </Text>
                  </View>
                  <View style={styles.cTDataItems}>
                    <Text
                      style={{
                        ...styles.boxText,
                        color: BLACK_COLOR,
                      }}
                    >
                      {item.total_registration}
                    </Text>
                  </View>
                  {/* {data?.role_ID == 1 ? (
                    <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.target_set}
                      </Text>
                    </View>
                  ) : null}
                  {data?.role_ID == 1 ? (
                    <View style={styles.cTDataItems}>
                      <Text
                        style={{
                          ...styles.boxText,
                          color: BLACK_COLOR,
                        }}
                      >
                        {item.target_achive}
                      </Text>
                    </View>
                  ) : null} */}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ClusterHeadtable;
