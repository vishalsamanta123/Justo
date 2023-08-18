import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import styles from "../../../../components/Modals/styles";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import DropdownInput from "../../../../components/DropDown";
import InputCalender from "app/components/InputCalender";
import moment from "moment";
import {
  DATE_FORMAT,
  Isios,
  ROLE_IDS,
} from "app/components/utilities/constant";
import { normalizeSpacing } from "app/components/scaleFontSize";
import { useDispatch, useSelector } from "react-redux";
import { CpType, SearchByTeam } from "app/components/utilities/DemoData";
import { getUsersListForSiteHead } from "app/Redux/Actions/UserManagerActions";
const FilterModal = (props: any) => {
  const today = new Date();
  const yesterday = new Date(today);
  const { userData = {} } = useSelector((state: any) => state.userData);
  const [usersList, setUsersList] = useState<any>([]);
  yesterday.setDate(today.getDate() - 1);
  const data = [
    { label: strings.active, value: 2 },
    { label: strings.inActive, value: 1 },
  ];
  const roleId = userData?.data?.role_id || "";

  const dispatch: any = useDispatch();
  const { response = {}, list = "" } =
    useSelector((state: any) => state.UserManager) || {};

  useEffect(() => {
    dispatch(getUsersListForSiteHead({}));
  }, []);
  useEffect(() => {
    let arr: any
    if (response?.status === 200) {
      arr = response?.data?.filter(
        (el: any) =>
          el.role_id === ROLE_IDS.sourcingmanager_id ||
          el.role_id === ROLE_IDS.closingmanager_id
      );
      setUsersList(arr);
    } else {
      setUsersList([]);
    }
  }, [response]);
  const handleOnChangeByTeam = (value: any) => {
    console.log("🚀 ~ file: ReportFilterModal.tsx:49 ~ value:", value);
    let arr = [];
    if (value === 1) {
      arr = response?.data?.filter(
        (el: any) =>
          el.role_id === ROLE_IDS.sourcingmanager_id ||
          el.role_id === ROLE_IDS.sourcingtl_id
      );
    } else if (value === 2) {
      arr = response?.data?.filter(
        (el: any) =>
          el.role_id === ROLE_IDS.closingmanager_id ||
          el.role_id === ROLE_IDS.closingtl_id
      );
    }
    setUsersList(arr);
  };
  //   const handleFilter = () => {
  //     props.setIsVisible(false);
  //   };
  return (
    <Modal isVisible={props.Visible}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        automaticallyAdjustKeyboardInsets={Isios ? true : false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.topTxt}>{strings.filterData}</Text>
            <View>
              <TouchableOpacity onPress={() => props.setIsVisible(false)}>
                <Image source={images.close} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.borderView} />
          <View style={{ marginHorizontal: 10 }}>
            <View style={styles.inputWrap}>
              <InputCalender
                mode={"date"}
                leftIcon={images.event}
                placeholderText={strings.startDate}
                headingText={strings.startDate}
                editable={false}
                maximumDate={yesterday}
                dateData={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    startdate: moment(data).format(DATE_FORMAT),
                  });
                }}
                setDateshow={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    startdate: moment(data).format(DATE_FORMAT),
                  });
                }}
                value={props?.filterData?.startdate}
              />
            </View>
            <View style={styles.inputWrap}>
              <InputCalender
                mode={"date"}
                leftIcon={images.event}
                placeholderText={strings.endDate}
                headingText={strings.endDate}
                editable={false}
                maximumDate={new Date()}
                dateData={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    enddate: moment(data).format(DATE_FORMAT),
                  });
                }}
                setDateshow={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    enddate: moment(data).format(DATE_FORMAT),
                  });
                }}
                value={props?.filterData?.enddate}
              />
            </View>
            {roleId === ROLE_IDS.businesshead_id ? (
              <View style={styles.inputWrap}>
                <DropdownInput
                  headingText={"Search by Cluster name"}
                  placeholder={"Search by Cluster name"}
                  data={props.clusterheadListForFilter}
                  inputWidth={"100%"}
                  paddingLeft={Isios ? 6 : 10}
                  maxHeight={300}
                  labelField="user_name"
                  valueField={"user_id"}
                  // onFocus={() => props.handleEmployeeDropdownPress()}
                  value={props?.filterData?.user_id}
                  onChange={(item: any) => {
                    props.setFilterData({
                      ...props.filterData,
                      user_id: item.user_id,
                    });
                  }}
                  newRenderItem={(item: any) => {
                    return (
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item?.user_name}</Text>
                      </View>
                    );
                  }}
                />
              </View>
            ) : null}
            {roleId === ROLE_IDS.sitehead_id ||
            roleId === ROLE_IDS.clusterhead_id ||
            roleId === ROLE_IDS.businesshead_id ? (
              <View style={[styles.inputWrap]}>
                <DropdownInput
                  headingText={"Search by Property"}
                  placeholder={"Search by Property"}
                  data={props?.propertyListForFilter}
                  inputWidth={"100%"}
                  paddingLeft={16}
                  maxHeight={300}
                  labelField="property_title"
                  valueField={"property_id"}
                  value={props?.filterData?.property_id}
                  onChange={(item: any) => {
                    props.setFilterData({
                      ...props?.filterData,
                      property_id: item.property_id,
                      property_title: item.property_title,
                    });
                  }}
                  newRenderItem={(item: any) => {
                    return (
                      <>
                        <View style={styles.item}>
                          <Text style={styles.textItem}>
                            {item.property_title}
                          </Text>
                        </View>
                      </>
                    );
                  }}
                />
              </View>
            ) : null}
            {roleId === ROLE_IDS.sitehead_id ||
            roleId === ROLE_IDS.clusterhead_id ? (
              <View style={styles.inputWrap}>
                <DropdownInput
                  headingText={"Search By Team"}
                  placeholder={"Search By Team"}
                  data={SearchByTeam}
                  inputWidth={"100%"}
                  paddingLeft={Isios ? 6 : 10}
                  maxHeight={300}
                  labelField="label"
                  valueField={"value"}
                  value={props?.filterData?.by_team}
                  onChange={(item: any) => {
                    props.setFilterData({
                      ...props?.filterData,
                      by_team: item.value,
                    });
                    handleOnChangeByTeam(item.value);
                  }}
                  newRenderItem={(item: any) => {
                    return (
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item.label}</Text>
                      </View>
                    );
                  }}
                />
              </View>
            ) : null}
            {roleId === ROLE_IDS.sitehead_id ||
            roleId === ROLE_IDS.clusterhead_id ? (
              <View style={styles.inputWrap}>
                <DropdownInput
                  headingText={"Search by Employee name"}
                  placeholder={"Select Employee name"}
                  data={usersList}
                  inputWidth={"100%"}
                  paddingLeft={Isios ? 6 : 10}
                  maxHeight={300}
                  labelField="user_name"
                  valueField={"user_id"}
                  // onFocus={() => props.handleEmployeeDropdownPress()}
                  value={props?.filterData?.user_id}
                  onChange={(item: any) => {
                    props.setFilterData({
                      ...props.filterData,
                      user_id: item.user_id,
                    });
                  }}
                  newRenderItem={(item: any) => {
                    return (
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item.user_name}</Text>
                      </View>
                    );
                  }}
                />
              </View>
            ) : null}
          </View>
          <View style={{ marginVertical: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Button
                width={135}
                buttonText={strings.reset}
                handleBtnPress={() => {
                  props.onReset();
                  dispatch(getUsersListForSiteHead({}));
                }}
              />
              <Button
                width={135}
                handleBtnPress={() => props.handleFilter()}
                buttonText={strings.apply}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default FilterModal;
