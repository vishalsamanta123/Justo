import React from 'react';
import {View, Text} from 'react-native';
import strings from '../../../../Localization';
import styles from './styles';

const SplashScreenVeiw = () => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.justoText}>{strings.justo}</Text>
    </View>
  );
};

export default SplashScreenVeiw;
