import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { BLACK_COLOR } from "app/components/utilities/constant";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import images from "app/assets/images";
import strings from "../utilities/Localization";
import Header from "../Header";
import Button from "../Button";
import Modal from "react-native-modal";
import { getAllProperty } from "app/Redux/Actions/propertyActions";

const AddPropertyModel = (props: any) => {
  const { userData = {} } = useSelector((state: any) => state.userData);

  useEffect(() => {
    //   let ordersData = props?.selectedCp?.map((data: any) => {
    //     return data?._id;
    //   });
    //   props.setSelectedLoginIdCp(ordersData);
  }, [props.selectedCp]);
  return (
    <Modal isVisible={props.isVisible}>
      {/* <ScrollView
        keyboardShouldPersistTaps={"handled"}
        automaticallyAdjustKeyboardInsets={Isios ? true : false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      > */}
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.propMainContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.topTxt}>{strings.alloProperty}</Text>
            <View>
              <TouchableOpacity onPress={() => props.setIsVisible(false)}>
                <Image source={images.close} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderView} />
          <View style={styles.selectedBox}>
            {props?.selectedProperty?.length > 0 ? (
              <>
                {props?.selectedProperty?.map((item: any, index: any) => {
                  return (
                    <View
                      style={[
                        styles.innerBoxVw,
                        { justifyContent: "flex-start" },
                      ]}
                    >
                      <Text style={styles.userNameTxt}>
                        {item.property_title}
                      </Text>
                      <TouchableOpacity
                        onPress={() => props.handleDelete(item, index)}
                      >
                        <Image source={images.close} style={styles.crossVw} />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </>
            ) : (
              <Text style={styles.noSelectedTxt}>
                {strings.noPropertySelected}
              </Text>
            )}
          </View>
          <TextInput
            placeholder={strings.searchByName}
            placeholderTextColor={BLACK_COLOR}
            style={styles.searchInputVw}
            // onFocus={() => props.setAllList(true)}
            onChangeText={(text: any) => props.handleSearch(text)}
          />

          <FlatList
            contentContainerStyle={{}}
            data={props.finalPropertyList}
            // data={response?.data}
            renderItem={({ item, index }: any) => {
              const getSelected =
                props?.selectedProperty?.length === 0
                  ? ""
                  : props?.selectedProperty?.map(
                      ({ property_title }: any) => property_title
                    );
              return (
                <View style={styles.innerBoxVwlist}>
                  <Text style={styles.innerBoxVwlistfont}>
                    {item.property_title}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      !getSelected?.toString()?.includes(item.property_title)
                        ? props.handleSelects(item)
                        : console.log("")
                    }
                    style={styles.checkBoxVw}
                  >
                    <Image
                      style={styles.checksVw}
                      source={
                        getSelected?.toString()?.includes(item.property_title)
                          ? images.check
                          : null
                      }
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
            ListEmptyComponent={() => {
              return (
                <Text style={[styles.noSelectedTxt, { textAlign: "center" }]}>
                  {strings.propertyNotFount}
                </Text>
              );
            }}
          />
          <View style={{ marginVertical: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button
                width={235}
                buttonText={strings.alloProperty}
                handleBtnPress={() => props.handleAllocateProperty()}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      {/* </ScrollView> */}
    </Modal>
  );
};
export default AddPropertyModel;
