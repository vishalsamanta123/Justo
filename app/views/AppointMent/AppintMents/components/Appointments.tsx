import React from "react";
import { View, Text, Image, FlatList } from 'react-native';
import images from "../../../../assets/images";
import Header from "../../../../components/Header";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";
import AppointmentsItem from './AppointmentsItem'
import FilterModal from "../../../../components/Modals/FilterModal";
import Button from "../../../../components/Button";

const AppointmentListView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.menu}
                headerText={strings.appointmentHeader}
                rightSecondImageScr={images.notification}
                rightFirstImageScr={images.filter}
                RightFirstIconStyle={styles.RightFirstIconStyle}
                handleOnLeftIconPress={props.handleDrawerPress}
                headerStyle={styles.headerStyle}
                handleOnRightFirstIconPress={() => props.setFilterisVisible(true)}
            />
            <View style={{ alignItems: 'flex-end', paddingVertical: 6 }}>
                <Button
                    height={30}
                    width={120}
                    buttonText={strings.scanQrCode}
                    textTransform={null}
                    btnTxtsize={15}
                    handleBtnPress={() => props.handleScanQr()}
                />
            </View>
            <View style={styles.listView}>
                <FlatList
                    data={props.DATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <AppointmentsItem items={item}
                        onPressView={props.onPressView}
                        handleLinkPress={() => props.setChangeLink(true)}
                    />}
                />
            </View>
            <FilterModal
                Visible={props.filterisVisible}
                setIsVisible={props.setFilterisVisible}
            />
        </View>
    )
}
export default AppointmentListView