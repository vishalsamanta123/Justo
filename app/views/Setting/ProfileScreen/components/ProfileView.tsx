import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../../../assets/images'
import { PRIMARY_THEME_COLOR } from '../../../../components/utilities/constant'
import strings from '../../../../components/utilities/Localization'
import styles from './styles'
import Header from '../../../../components/Header'

const ProfileView = (props: any) => {
  const {data, HandleBackPress, handleEditProfilePress} = props;
  console.log('data', data)
  return (
    <View style={styles.mainContainer}>
      <Header
        leftImageSrc={images.backArrow}
        headerText={data.heading}
        headerStyle={styles.headerStyle}
        RightFirstIconStyle={styles.leftImageIconStyle}
        leftImageIconStyle={styles.leftImageIconStyle}
        handleOnLeftIconPress={HandleBackPress}
        barStyle={'light-content'}
        statusBarColor={PRIMARY_THEME_COLOR}
      />
      <View style={styles.ProfileView}>
        <View style={styles.roleView}>
          <Text style={styles.CPtext}>{strings.userRole} : {strings.channelPartner}</Text>
        </View>
        <View style={styles.userCardView}>
          <View style={styles.usernameWrap}>
            <Image style={styles.userImage} source={images.dummyUser}  />
            <Text style={styles.userNameText}>ROBERT DOWNEY</Text>
          </View>
          <TouchableOpacity style={styles.editImageWrap} onPress={handleEditProfilePress}>
            <Image style={styles.editIconImage} source={images.editIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.InformationView}>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Name</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>ANIL SINGH</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Aadhar No.</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>12345*****</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Pancard No.</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>ASD***</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Gender</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>MALE</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Date of Birth</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>21/09/2022</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Mobile No.</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>123456789</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>What'sapp No</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>123456789</Text>
            </View>
          </View>
          <View style={styles.fieldView}>
            <View style={styles.keyView}>
              <Text style={styles.keyText}>Email</Text>
            </View>
            <Text style={styles.colon}>:</Text>
            <View style={styles.valueView}>
              <Text style={styles.valueText}>abc@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProfileView