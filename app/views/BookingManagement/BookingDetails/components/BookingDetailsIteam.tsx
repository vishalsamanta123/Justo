import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Button from '../../../../components/Button'
import { normalize } from '../../../../components/scaleFontSize'
import strings from '../../../../components/utilities/Localization'

const BookingDetailsItem = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topDetailsView}>
                <View style={styles.topTxtView}>
                    <Text style={styles.topTxt}>Visitor Score </Text>
                    <Text style={styles.topTxt}>250</Text>
                </View>
                <View style={styles.topBtnView}>
                    <TouchableOpacity
                        style={styles.button} >
                        <Text style={styles.buttonTxt}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button} >
                        <Text style={styles.buttonTxt}>SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button} >
                        <Text style={[styles.buttonTxt, { fontSize: normalize(10) }]}>WhatsApp</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Configuration</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>2 BHK</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Area (in sq.ft)</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>600</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Budget</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>50L</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Current Status</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>Ready to Book</Text>
                    </View>
                </View>
            </>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Property Name</Text>
                </View>
                <View><Text>:</Text></View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>ABC</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Visitor Name</Text>
                </View>
                <View><Text>:</Text></View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Rajeev</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Source</Text>
                </View>
                <View><Text>:</Text></View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>ABC</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Closing Date</Text>
                </View>
                <View><Text>:</Text></View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>17/05/2021 11:00 AM</Text>
                </View>
            </View>
            <>
                <View style={styles.headdingView}>
                    <Text style={styles.headdingTxt}>{strings.bookingDetails}</Text>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Booking Amount</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>1000000</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Cheque No.</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>100000</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Cheque Status</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>1000000</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Payment Type</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>100000</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Configuration Qty</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>2 BHK/1</Text>
                    </View>
                </View>
            </>
        </ScrollView>
    )
}

export default BookingDetailsItem