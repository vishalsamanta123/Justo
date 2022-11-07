import React from 'react';
import AgentBasicInfoView from './components/AgentBasicInfoView';

const AgentBasicInfo = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('AgentBankInfo')
  }
  const onPressBack = () => {
    navigation.goBack()
  }
  return <AgentBasicInfoView onPressBack={onPressBack} onPressNext={onPressNext} />;
};

export default AgentBasicInfo;
