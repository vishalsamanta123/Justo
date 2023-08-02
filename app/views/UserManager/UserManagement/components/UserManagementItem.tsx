import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { BLACK_COLOR, BLUE_COLOR, DATE_FORMAT, DATE_TIME_FORMAT, PRIMARY_THEME_COLOR, PURPLE_COLOR, RED_COLOR, ROLE_IDS, WHITE_COLOR, YELLOW_COLOR } from '../../../../components/utilities/constant';
import images from '../../../../assets/images';
import strings from '../../../../components/utilities/Localization';
import Button from '../../../../components/Button';
import moment from 'moment';
import usePermission from 'app/components/utilities/UserPermissions';

const UserManagementItem = (props: any) => {
    const { edit, view } = usePermission({
        edit: 'edit_user',
        view: 'user_detail'
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
                    <Text style={styles.projectTxt}>Designation :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.role_title != '' ||
                        props.items.role_title != undefined ?
                        props.items.role_title : strings.notfount}</Text>
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
                        moment(props.items.last_login).format(DATE_TIME_FORMAT) : ''}</Text>
                </View>
            </View>
            <View style={[styles.buttonContainer, {justifyContent: 'flex-end'}]}>
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
                {/* {props?.items?.role_id === ROLE_IDS.sitehead_id ||
                    props?.items?.role_id === ROLE_IDS.receptionist_id || 
                    props?.items?.role_id === ROLE_IDS.callcenter_id ||
                    props?.items?.role_id === ROLE_IDS.clusterhead_id
                    ? null
                    : <Button
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
                    />} */}
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

export default UserManagementItem;
