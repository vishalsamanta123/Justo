import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles'
import { DATE_TIME_FORMAT, WHITE_COLOR } from '../../../../components/utilities/constant'
import moment from 'moment'

const AllFollowUpItem = (props: any) => {
    console.log("🚀 ~ file: AllFollowUpItem.tsx:18 ~ props.items:", props.items)

    return (
        <ScrollView>
            <View style={{marginBottom: 20,borderBottomWidth:8,borderBottomColor:WHITE_COLOR}}>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Follow-Up By </Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.creator_name}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Status </Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.followup_status}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Date </Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{moment(props.items.followup_date).format(DATE_TIME_FORMAT)}</Text>
                    </View>
                </View>
                <View style={styles.Txtviewlast}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Description </Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.remark}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AllFollowUpItem