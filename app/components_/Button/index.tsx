import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.btnTouch} onPress={props.handleBtnPress}>
        <Text style={styles.btnText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
