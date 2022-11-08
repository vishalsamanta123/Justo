import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import images from '../../../../assets/images';
import InputField from '../../../../components/InputField';
import Button from '../../../../components/Button';
import strings from '../../../../components/utilities/Localization';

const LoginView = (props: any) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const handlePasswordBtnPress = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
        <Image style={styles.logoImage} source={images.logoWhiteBG} />
      </View>
      <View style={styles.inputView}>
        <InputField
          placeholderText={'Email Address'}
          rightImgSrc={props.validEmail ? images.check : images.emailIcon}
          isSecureText={false}
          onChangeText={props.handleEmailChange}
        />
        <InputField
          placeholderText={'Password'}
          rightImgSrc={
            isVisiblePassword ? images.showPassword : images.hiddenPassword
          }
          handleInputBtnPress={handlePasswordBtnPress}
          isSecureText={isVisiblePassword}
        />
        <TouchableOpacity style={styles.forgotTouch}>
          <Text style={styles.forgotText}>{strings.forgotPassword}</Text>
        </TouchableOpacity>
        <Button buttonText={strings.logInText} handleBtnPress={props.handleLoginPress} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>
          {strings.byCreating}
        </Text>
        <TouchableOpacity style={styles.spanTouch}>
          <Text style={styles.spanText}> {strings.termsAndCondition} </Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}> {strings.and} </Text>
        <TouchableOpacity style={styles.spanTouch}>
          <Text style={styles.spanText}> {strings.privacyPolicy} </Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}> {strings.ofJusto} </Text>
      </View>
    </View>
  );
};

export default LoginView;
