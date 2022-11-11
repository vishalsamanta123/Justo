import React, { useState } from 'react';
import PropertyView from './components/PropertyView';

const PropertyScreen = ({ navigation }: any) => {
  const [filterisVisible, setFilterisVisible] = useState(false)

  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  return <PropertyView
    filterisVisible={filterisVisible}
    setFilterisVisible={setFilterisVisible}
    handleDrawerPress={handleDrawerPress}
  />;
};

export default PropertyScreen;
