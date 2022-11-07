import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'
import images from '../../../../assets/images'
import strings from '../../../../components/utilities/Localization'

const SmAppointment = (props: any) => {
  return (
    <View style={styles.IteamView}>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Date :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.date}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Appointment Type :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.appointmentType}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Time :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.time}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>Appointment With :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.appointmentWith}</Text>
      </View>
    </View>
    <View style={styles.Txtview}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTxt}>SM Name :</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.smName}</Text>
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
    <View style={[styles.buttonContainer,{justifyContent: 'flex-end'}]}>
      <TouchableOpacity style={styles.Viewbutton} onPress={() => props.onPressView(props.items)}>
        <Image
          source={images.forwardArrow}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default SmAppointment