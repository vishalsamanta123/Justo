import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import SplashScreenVeiw from './components/SplashScreenVeiw';

const SplashScreen = ({navigation}: any) => {
  const [userData, setUserData] = useState<any>([])

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const data: any = await AsyncStorage.getItem('userData')
      setUserData(JSON.parse(data))
    }
  setTimeout(() => {
    navigation.replace(!userData ? 'LoginScreenView': 'DashboardScreenView');
  }, 3000);
  return <SplashScreenVeiw />;
};

export default SplashScreen;
