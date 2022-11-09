import React from "react";
import { View, Text, FlatList } from 'react-native';
import images from "../../../../assets/images";
import Header from "../../../../components/Header";
import { PRIMARY_THEME_COLOR } from "../../../../components/utilities/constant";
import strings from "../../../../components/utilities/Localization";
import styles from "./styles";
import PickupRequestsList from './PickupRequestsList'


const PickupRequestView = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <Header
                leftImageSrc={images.menu}
                rightSecondImageScr={images.notification}
                headerText={strings.PickuprequestHeader}
                handleOnLeftIconPress={props.handleDrawerPress}
                headerStyle={styles.headerStyle}
                RightFirstIconStyle={styles.RightFirstIconStyle}
                barStyle={'light-content'}
                statusBarColor={PRIMARY_THEME_COLOR}
            />
            <View style={styles.propertyListView}>
                <FlatList
                    data={props?.DATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <PickupRequestsList items={item}
                    // onPressView={onPressView} 
                    />}
                />
            </View>
        </View>
    )
}
export default PickupRequestView