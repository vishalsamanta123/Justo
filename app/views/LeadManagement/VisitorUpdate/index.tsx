import React, { useState } from "react";
import VisitorUpdateFirstView from './components/VisitorUpdateFirst'
import VisitorUpdateSecondView from "./components/VisitorUpdateSecond";
import VisitorUpdateThirdView from "./components/VisitorUpdateThird";

const VisitorUpdateScreen = ({ navigation }: any) => {
    const [screenType, setScreenType] = useState(0)
    const [updateForm, setUpdateForm] = React.useState({
        gender: 'male',
        funding_nature: 'loan',
        puropse: 'endUser',
        occupation: 'salaried'
    });
    const handleBackPress = () => {
        navigation.goBack();
    };
    const onPressNext = (type: any) => {
        if (type != null) {
            setScreenType(type)
        }
    }
    return (
        <>
            {screenType === 0 ?
                <VisitorUpdateFirstView
                    handleBackPress={handleBackPress}
                    screenType={screenType}
                    updateForm={updateForm}
                    setUpdateForm={setUpdateForm}
                    onPressNext={onPressNext}
                /> :
                <>
                    {screenType === 1 ?
                        <VisitorUpdateSecondView
                            handleBackPress={handleBackPress}
                            screenType={screenType}
                            setScreenType={setScreenType}
                            updateForm={updateForm}
                            setUpdateForm={setUpdateForm}
                            onPressNext={onPressNext}
                        /> :
                        <VisitorUpdateThirdView
                            handleBackPress={handleBackPress}
                            screenType={screenType}
                            setScreenType={setScreenType}
                            updateForm={updateForm}
                            setUpdateForm={setUpdateForm}
                            onPressNext={onPressNext}
                        />
                    }
                </>
            }
        </>
    )
}
export default VisitorUpdateScreen