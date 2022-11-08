import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import images from '../../../../assets/images';
import { WHITE_COLOR } from '../../../../components/utilities/constant';
import styles from './styles';

const SplashScreenVeiw = () => {
  return (
    <View style={styles.splashContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={WHITE_COLOR} />
      <Image
      source={images.logoWhiteBG}
      style={styles.justoImage}
       />
    </View>
  );
};

export default SplashScreenVeiw;
