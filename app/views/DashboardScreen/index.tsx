import React from 'react';
import DashboardView from './components/DashboardView';

const DashboardScreen = ({navigation}: any) => {
  const handleDrawerPress = () => {
    navigation.toggleDrawer()
  };
  return <DashboardView handleDrawerPress={handleDrawerPress} />;
};

export default DashboardScreen;
