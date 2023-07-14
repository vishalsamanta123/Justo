import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import strings from "../../../../components/utilities/Localization";

const EmployeeListItem = (props: any) => {
  return (
    <View style={styles.IteamView}>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>
            {strings.employee + " " + strings.name} :
          </Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props?.items.agent_name}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>{strings.email} :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>
            {props.items.email === "" || props.items.email === undefined
              ? strings.notfount
              : props.items.email}
          </Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>{strings.mobileNo} :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>
            {props.items.primary_mobile === "" ||
            props.items.primary_mobile === undefined
              ? strings.notfount
              : props.items.primary_mobile}
          </Text>
        </View>
      </View>

      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>{strings.gender}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>
            {props.items.gender === "" ||
            props.items.gender === undefined ||
            props.items.gender === null
              ? ""
              : props.items.gender === 1
              ? strings.male
              : props.items.gender === 2
              ? strings.female
              : strings.notfount}
          </Text>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}>
        {view &&
          (<TouchableOpacity
            style={styles.Viewbutton}
            onPress={() => props.onPressView(props.items, "view")}
          >
            <Image source={images.forwardArrow} style={styles.arrow} />
          </TouchableOpacity>)}
      </View> */}
    </View>
  );
};

export default EmployeeListItem;