import React from 'react';
import AgentDetailView from './components/AgentDetailView';

const AgentDetail = ({navigation}: any) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
   <AgentDetailView handleBackPress={handleBackPress} />
  )
}
export default AgentDetail;
