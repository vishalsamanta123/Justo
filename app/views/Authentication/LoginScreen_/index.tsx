import React, {useState} from 'react';
import {validateEmail} from '../../../components/utilities/constant';
import LoginView from './components/LoginView';

const LoginScreen = ({navigation}: any) => {
  const [validEmail, setIsValidEmail] = useState(false);
  const handleEmailChange = (val: any) => {
    if (val.length <= 0) {
      setIsValidEmail(false);
    } else if (validateEmail.test(val) === false) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };
  const handleLoginPress = () => {
    navigation.navigate('DashboardScreenView');
  };
  return (
    <LoginView
      handleEmailChange={handleEmailChange}
      validEmail={validEmail}
      handleLoginPress={handleLoginPress}
    />
  );
};

export default LoginScreen;
