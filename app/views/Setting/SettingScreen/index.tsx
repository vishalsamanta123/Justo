import React from 'react'
import SettingView from './components/SettingView';

const SettingScreen = ({navigation,route}: any) => {
    const handleDrawerPress = () => {
        navigation.toggleDrawer()
      };
      const handleNavigation = (navigateTo: any, data: any) => {
        console.log('data', data)
        console.log('TYPE === >>>> ', navigateTo);
        navigation.navigate(navigateTo, data)
    }
  return (
    <SettingView handleDrawerPress={handleDrawerPress} handleNavigation={handleNavigation} />
  );
};

export default SettingScreen;