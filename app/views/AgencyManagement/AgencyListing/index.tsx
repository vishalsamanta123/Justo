import React from 'react';
import AgencyView from './components/AgencyView';

const AgencyListing = ({navigation}: any) => {
  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };
  return <AgencyView handleDrawerPress={handleDrawerPress} />;
};

export default AgencyListing;
