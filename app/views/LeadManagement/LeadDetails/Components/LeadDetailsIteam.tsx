import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import Button from '../../../../components/Button'
import { normalize } from '../../../../components/scaleFontSize'
import strings from '../../../../components/utilities/Localization'

const LeadDetailsIteam = () => {
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
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Property Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>ABC</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last Interacted :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>21/09/2022</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Source :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>ABC</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Status :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Last call status</Text>
                </View>
            </View>
            {/* Property Required */}
            <>
            <View style={styles.headdingView}>
                <Text style={styles.headdingTxt}>{strings.propertyrequired}</Text>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Configuration :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>2 BHK</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Area (in sq.ft) :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>600</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Budget :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>50L</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Nature Of Funding :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Loan</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Purpose :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>End Use</Text>
                </View>
            </View>
            </>
            {/* Customer Details */}
            <>
            <View style={styles.headdingView}>
                <Text style={styles.headdingTxt}>{strings.Customerdetails}</Text>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Visitor Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>ABC</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Location :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Indore</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Age :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>21</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Gender :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Male</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Locality :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Pune</Text>
                </View>
            </View>
            </>
            {/* Company Details */}
            <>
            <View style={styles.headdingView}>
                <Text style={styles.headdingTxt}>{strings.companydetails}</Text>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Nature of Occupation :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Salaried</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Company Name :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>ABC</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Designation :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>Project Manager</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Office Address :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>XYZ</Text>
                </View>
            </View>
            </>
        </ScrollView>
    )
}

export default LeadDetailsIteam