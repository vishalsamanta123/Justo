import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import images from '../../../../assets/images';
import Button from '../../../../components/Button';
import DropdownInput from '../../../../components/DropDown';
import Header from '../../../../components/Header';
import { normalize, normalizeSpacing } from '../../../../components/scaleFontSize';
import { BG_MAIN_COLOUR, GRAY_COLOR, PRIMARY_THEME_COLOR } from '../../../../components/utilities/constant';
import strings from '../../../../components/utilities/Localization';
import styles from './styles';

const AppointMentDetailsItem = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Property Name</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.propertyName}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Customer Name</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.customerName}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Visitor By</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.visitor}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Source</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={[styles.nameContainer, {
                        justifyContent: 'space-between', flexDirection: 'row'
                    }]}>
                        <Text style={styles.nameTxt}>{props?.items?.source}</Text>
                        <Button
                            width={90}
                            height={30}
                            btnTxtcolor={PRIMARY_THEME_COLOR}
                            bgcolor={BG_MAIN_COLOUR}
                            buttonText={strings.changeLink}
                            btnTxtsize={12}
                            handleBtnPress={props.handleLinkPress}
                        />
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Location</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.location}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Age</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.age}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Configuration</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.configuration}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Area (in sq.ft)</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.area}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Budget</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}>{props?.items?.budget}</Text>
                    </View>
                </View>
                <View style={styles.Txtview}>
                    <View style={styles.projectContainer}>
                        <Text style={styles.projectTxt}>Assigned to</Text>
                    </View>
                    <View><Text>:</Text></View>
                    <View style={[styles.nameContainer, { alignItems: 'center' }]}>
                        <DropdownInput
                            inputWidth={'80%'}
                            inputheight={24}
                            fontSize={9.5}
                            borderWidth={0.6}
                            borderColor={GRAY_COLOR}
                            borderRadius={5}
                            value={props?.value}
                            setValue={props?.setValue}
                            placeholder={strings.listOfall + " " + strings.closingManagerHeader}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default AppointMentDetailsItem