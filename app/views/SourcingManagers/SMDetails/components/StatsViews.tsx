import React from "react";
import { View, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Button from "../../../../components/Button";
import { normalize } from "../../../../components/scaleFontSize";
import { BLACK_COLOR } from "../../../../components/utilities/constant";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";

const StatsView = (props: any) => {
    return (
        <ScrollView>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>No. of site visit :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.siteVisit}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>No. of Close visit :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Closing Persentage :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.closingper}%</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last Login :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.lastlogin}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last Lead Create  :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.lastvisit}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last site visit :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.lastsitevisit}</Text>
                </View>
            </View>
            <View style={styles.Txtview}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Last close visit :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.lastclosevisit}</Text>
                </View>
            </View>
            <Text style={styles.bigTitlesTxt}>Current Target :</Text>
            <View style={[styles.Txtview, { borderTopWidth: 1 }]}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Month :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.month}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderTopWidth: 1 }]}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Start Date :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.startDate}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderTopWidth: 1 }]}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>End Date :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.endDate}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderTopWidth: 1 }]}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Visit target :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.visitTarget}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderTopWidth: 1 }]}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Site visit target :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.siteVisitTarget}</Text>
                </View>
            </View>
            <View style={[styles.Txtview, { borderTopWidth: 1 }]}>
                <View style={styles.projectContainer}>
                    <Text style={styles.projectTxt}>Close target :</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{props.items.closeTarget}</Text>
                </View>
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
export default StatsView