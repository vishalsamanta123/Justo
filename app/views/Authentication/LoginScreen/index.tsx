import React, {useState} from 'react';
import {validateEmail} from '../../../components/utilities/constant';
import LoginView from './components/LoginView';
import { users } from '../../../components/utilities/DemoData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";

const LoginScreen = ({navigation}: any) => {
  const [validEmail, setIsValidEmail] = useState(false);
  const toast: any = useToast();
  console.log('validEmail: ', validEmail);
  const [loginData, setLoginData] = useState({
    email: '',
    pass: '',
  })
  console.log('loginData: ', loginData);
  const handleEmailChange = (val: any) => {

    if (val.length <= 0) {
      setIsValidEmail(false);
    } else if (validateEmail.test(val) === false) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };
  const handlePasswordChange = (val: any) => {
    console.log('val', val);
  };
  const handleLoginPress = async () => {
    if (!loginData.email || !loginData.pass) {
      toast.show("Email and Password required.", {
        type: "danger",
        placement: "bottom",
        offset: 100,
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    // navigation.navigate('DashboardScreenView');
    const finalData = users.find((el: any) => {
      return el.email == loginData.email && el.password == loginData.pass
    })
    console.log('finalData: ', finalData);
    if(finalData){
      await AsyncStorage.setItem('userData', JSON.stringify(finalData))
      navigation.replace('DashboardScreenView');
    }else{
      toast.show("Email or Password are not valid.", {
        type: "danger",
        placement: "bottom",
        offset: 100,
        duration: 4000,
        animationType: "slide-in",
      });
    }
  };
  const handleSingupPress = () => {
    navigation.navigate('RegistrationScreenView');
  };
  return (
    <LoginView
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      validEmail={validEmail}
      handleLoginPress={handleLoginPress}
      handleSingupPress={handleSingupPress}
      setLoginData={setLoginData}
      loginData={loginData}
    />
  );
};

export default LoginScreen;
