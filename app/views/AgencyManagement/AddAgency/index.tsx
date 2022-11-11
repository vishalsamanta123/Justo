import React, { useState } from 'react';
import PicturePickerModal from '../../../components/Modals/PicturePicker';
import AgentBankInfo from './components/AgencyBankInfo';
import AgentBasicInfoView from './components/AgentBasicInfoView';
import CompanyDetails from './components/CompanyDetails';

const AgentBasicInfo = ({ navigation }: any) => {
  const [formType, setFormType] = useState(0)
  const [agencyData, setAgencyData] = useState({
    image: ''
  })
  const [imagePicker, setImagePicker] = useState(false)
  const onPressNext = (type: any) => {
    if (type > 2) {
      // navigation.navigate('OtpVerificationScreenView')
    } else {
      setFormType(type)
    }
  }
  const onPressBack = () => {
    navigation.goBack()
  }
  return (
    <>
      {formType === 0 ?
        <AgentBasicInfoView
          imagePicker={imagePicker}
          setImagePicker={setImagePicker}
          onPressBack={onPressBack}
          onPressNext={onPressNext}
          agencyData={agencyData}
          setAgencyData={setAgencyData}
        /> :
        <>
          {formType === 1 ?
            <AgentBankInfo
              onPressNext={onPressNext}
            /> :
            <CompanyDetails
              onPressNext={onPressNext} />
          }
        </>
      }
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
