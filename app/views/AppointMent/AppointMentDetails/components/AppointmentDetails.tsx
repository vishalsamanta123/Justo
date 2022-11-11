import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../../../assets/images';
import Header from '../../../../components/Header';
import { PRIMARY_THEME_COLOR, BG_MAIN_COLOUR, WHITE_COLOR } from '../../../../components/utilities/constant';
import strings from '../../../../components/utilities/Localization';
import styles from './styles';
import AppointMentDetailsItem from './AppointMentDetailsItem'
import Button from '../../../../components/Button';
import ConfirmModal from '../../../../components/Modals/ConfirmModal';

const AppointmentDetailsView = (props: any) => {
    console.log('props:AppointmentDetailsView ', props);
    const DATA: any = {
        propertyName: props?.data?.items?.visitorName,
        customerName: props?.data?.items?.assignTo,
        location: props?.data?.items?.location,
        visitor: 'KYK',
        age: props?.data?.items?.age,
        budget: props?.data?.items?.budget,
        status: props?.data?.items?.status,
        createddate: props?.data?.items?.createddate,
        source: props?.data?.items?.source,
        propertyType: "Flat",
        startDate: "11/10/2022",
        EndDate: "11/10/2022",
        lead: "12/11/2022",
        configuration: "1BHK / Min-25 L / Max-75 L",
        area: "800",
        pickup: "yes",
    };
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.visitorAppointmentdetails}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.leftImageIconStyle}
                leftImageIconStyle={styles.leftImageIconStyle}
                handleOnLeftIconPress={props.handleBackPress}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.topItemsVw}>
                <TouchableOpacity>
                    <Image
                        source={images.editIcon}
                        style={styles.topItemsImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={images.editIcon}
                        style={styles.topItemsImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={images.editIcon}
                        style={styles.topItemsImg}
                    />
                </TouchableOpacity>
            </View>
            <AppointMentDetailsItem
                items={DATA}
                handleLinkPress={() => props.setChangeLink(true)}
            />
            <View style={[styles.buttonContainer, { justifyContent: 'center' }]}>
                <Button
                    width={140}
                    height={45}
                    bgcolor={BG_MAIN_COLOUR}
                    borderWidth={0}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.visitor + " " + strings.update}
                    btnTxtsize={14}
                    textTransform={'uppercase'}
                />
                <Button
                    width={140}
                    height={45}
                    bgcolor={WHITE_COLOR}
                    bordercolor={PRIMARY_THEME_COLOR}
                    borderWidth={0.8}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.view + " " + strings.followupHeader}
                    btnTxtsize={14}
                    textTransform={'uppercase'}
                />
            </View>
            <View style={[styles.buttonContainer, { justifyContent: 'center' }]}>
                <Button
                    width={140}
                    height={45}
                    bgcolor={BG_MAIN_COLOUR}
                    borderWidth={0}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.updatestatus}
                    btnTxtsize={14}
                    textTransform={'uppercase'}
                    handleBtnPress={() => props.handleUpdateStatus()}
                />
                <Button
                    width={140}
                    height={45}
                    bgcolor={WHITE_COLOR}
                    bordercolor={PRIMARY_THEME_COLOR}
                    borderWidth={0.8}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.readytoBookHeader}
                    btnTxtsize={14}
                    textTransform={'uppercase'}
                />
            </View>
            <ConfirmModal
                Visible={props.changeLink}
                setIsVisible={props.setChangeLink}
                stringshow={strings.allocate}
                middleTxt={strings.selectSM}
                placeholder={strings.selectNewCloseManager}
                doneBttnTxt={strings.allocate}
            />
        </View>
    )
}
export default AppointmentDetailsView