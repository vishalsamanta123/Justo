import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './Styles'
import strings from '../../../../components/utilities/Localization'
import images from '../../../../assets/images'

const MyAppointment = (props: any) => {
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
          <Text style={styles.nameTxt}>{props.items.appointmenttype}</Text>
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
          <Text style={styles.nameTxt}>{props.items.appwith}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        { props.items.Status !== 'Confirmed' && props.items.Status !== 'Visitor not interested' ?
        (<TouchableOpacity
          style={styles.button}
        // onPress={() => props.onPressEdit()}
        >
          <Text style={styles.buttonTxt}>Edit</Text>
        </TouchableOpacity>)
        : null
        }
        <TouchableOpacity
          style={styles.button}
        // onPress={() => props.onPressAllFollowUp()}
        >
          <Text style={styles.buttonTxt}>{strings.call}</Text>
        </TouchableOpacity>
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

export default MyAppointment