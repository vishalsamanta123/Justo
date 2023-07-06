import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import {
  BLACK_COLOR,
  Isios,
  PRIMARY_THEME_COLOR,
  validateEmail,
} from "app/components/utilities/constant";
import { normalizeSpacing } from "app/components/scaleFontSize";
import images from "app/assets/images";
import InputField from "../InputField";
import strings from "../utilities/Localization";
import styles from "./styles";
import Button from "../Button";
import { RadioButton } from "react-native-paper";
import { RequiredStart } from "../utilities/GlobalFuncations";
import { useDispatch, useSelector } from "react-redux";
import { getAllMaster } from "app/Redux/Actions/MasterActions";
import DropdownInput from "../DropDown";

const InventoryModal = (props: any) => {
  const dispatch: any = useDispatch();
  const { setcofigdata } = props
  const [configuration, setConfiguration] = useState<any>([]);
  
  const handleGetConfigurations = () => {
    dispatch(
      getAllMaster({
        type: 2,
      })
    );
  };

  return (
    <Modal isVisible={props.Visible}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        automaticallyAdjustKeyboardInsets={Isios ? true : false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={[styles.mainContainer, {paddingHorizontal: 10}]}>
          <View style={styles.topContainer}>
            <Text style={styles.topTxt}>Search Inventory</Text>
            <View>
              <TouchableOpacity
                onPress={() => props.handleInventorymodalClose()}
              >
                <Image source={images.close} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderView} />
          <View style={[styles.inputWrap, {marginVertical: 20}]}>
            <DropdownInput
              headingText={strings.configurations}
              placeholder={
                props.formData?.flatType? props.formData?.flatType :
                strings.configurations}
              data={Array.isArray(props.flatTypes) ? props.flatTypes : []}
              inputWidth={"100%"}
              // onFocus={() => handleGetConfigurations()}
              paddingLeft={16}
              maxHeight={300}
              // labelField={"type"}
              // valueField={"type"}
              value={props.formData?.flatType}
              onChange={(item: any) => {

                setcofigdata(item)
             /*  console.log('item: ', item);
                props.setFormData({
                  ...props.formData,
                  flatType: item,
                }); */
              }}
              newRenderItem={(item: any) => {
                return (
                  item.type !== "" && (
                    <>
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item}</Text>
                      </View>
                    </>
                  )
                );
              }}
            />
          </View>
          <View style={[styles.inputWrap, {marginVertical: 20}]}>
            <DropdownInput
              headingText={strings.floor}
              placeholder={
                props.formData?.floor? props.formData?.floor :
                strings.floor}
              data={Array.isArray(props.floors) ? props.floors : []}
              inputWidth={"100%"}
              // onFocus={() => handleGetConfigurations()}
              paddingLeft={16}
              maxHeight={300}
              // labelField={"type"}
              // valueField={"type"}
              value={props.formData?.floor}
              onChange={(item: any) => {
              console.log('item: ', typeof item);
                props.setFormData({
                  ...props.formData,
                  floor: item,
                });
              }}
              newRenderItem={(item: any) => {
                return (
                  item.type !== "" && (
                    <>
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item}</Text>
                      </View>
                    </>
                  )
                );
              }}
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button
                width={235}
                buttonText={'Apply'}
                handleBtnPress={() => props.handleAddfilter()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default InventoryModal;
