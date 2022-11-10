import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { BLACK_COLOR, GREEN_COLOR, PRIMARY_THEME_COLOR, PURPLE_COLOR, RED_COLOR, WHITE_COLOR, YELLOW_COLOR } from '../../../../components/utilities/constant';
import images from '../../../../assets/images';
import strings from '../../../../components/utilities/Localization';
import Button from '../../../../components/Button';

const SourcingManagersItem = (props: any) => {
    return (
        <View style={styles.IteamView}>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Name :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.Projectname}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>No. of Visit :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.visitor}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>No. of Site Visit :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.siteVisit}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>No. of Colse Visit :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
                </View>
            </View>
            <View style={styles.Txtview} >
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Closing Percentage :</Text>
                </View>
                {/* <View><Text>:</Text></View> */}
                <View style={styles.nameContainer}>
                    <Text style={[styles.nameTxt, {
                        color: BLACK_COLOR
                    }]}>{props.items.closingPercentage}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    width={78}
                    height={30}
                    bgcolor={WHITE_COLOR}
                    bordercolor={PURPLE_COLOR}
                    borderWidth={1}
                    btnTxtcolor={PURPLE_COLOR}
                    buttonText={strings.edit}
                    btnTxtsize={14}
                    border={10}
                    handleBtnPress={() => props.onPressEditSM('edit')}
                />
                <Button
                    width={78}
                    height={30}
                    bgcolor={WHITE_COLOR}
                    bordercolor={props.items.status === 'Deactive' ? GREEN_COLOR : RED_COLOR}
                    borderWidth={1}
                    btnTxtcolor={props.items.status === 'Deactive' ? GREEN_COLOR : RED_COLOR}
                    buttonText={props.items.status === 'Deactive' ? strings.active : strings.deactive}
                    btnTxtsize={14}
                    border={10}
                    handleBtnPress={() => props.onPressStatus()}
                />
                <Button
                    width={85}
                    height={30}
                    bgcolor={WHITE_COLOR}
                    bordercolor={PRIMARY_THEME_COLOR}
                    borderWidth={1}
                    btnTxtcolor={PRIMARY_THEME_COLOR}
                    buttonText={strings.allocateCp}
                    btnTxtsize={14}
                    textTransform={null}
                    border={10}
                    handleBtnPress={() => props.onPressStatus()}
                />
                <TouchableOpacity style={styles.Viewbutton}
                    onPress={() => props.onPressView()}>
                    <Image
                        source={images.forwardArrow}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SourcingManagersItem;
