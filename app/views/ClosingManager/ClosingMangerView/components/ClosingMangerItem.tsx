import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { BLACK_COLOR, BLUE_COLOR, DATE_FORMAT, PRIMARY_THEME_COLOR, PURPLE_COLOR, RED_COLOR, WHITE_COLOR, YELLOW_COLOR } from '../../../../components/utilities/constant';
import images from '../../../../assets/images';
import strings from '../../../../components/utilities/Localization';
import Button from '../../../../components/Button';
import moment from 'moment';
import usePermission from 'app/components/utilities/UserPermissions';

const ClosingManagersItem = (props: any) => {
    const { edit, view } = usePermission({
        edit: 'edit_closing_manager',
        view: 'closing_manager_detail'
    })
    return (
        <View style={styles.IteamView}>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Name :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.user_name}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Total Booking :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.total_booking != '' ||
                        props.items.total_booking != undefined ?
                        props.items.total_booking : '0'}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Total Closing :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.total_closing_booking != "" ||
                        props.items.total_closing_booking != undefined ?
                        props.items.total_closing_booking : '0'}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Mobile No. :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.mobile}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Email :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={[styles.nameTxt, {
                        color: BLACK_COLOR
                    }]}>{props.items.email}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last Login :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={[styles.nameTxt, {
                        color: BLACK_COLOR
                    }]}>{props.items.last_login != "" ||
                        props.items.last_login != undefined ?
                        moment(props.items.last_login).format(DATE_FORMAT) : ''}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {edit &&
                    (<Button
                        width={78}
                        height={30}
                        bgcolor={WHITE_COLOR}
                        bordercolor={PURPLE_COLOR}
                        borderWidth={1}
                        btnTxtcolor={PURPLE_COLOR}
                        buttonText={strings.edit}
                        btnTxtsize={14}
                        border={10}
                        handleBtnPress={() => props.onPressEditCM('edit', props.items)}
                    />)}
                    <Button
                        width={90}
                        height={30}
                        bgcolor={WHITE_COLOR}
                        bordercolor={BLUE_COLOR}
                        borderWidth={1}
                        btnTxtcolor={BLUE_COLOR}
                        buttonText={strings.editTarget}
                        btnTxtsize={14}
                        border={10}
                        handleBtnPress={() => props.onPressEditTarget(props.items)}
                    />
                {view &&
                    (<TouchableOpacity style={styles.Viewbutton}
                        onPress={() => props.onPressView()}
                    >
                        <Image
                            source={images.forwardArrow}
                            style={styles.arrow}
                        />
                    </TouchableOpacity>)}
            </View>
        </View>
    );
};

export default ClosingManagersItem;