import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./styles";
import { BLACK_COLOR, GRAY_COLOR } from "../../../../components/utilities/constant";
import { normalizeSpacing } from "../../../../components/scaleFontSize";
import { ScrollView } from "react-native-gesture-handler";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import Button from "../../../../components/Button";

const SMInfoView = (props: any) => {
    return (
        <ScrollView>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Agent Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.AgentName}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Aadhar no. :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.aadharno}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>GST :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.gst}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>RERA Reg. :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.rerano}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Pan Card no. :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.pancardno}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Location :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.workinglocation}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Email :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.Email}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Mobile no :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.Mobileno}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Whatsapp no. :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.whatsappno}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, styles.allocatsVw]}>
                <Text style={[styles.projectTxt, { color: BLACK_COLOR }]}>Allocated CP :</Text>
            </View>
            <View style={styles.allocatsBox}>
                {props?.items?.allocatedCp?.length > 0 ?
                    <>
                        {props?.items?.allocatedCp?.map((item: any, index: any) => {
                            return (
                                <View style={styles.innerBoxVw}>
                                    <Text>{item.cpName}</Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={images.close}
                                            style={styles.crossVw}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </> : <Text style={styles.noSelectedTxt}>{strings.noCpSelected}</Text>
                }
            </View>
            <View style={{ marginVertical: 12, alignItems: 'flex-end', }}>
                <Button
                    width={150}
                    height={40}
                    btnTxtsize={16}
                    buttonText={strings.cpAllocation}
                    handleBtnPress={() => props.handleCpAllocation()}
                />
            </View>
        </ScrollView>
    )
}
export default SMInfoView