import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import { PRIMARY_THEME_COLOR_DARK } from '../utilities/constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = (props: any) => {
  const insets = useSafeAreaInsets();
  return (
    <>
     <View
        style={{
          backgroundColor: PRIMARY_THEME_COLOR_DARK,
          height: insets.top,
        }}
      />
      <StatusBar barStyle={props.barStyle} backgroundColor={props.statusBarColor} />
      <View style={[styles.maincontainer, props.headerStyle]}>
        <TouchableOpacity onPress={props.handleOnLeftIconPress}>
          <Image 
            source={props.leftImageSrc} 
            style={[styles.imageStyle, props.leftImageIconStyle]}
          />
        </TouchableOpacity>
        <View style={styles.headerTextView}>
          <Text style={[styles.headerText, props.headerTextStyle]}>
            {props.headerText}
          </Text>
        </View>
        <View style={styles.rightIconsWrap}>
          <TouchableOpacity onPress={props.handleOnRightFirstIconPress}>
            <Image
              source={props.rightFirstImageScr}
              style={[styles.imageStyle, props.RightFirstIconStyle]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.handleOnRightSecondIconPress}>
            <Image
              source={props.rightSecondImageScr}
              style={[styles.imageStyle, props.RightSecondIconStyle]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;
