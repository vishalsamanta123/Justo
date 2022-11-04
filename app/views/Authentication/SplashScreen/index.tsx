import React from 'react';
import SplashScreenVeiw from './components/SplashScreenVeiw';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.navigate('OnboardingScreenView');
  }, 3000);
  return <SplashScreenVeiw />;
};

export default SplashScreen;
