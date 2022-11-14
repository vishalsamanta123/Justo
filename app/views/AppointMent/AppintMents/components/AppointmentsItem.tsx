import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import strings from '../../../../components/utilities/Localization';
import { BLACK_COLOR, CALL_COLOR, GRAY_COLOR, GRAY_LIGHT_COLOR, GREEN_COLOR, PRIMARY_THEME_COLOR, BG_MAIN_COLOUR, WHITE_COLOR, WHITE_COLOR_LIGHT, YELLOW_COLOR } from '../../../../components/utilities/constant';
import images from '../../../../assets/images';
import Button from '../../../../components/Button';

const AppointmentItem = (props: any) => {
    return (
        <View style={styles.IteamView}>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Visitor Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.visitorName}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Date & Time :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.siteVisitDate}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Lead No. :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.leadNo}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Pickup :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.pickup}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Visit Score :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.visitScore}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Status :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={[styles.nameTxt, {
                        color: props.items.status == 'confirmatin Pending' ? BLACK_COLOR :
                            props.items.status == 'Subscribe' ? YELLOW_COLOR : 'red'
                    }]}>{props.items.status}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderBottomWidth: 0 }]} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Assign to :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.assignTo}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    width={80}
                    height={30}
                    bgcolor={WHITE_COLOR}
                    bordercolor={CALL_COLOR}
                    borderWidth={1}
                    btnTxtcolor={CALL_COLOR}
                    buttonText={strings.call}
                    btnTxtsize={14}
                    border={10}
                />
                <TouchableOpacity style={styles.Viewbutton}
                    onPress={() => props.onPressView(props.items)}
                >
                    <Image
                        source={images.forwardArrow}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.buttonContainer, { justifyContent: 'center' }]}>
                <Button
                    width={130}
                    height={45}
                    bgcolor={BG_MAIN_COLOUR}
                    borderWidth={0}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.allocate}
                    btnTxtsize={14}
                    textTransform={'uppercase'}
                    handleLinkPress={() => props.handleLinkPress}

                />
                <Button
                    width={130}
                    height={45}
                    bgcolor={WHITE_COLOR}
                    bordercolor={PRIMARY_THEME_COLOR}
                    borderWidth={0.8}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.dropLocation}
                    btnTxtsize={14}
                    textTransform={'uppercase'}
                />
            </View>
        </View>
    );
};

export default AppointmentItem;
