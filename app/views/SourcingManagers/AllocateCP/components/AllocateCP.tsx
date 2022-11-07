import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import images from '../../../../assets/images';
import Header from '../../../../components/Header';
import { Checkbox } from 'react-native-paper';
import { PRIMARY_THEME_COLOR, WHITE_COLOR } from '../../../../components/utilities/constant';
import strings from '../../../../Localization';
import styles from './styles';
import Button from '../../../../components/Button';

const AllocateCPView = (props: any) => {
    const getValues = () => {

    }
    return (
        <View style={styles.mainContainer}>
            <Header
                headerText={strings.cpAllocation}
                headerStyle={styles.headerStyle}
                headerTextStyle={styles.headerTextStyle}
                leftImageSrc={images.backArrow}
                rightSecondImageScr={images.notification}
                RightSecondIconStyle={{ tintColor: WHITE_COLOR }}
                leftImageIconStyle={{ tintColor: WHITE_COLOR }}
                handleOnLeftIconPress={props.onPressBack}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.containerVw}>
                <Text style={styles.headerTxt}>{strings.newAllocateTxt}</Text>
                <View style={styles.selectedBox}>
                    {props?.selectedCp?.length > 0 ?
                        <>
                            {props?.selectedCp?.map((item: any, index: any) => {
                                return (
                                    <View style={styles.innerBoxVw}>
                                        <Text>{item.cpName}</Text>
                                        <Image
                                            source={images.close}
                                            style={styles.crossVw}
                                        />
                                    </View>
                                )
                            })}
                        </> : <Text style={styles.noSelectedTxt}>{strings.noCpSelected}</Text>
                    }
                </View>
                <TextInput
                    placeholder={strings.searchTxt}
                    style={styles.searchInputVw}
                    onFocus={() => props.setAllList(true)}
                    onChange={(text: any) => props.handleSearch(text)}
                />
                {props.allList ?
                    <FlatList
                        data={props.cpList}
                        renderItem={({ item, index }: any) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => props.handleSelects(item)}
                                    style={styles.innerBoxVw}>
                                    <Text>{item.cpName}</Text>
                                       {/* <Checkbox
                                        value={getValues(item)}
                                        // status={item.cpName === "first" ? "checked" : "unchecked"}
                                        onPress={() => props.handleSelects(item)}
                                        color={PRIMARY_THEME_COLOR}
                                    /> */}
                                </TouchableOpacity>
                            )
                        }}
                    /> : null
                }

                <View style={{ marginTop: 25, alignItems: 'flex-end', }}>
                    <Button
                        width={150}
                        height={40}
                        btnTxtsize={16}
                        buttonText={strings.cpAllocation}
                    />
                </View>
            </View>
        </View>
    )
}
export default AllocateCPView;