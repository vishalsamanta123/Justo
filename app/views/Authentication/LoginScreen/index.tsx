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
  const handlePasswordChange = (val: any) => {
    console.log('val', val);
  };
  const handleLoginPress = () => {
    navigation.navigate('DashboardScreenView');
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
    />
  );
};

export default LoginScreen;
