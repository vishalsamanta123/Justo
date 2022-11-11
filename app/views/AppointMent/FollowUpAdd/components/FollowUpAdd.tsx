import React from "react";
import { View, Text, Image, FlatList } from 'react-native';
import images from "../../../../assets/images";
import Button from "../../../../components/Button";
import DropdownInput from "../../../../components/DropDown";
import Header from "../../../../components/Header";
import InputField from "../../../../components/InputField";
import { PRIMARY_THEME_COLOR } from "../../../../components/utilities/constant";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";
import FollupListItem from './FollowupListItem'

const FollowUpAddView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerTextStyle={{ textTransform: 'uppercase' }}
                headerText={strings.followupHeader}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.leftImageIconStyle}
                leftImageIconStyle={styles.leftImageIconStyle}
                handleOnLeftIconPress={props.handleBackPress}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.topItemsVw}>
                <DropdownInput
                    placeholder={strings.status}
                    value={props.value}
                    setValue={props.setValue}
                    onChange={(data: any) => {
                        props.setValue(data)
                    }}
                />
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Date & Time"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        rightImgSrc={images.event}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Description"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        multiline={true}
                        inputheight={100}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <Button
                        width={320}
                        btnTxtsize={18}
                        textTransform={'uppercase'}
                        buttonText={strings.update + " " + strings.followupHeader}
                    />
                </View>
            </View>
            <View style={styles.listView}>
                <FlatList
                    data={props.DATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <FollupListItem items={item}
                    // onPressView={props.onPressView}
                    />}
                />
            </View>
        </View>
    )
}
export default FollowUpAddView