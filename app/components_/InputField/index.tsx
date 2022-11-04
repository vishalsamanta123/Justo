import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import { BLACK_COLOR } from '../utilities/constant';

const InputField = (props: any) => {
  const onSubmit = (e: any) => {
    const {text} = e;
    console.log('e on submit', text);
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={val => props.onChangeText(val)}
        onSubmitEditing={onSubmit}
        placeholder={props.placeholderText}
        placeholderTextColor={BLACK_COLOR}
        secureTextEntry={props.isSecureText}
        autoCapitalize={'none'}
      />
      <TouchableOpacity
        onPress={props.handleInputBtnPress}
        disabled={!props.handleInputBtnPress}>
        <Image style={styles.rightImage} source={props.rightImgSrc} />
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
