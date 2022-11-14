import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { BLACK_COLOR, Isios } from '../utilities/constant';
import images from '../../assets/images';
import { normalize, normalizeHeight } from '../scaleFontSize';

const InputField = (props: any) => {
  const {
    inputWidth = '90%',
    editable = true,
    multiline = false,
    inputheight = 50,
    headTxtSize = Isios ? 14 : 16
  } = props
  const onSubmit = (e: any) => {
    const { text } = e;
  };
  return (
    <View>
      <View style={styles.inputHeadinView}>
        <Text style={[styles.inputHeadingText, {
          fontSize: normalize(headTxtSize),
        }]}>{props.headingText}</Text>
      </View>
      <View style={styles.mainContainer}>
        <TextInput
          style={[styles.input, { textAlignVertical: 'top', width: inputWidth, height: normalizeHeight(inputheight) }]}
          onChangeText={(val) => props.onChangeText(val)}
          onSubmitEditing={onSubmit}
          placeholder={props.placeholderText}
          placeholderTextColor={BLACK_COLOR}
          secureTextEntry={props.isSecureText}
          autoCapitalize={'none'}
          editable={editable}
          multiline={multiline}
        />
        <TouchableOpacity
          onPress={props.handleInputBtnPress}
          disabled={!props.handleInputBtnPress}>
          <Image style={styles.rightImage} source={props.rightImgSrc} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputField;
