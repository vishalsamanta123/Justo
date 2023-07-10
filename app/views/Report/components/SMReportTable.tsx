import { normalize, normalizeWidth } from "app/components/scaleFontSize";
import {
  BLACK_COLOR,
  GREEN_COLOR,
  PRIMARY_THEME_COLOR,
  RED_COLOR,
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
import images from "app/assets/images";
import strings from "app/components/utilities/Localization";
import {
  handlePermission,
  openPermissionSetting,
} from "app/components/utilities/GlobalFuncations";
import ErrorMessage from "app/components/ErrorMessage";
import XLSX from "xlsx";
import RNFS from "react-native-fs";

const SMReportTable = (props: any) => {
  const { data } = props;
  // console.log("🚀 ~ file: SMReportTable.tsx:32 ~ SMReportTable ~ data:", data[0]?.propertyData)
  // const data = [
  //   {
  //     _id: "6406d11bc72657d5bcaffd1d",
  //     property_id: "6406d11bc72657d5bcaffd18",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "Justo Demo Township",
  //     propertyData: [
  //       {
  //         header: "CP Map (Allocated)",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Inactive/Deactive CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Booking / Transactional CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Walk-in Active CP",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Visitor No Shows",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "MTD site visit",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "CP Firm name / Individual CP Name",
  //         data: [
  //           "sachin patidar",
  //           "Nitesh up",
  //           "kapil",
  //           "Pravesh Devda",
  //           "Test Remi",
  //           "vrashank",
  //           "Test1305",
  //           "Ramesh",
  //           "Ramesh company",
  //           "lifo",
  //           "shareef",
  //           "Rubina ji",
  //           "Vihan company",
  //           "komal",
  //           "nimish company",
  //           "jayesh company",
  //           "babu bhaiya company",
  //           "kaleen bhaiya ki comp",
  //           "Remi Ji 11",
  //           "titu company ",
  //           "amit shah",
  //           "Microsoft "
  //         ],
  //       },
  //       {
  //         header: "CP Visit Count",
  //         data: [0, ""],
  //       }
  //     ],
  //   },
  //   {
  //     _id: "6436807fe7381c65694dce96",
  //     property_id: "64367bfa5990c608a7999e83",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "Justo Test New",
  //     propertyData: [
  //       {
  //         header: "CP Map (Allocated)",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Inactive/Deactive CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Booking / Transactional CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Walk-in Active CP",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Visitor No Shows",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "MTD site visit",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "CP Firm name / Individual CP Name",
  //         data: [
  //           "sachin patidar",
  //           "Nitesh up",
  //           "kapil",
  //           "Pravesh Devda",
  //           "Test Remi",
  //           "vrashank",
  //           "Test1305",
  //           "Ramesh",
  //           "Ramesh company",
  //           "lifo",
  //           "shareef",
  //           "Rubina ji",
  //           "Vihan company",
  //           "komal",
  //           "nimish company",
  //           "jayesh company",
  //           "babu bhaiya company",
  //           "kaleen bhaiya ki comp",
  //           "Remi Ji 11",
  //           "titu company ",
  //           "amit shah",
  //           "Microsoft "
  //         ],
  //       },
  //       {
  //         header: "CP Visit Count",
  //         data: [0, ""],
  //       }
  //     ],
  //   },
  //   {
  //     _id: "646cc54eaa48bfca9dee660e",
  //     property_id: "645c65044194e401091393e7",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "The Rising - Saniket",
  //     propertyData: [
  //       {
  //         header: "CP Map (Allocated)",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Inactive/Deactive CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Booking / Transactional CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Walk-in Active CP",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Visitor No Shows",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "MTD site visit",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "CP Firm name / Individual CP Name",
  //         data: [
  //           "sachin patidar",
  //           "Nitesh up",
  //           "kapil",
  //           "Pravesh Devda",
  //           "Test Remi",
  //           "vrashank",
  //           "Test1305",
  //           "Ramesh",
  //           "Ramesh company",
  //           "lifo",
  //           "shareef",
  //           "Rubina ji",
  //           "Vihan company",
  //           "komal",
  //           "nimish company",
  //           "jayesh company",
  //           "babu bhaiya company",
  //           "kaleen bhaiya ki comp",
  //           "Remi Ji 11",
  //           "titu company ",
  //           "amit shah",
  //           "Microsoft "
  //         ],
  //       },
  //       {
  //         header: "CP Visit Count",
  //         data: [0, ""],
  //       }
  //     ],
  //   },
  //   {
  //     _id: "64a5128bf2e4fcea92cee191",
  //     property_id: "645108ba4194e40109118932",
  //     user_id: "6406ca8cffa098bb23eb1437",
  //     username: "Aman ji lal sm",
  //     property_title: "EKA Elitas",
  //     propertyData: [
  //       {
  //         header: "CP Map (Allocated)",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Inactive/Deactive CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Booking / Transactional CP",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "Walk-in Active CP",
  //         data: [22, ""],
  //       },
  //       {
  //         header: "Visitor No Shows",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "MTD site visit",
  //         data: [0, ""],
  //       },
  //       {
  //         header: "CP Firm name / Individual CP Name",
  //         data: [
  //           "sachin patidar",
  //           "Nitesh up",
  //           "kapil",
  //           "Pravesh Devda",
  //           "Test Remi",
  //           "vrashank",
  //           "Test1305",
  //           "Ramesh",
  //           "Ramesh company",
  //           "lifo",
  //           "shareef",
  //           "Rubina ji",
  //           "Vihan company",
  //           "komal",
  //           "nimish company",
  //           "jayesh company",
  //           "babu bhaiya company",
  //           "kaleen bhaiya ki comp",
  //           "Remi Ji 11",
  //           "titu company ",
  //           "amit shah",
  //           "Microsoft "
  //         ],
  //       },
  //       {
  //         header: "CP Visit Count",
  //         data: [0, ""],
  //       }
  //     ],
  //   }
  // ];
  const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100;

  const onPressDownload = async () => {
    const res = await handlePermission(
      "gallery",
      strings.txt_setting_heading_media,
      strings.txt_setting_description_media
    );
    if (res == "setting1") {
      openPermissionSetting(
        strings.txt_setting_heading_media,
        strings.txt_setting_description_media
      );
    } else if (res) {
      try {
        const workbook = XLSX.utils.book_new();

        data.forEach((property: any) => {
          const { property_title, propertyData } = property;
          const worksheetData: any = [];

          propertyData.forEach((item: any) => {
            const { header, data } = item;
            const rowData = [header, ...data];
            worksheetData.push(rowData);
          });

          const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
          XLSX.utils.book_append_sheet(workbook, worksheet, property_title);
        });

        // Convert workbook to a binary string
        const excelFile = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "base64",
        });

        // Create a temporary directory to store the file
        const tempDir = RNFS.DownloadDirectoryPath;
        const filePath = `${tempDir}/SourcingManagerReport.xlsx`;

        // Write the file to the temporary directory
        await RNFS.writeFile(filePath, excelFile, "base64");

        console.log("File saved:", filePath);

        // Add file scanning to make it visible in device's media library (optional)
        await RNFS.scanFile(filePath);
        ErrorMessage({
          msg: strings.succesfullyDownload,
          backgroundColor: GREEN_COLOR,
        });

        console.log("File scanned:", filePath);
      } catch (error) {
        ErrorMessage({
          msg: strings.unSuccesfullyDownload,
          backgroundColor: RED_COLOR,
        });
        console.log("Error generating Excel file:", error);
      }
    }
  };

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
        <View
          style={{
            alignItems: "flex-end",
            marginBottom: normalize(10),
          }}
        >
          <TouchableOpacity
            onPress={() => onPressDownload()}
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
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            {data.map((item: any, index: any) => {
              return (
                <>
                  <View
                    style={{
                      marginBottom: normalize(10),
                    }}
                    key={index}
                  >
                    <View style={{ ...styles.ThemeColorBox, width: "100%" }}>
                      <Text style={{ ...styles.boxText, color: WHITE_COLOR }}>
                        {item.property_title}
                      </Text>
                    </View>
                    {item?.propertyData.map((item: any, index: any) => {
                      return (
                        <View
                          key={index}
                          style={{
                            flexDirection: "row",
                          }}
                        >
                          <View style={styles.ThemeColorBox}>
                            <Text
                              style={{ ...styles.boxText, color: WHITE_COLOR }}
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
