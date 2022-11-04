import {View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import { PRIMARY_THEME_COLOR } from '../utilities/constant';

const Header = (props: any) => {
  return (
    <>
    <View style={[styles.maincontainer, props.headerStyle]}>
      <TouchableOpacity onPress={props.handleOnLeftIconPress}>
        <Image source={props.leftImageSrc} style={styles.imageStyle} />
      </TouchableOpacity>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
      <TouchableOpacity onPress={props.handleOnRightIconPress}>
        <Image source={props.rightImageScr} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
    </>
  );
};

export default Header;
