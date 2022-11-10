import React, { useState } from 'react';
import PicturePickerModal from '../../../components/Modals/PicturePicker';
import AgentBasicInfoView from './components/AgentBasicInfoView';

const AgentBasicInfo = ({ navigation }: any) => {
  const [agencyData, setAgencyData] = useState({
    image: ''
  })
  const [imagePicker, setImagePicker] = useState(false)
  const onPressNext = () => {
    navigation.navigate('AgentBankInfo')
  }
  const onPressBack = () => {
    navigation.goBack()
  }
  return (
    <>
      <AgentBasicInfoView
        imagePicker={imagePicker}
        setImagePicker={setImagePicker}
        onPressBack={onPressBack}
        onPressNext={onPressNext}
        agencyData={agencyData}
        setAgencyData={setAgencyData}
      />
      <PicturePickerModal
        Visible={imagePicker}
        setVisible={setImagePicker}
        imageData={(data: any) => {
          setAgencyData({
            image: data
          })
        }}
      />
    </>

  )
};

export default AgentBasicInfo;
