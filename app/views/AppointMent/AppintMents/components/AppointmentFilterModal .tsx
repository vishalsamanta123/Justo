import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import styles from "../../../../components/Modals/styles";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import DropdownInput from "../../../../components/DropDown";
import InputCalender from "app/components/InputCalender";
import moment from "moment";
import { DATE_FORMAT, Isios } from "app/components/utilities/constant";
import { normalize, normalizeSpacing } from "app/components/scaleFontSize";
import { Dropdown } from "react-native-element-dropdown";

const AppointmentFilterModal = (props: any) => {
  const appointmentWith = [
    { type_name: strings.STSSiteLeadVisit, value: 1 },
    { type_name: strings.STSClientVisit, value: 2 }]
  const statusData = [
    { type_name: 'Upcoming', value: 1 },
    { type_name: 'Revisit', value: 2 },
    { type_name: 'Complete', value: 3 },
    { type_name: 'Visit Cancelled', value: 4 },
    { type_name: 'Reschedule', value: 5 },
    { type_name: 'Not Fit for Sale', value: 6 },
  ]
  const handleApply = () => {
    props.setIsVisible(false)
    props?.getAppointmentList(0, props.filterData)
    props.setAppointmentList([])
  }
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.type_name}</Text>
      </View>
    );
  };
  return (
    <Modal isVisible={props.Visible}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        automaticallyAdjustKeyboardInsets={Isios ? true : false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.topTxt}>{strings.searchappointment}</Text>
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
                editable={false}
                dateData={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    start_date: moment(data).format(DATE_FORMAT),
                  });
                }}
                setDateshow={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    start_date: moment(data).format(DATE_FORMAT),
                  });
                }}
                value={props?.filterData?.start_date}
              />
            </View>
            <View style={styles.inputWrap}>
              <InputCalender
                mode={"date"}
                leftIcon={images.event}
                placeholderText={strings.endDate}
                editable={false}
                dateData={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    end_date: moment(data).format(DATE_FORMAT),
                  });
                }}
                setDateshow={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    end_date: moment(data).format(DATE_FORMAT),
                  });
                }}
                value={props?.filterData?.end_date}
              />
            </View>
            <View style={[styles.inputWrap, { top: normalizeSpacing(10) }]}>
              <InputField
                headingText={strings.searchBy + " " + strings.name}
                handleInputBtnPress={() => { }}
                valueshow={props.filterData?.customer_name}
                onChangeText={(data: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    customer_name: data,
                  });
                }}
              />
            </View>
            <View style={[styles.inputWrap, { top: normalizeSpacing(15) }]}>
              <DropdownInput
                headingText={strings.searchBy + " " + strings.status}
                placeholder={strings.selectStatus}
                data={
                  props.type === 'appWith' ?
                    [
                      // 1= Pending, 2 = Confirm, 3= Compleat
                      { type_name: strings.STSPending, value: 1 },
                      { type_name: strings.STSConfirm, value: 2 },
                      { type_name: strings.STSComplete, value: 3 },
                      { type_name: strings.STSAppointMentCancl, value: 4 },
                    ]
                    :
                    statusData}
                inputWidth={'100%'}
                paddingLeft={16}
                maxHeight={300}
                labelField="type_name"
                valueField="value"
                value={props?.filterData?.status}
                onChange={(item: any) => {
                  props.setFilterData({
                    ...props.filterData,
                    status: item.value,
                  });
                }}
                newRenderItem={(item: any) => {
                  return (
                    <>
                      <View style={styles.item}>
                        <Text style={styles.textItem}>{item.type_name}</Text>
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center', marginVertical: 30
          }}>
            <Button
              handleBtnPress={() => {
                props.setIsVisible(false)
                props.onPressApply('reset')
                props.setFilterData({
                  start_date: '',
                  end_date: '',
                  customer_name: '',
                })
              }}
              buttonText={strings.reset}
              width={150}
            />
            <Button
              handleBtnPress={() => {
                if (props.type === 'appWith') {
                  props.onPressApply()
                  props.setIsVisible(false)
                } else {
                  handleApply()
                }
              }}
              buttonText={strings.apply}
              width={150}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AppointmentFilterModal;
