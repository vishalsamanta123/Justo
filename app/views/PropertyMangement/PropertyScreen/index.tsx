import React from 'react';
import PropertyView from './components/PropertyView';

const PropertyScreen = ({navigation}: any) => {
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  return <PropertyView handleDrawerPress={handleDrawerPress} />;
};

export default PropertyScreen;
