import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import strings from '../../../../components/utilities/Localization';
import { BLACK_COLOR, YELLOW_COLOR } from '../../../../components/utilities/constant';
import images from '../../../../assets/images';

const PendingAgencyListing = (props: any) => {
  return (
    <View style={styles.IteamView}>
      <View style={styles.Txtview} >
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Agency Name :</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.items.Projectname}</Text>
        </View>
      </View>
      <View style={styles.Txtview} >
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Location :</Text>
        </View>
        <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.Location}</Text>
        </View>
      </View>
      <View style={styles.Txtview} >
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>RERA No. :</Text>
        </View>
        <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.rerano}</Text>
        </View>
      </View>
      <View style={styles.Txtview} >
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>No. of Visit :</Text>
        </View>
        <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.visitor}</Text>
        </View>
      </View>
      <View style={styles.Txtview}>
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>No. of Site Visit :</Text>
        </View>
        <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.siteVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview} >
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>No. of Colse Visit :</Text>
        </View>
        <View style={styles.nameContainer}>
        <Text style={styles.nameTxt}>{props.items.closeVisit}</Text>
        </View>
      </View>
      <View style={styles.Txtview} >
        <View style={styles.projectContainer}>
          <Text style={styles.projectTxt}>Status :</Text>
        </View>
        <View style={styles.nameContainer}>
        <Text style={[styles.nameTxt,{
          color:  BLACK_COLOR
        }]}>{props.items.status}</Text>
        </View>
      </View>
    
      <View style={styles.buttonContainer}>
         <TouchableOpacity
        onPress={() => null}
         style={[styles.buttonbox, {
          borderColor: BLACK_COLOR
        }]} >
          <Text style={[styles.buttonTxt,{
          color: BLACK_COLOR
          }]}>{ strings.active}</Text>
        </TouchableOpacity>

        {/*<TouchableOpacity
        onPress={() => null}
         style={[styles.buttonbox, {
          borderColor: BLACK_COLOR
        }]} >
          <Text style={[styles.buttonTxt,{
          color: BLACK_COLOR
          }]}>{props.items.status === 'Deactive' ? strings.active :  strings.deactive}</Text>
        </TouchableOpacity> */}


        <TouchableOpacity style={styles.Viewbutton} onPress={props.onPressView} >
        <Image 
            source={images.forwardArrow}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PendingAgencyListing;
