import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from "./styles";
import TopScreensViewer from './TopScreensViewer'
import Header from "../../../../components/Header";
import images from "../../../../assets/images";
import strings from "../../../../components/utilities/Localization";
import { BLACK_COLOR, PRIMARY_THEME_COLOR } from "../../../../components/utilities/constant";
import InputField from "../../../../components/InputField";
import { RadioButton } from "react-native-paper";
import Button from "../../../../components/Button";
import { normalize, normalizeSpacing } from "../../../../components/scaleFontSize";

const VisitorUpdateView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                headerText={strings.visitor + " " + strings.update}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.leftImageIconStyle}
                leftImageIconStyle={styles.leftImageIconStyle}
                handleOnLeftIconPress={() => props.setScreenType(1)}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.noMoveVw}>
                <TopScreensViewer type={props.screenType} />
            </View>
            <ScrollView contentContainerStyle={styles.wrap}>
                <View style={styles.typeVw}>
                    <Text style={styles.typeTxt}>Company Detail</Text>
                    <View style={styles.typeBorders} />
                </View>
                <View style={styles.selectsView}>
                    <Text style={styles.selectsTxt}>{"Occupation"}</Text>
                </View>
                <View style={styles.straightVw}>
                    <View style={[styles.radioView, { marginHorizontal: 0 }]}>
                        <TouchableOpacity onPress={() => props.setUpdateForm({
                            ...props.updateForm,
                            occupation: 'salaried'
                        })}
                            style={styles.checkBoxVw}>
                            <Image
                                style={styles.checksVw}
                                source={props.updateForm.occupation === "salaried"
                                    ? images.check
                                    : null
                                }
                            />
                        </TouchableOpacity>
                        <Text style={styles.checkTxt}>{'Salaried'}</Text>
                    </View>
                    <View style={[styles.radioView, { marginHorizontal: 0 }]}>
                        <TouchableOpacity onPress={() => props.setUpdateForm({
                            ...props.updateForm,
                            occupation: 'selfEmployee'
                        })}
                            style={styles.checkBoxVw}>
                            <Image
                                style={styles.checksVw}
                                source={props.updateForm.occupation === "selfEmployee"
                                    ? images.check
                                    : null
                                }
                            />
                        </TouchableOpacity>
                        <Text style={styles.checkTxt}>{'Self Employed'}</Text>
                    </View>
                    <View style={[styles.radioView, { marginHorizontal: 0 }]}>
                        <TouchableOpacity onPress={() => props.setUpdateForm({
                            ...props.updateForm,
                            occupation: 'professional'
                        })}
                            style={styles.checkBoxVw}>
                            <Image
                                style={styles.checksVw}
                                source={props.updateForm.occupation === "professional"
                                    ? images.check
                                    : null
                                }
                            />
                        </TouchableOpacity>
                        <Text style={styles.checkTxt}>{'Professional'}</Text>
                    </View>
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Configuration"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Configuration"}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <InputField
                        placeholderText={"Expected Possession Date"}
                        handleInputBtnPress={() => { }}
                        onChangeText={() => { }}
                        headingText={"Expected Possession Date"}
                    />
                </View>
            </ScrollView>
            <View style={styles.noMoveVw}>
                <Button
                    handleBtnPress={(type: any) => props.onPressNext(null)}
                    rightImage={images.forwardArrow}
                    buttonText={strings.next}
                    textTransform={"uppercase"}
                />
            </View>
        </View>
    )
}
export default VisitorUpdateView