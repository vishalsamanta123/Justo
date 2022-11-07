import React from 'react';
import PendingAgencyView from './components/PendingAgencyView';

const PendingAgencyListing = ({navigation}: any) => {
  
  const handleBackPress = () => {
    navigation.goBack();
  };
  return <PendingAgencyView handleBackPress={handleBackPress} />;
};

export default PendingAgencyListing;
