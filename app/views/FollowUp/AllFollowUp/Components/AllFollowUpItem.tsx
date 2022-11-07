import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles'

const AllFollowUpItem = (props: any) => {
    return (
        <ScrollView>
            <View style={{marginBottom: 10}}>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Follow-Up By :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.Followupby}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Status :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.Status}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Date :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.Date}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Description :</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props.items.Description}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AllFollowUpItem